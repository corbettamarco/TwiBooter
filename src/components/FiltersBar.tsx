import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Select,
  Stack
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Searchtype } from "../types/SearchType";
import ChakraTagInput from "./ChakraTagInput";
import MultiSelectMenu from "./MultiselectMenu";

// eslint-disable-next-line @typescript-eslint/no-redeclare
type PropTypes = {};
const langOptions = ["IT", "EN", "FR"];
const FiltersBar = (props: PropTypes) => {
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
    console.log(values);
  };

  useEffect(() => {
    setValue("tags", tags);
    setValue("languages", selectedLanguages);
  }, [selectedLanguages, setValue, tags]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading verticalAlign={"center"} fontStyle={"italic"} textColor={"yellow"} textAlign={"center"} pt="0">Reel Maker</Heading>
      <Stack
        mt=".5rem"
        h="90vh"
        rounded={"lg"}
        justifyContent={"left"}
        gap={"1rem"}
        bgColor={"purple.400"}
        p=".5rem"
      >
        <FormControl isInvalid={errors.game ? true : false}>
        <FormLabel fontWeight={"bold"}>Game</FormLabel>
          <Select
            placeholder="Select a Game"
            {...register("game")}
            bgColor={"white"}
            shadow={"lg"}
          >
            <option value="VALORANT"> Valorant </option>
          </Select>
          <FormErrorMessage>
            {errors.game && errors.game.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
        <FormLabel fontWeight={"bold"}>Number of Results</FormLabel>
          <Select
            defaultValue={10}
            {...register("limit")}
            bgColor={"white"}
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
        <FormControl>
          <FormLabel fontWeight={"bold"}>Filter</FormLabel>
          <Select
            defaultValue={"ALL_TIME"}
            {...register("filter")}
            bgColor={"white"}
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
        <FormControl>
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
        <Button ml="3.2rem" type="submit" bgColor={"yellow"}>
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default FiltersBar;
