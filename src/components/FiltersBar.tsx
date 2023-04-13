import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Select,
  Stack,
} from "@chakra-ui/react";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Searchtype } from "../types/SearchType";
import ChakraTagInput from "./ChakraTagInput";
import MultiSelectMenu from "./MultiselectMenu";
import { ClipType } from "../types/ClipType";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-redeclare
const langOptions = ["IT", "EN", "FR"];
type FiltersBarType = {
  clips: ClipType[];
  setClips: (data: ClipType[]) => void;
  setLoading: (data: boolean) => void;
};
const FiltersBar = ({ clips, setClips , setLoading}: FiltersBarType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Searchtype>();

  const [tags, setTags] = useState<string[] | undefined>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([
    langOptions[0],
  ]);

  const handleTagsChange = useCallback(
    (event: SyntheticEvent, tags: string[]) => {
      setTags(tags);
    },
    []
  );

  const onSubmit: SubmitHandler<Searchtype> = (values) => {
    setLoading(true);
    getData(values);
  };

  const getData = async (values: Searchtype) => {
    const data = await axios.post(
      "https://tycq404qtg.execute-api.us-east-1.amazonaws.com/test/api",
      values
    );
    setLoading(false);
    setClips(await data.data);
  };

  useEffect(() => {
    setValue("tags", tags);
    setValue("languages", selectedLanguages);
  }, [selectedLanguages, setValue, tags]);

  return (<Box textColor={"white"}>
    <form onSubmit={handleSubmit(onSubmit)} >
      <Heading
        verticalAlign={"center"}
        fontStyle={"italic"}
        textColor={"#9146FF"}
        textAlign={"center"}
        pt=".5rem"
      >
        TwiBooter
      </Heading>
      <Stack
        mt=".5rem"
        h="90vh"
        rounded={"lg"}
        justifyContent={"left"}
        gap={"1rem"}
        p=".8rem"
      >
        <FormControl isInvalid={errors.game ? true : false} isRequired>
          <FormLabel fontWeight={"bold"}>Game</FormLabel>
          <Select
            placeholder="Select a Game"
            {...register("game")}
            bgColor={"gray.800"}
            textColor={"black"}
            shadow={"lg"}
          >
            <option value="VALORANT"> Valorant </option>
          </Select>
          <FormErrorMessage>
            {errors.game && errors.game.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontWeight={"bold"}>Number of Results</FormLabel>
          <Select
            defaultValue={10}
            {...register("limit", { valueAsNumber: true })}
            bgColor={"gray.800"}
            textColor={"black"}
            shadow={"lg"}
          >
            <option value={10}> 10 </option>
            <option value={20}> 20 </option>
            <option value={30}> 30 </option>
          </Select>
          <FormErrorMessage>
            {errors.limit && errors.limit.message}
          </FormErrorMessage>
        </FormControl>{" "}
        <FormControl isRequired>
          <FormLabel fontWeight={"bold"}>Filter</FormLabel>
          <Select
            defaultValue={"ALL_TIME"}
            {...register("filter")}
            bgColor={"gray.800"}
            textColor={"black"}
            shadow={"lg"}
          >
            <option value="LAST_DAY">Last Day</option>
            <option value="LAST_WEEK">Last Week</option>
            <option value="ALL_TIME">All Time</option>
          </Select>
          <FormErrorMessage>
            {errors.filter && errors.filter.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel fontWeight={"bold"}>Languages</FormLabel>

          <div {...register("languages")}>
            <MultiSelectMenu
              selectedOptions={selectedLanguages}
              setSelectedOptions={setSelectedLanguages}
              label="Languages"
              options={langOptions}
            />
          </div>

          <FormErrorMessage>
            {errors.languages && errors.languages.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel fontWeight={"bold"}>Tags</FormLabel>
          <ChakraTagInput tags={tags} onTagsChange={handleTagsChange} />
          <FormErrorMessage>
            {errors.limit && errors.limit.message}
          </FormErrorMessage>
        </FormControl>
        <Button ml="3.2rem" type="submit" bgColor={"#9146FF"}>
          Search
        </Button>
      </Stack>
    </form></Box>
  );
};

export default FiltersBar;
