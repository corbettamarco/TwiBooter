import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "../styles.css";
import { Searchtype } from "../types/SearchType";
import ChakraTagInput from "./ChakraTagInput";
import MultiSelectMenu from "./MultiselectMenu";
// eslint-disable-next-line @typescript-eslint/no-redeclare
const langOptions = ["IT", "EN", "FR"];

type FiltersBarType = {
  onSubmit: SubmitHandler<Searchtype>;
};

const FiltersBar = ({ onSubmit }: FiltersBarType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Searchtype>();

  const [tags, setTags] = useState<string[] | undefined>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([
    langOptions[1],
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [inputValue, setInputValue] = useState("");

  const handleTagsChange = useCallback(
    (event: SyntheticEvent, tags: string[]) => {
      setTags(tags);
    },
    []
  );

  useEffect(() => {
    setValue("tags", tags);
    setValue("languages", selectedLanguages);
  }, [selectedLanguages, setValue, tags]);

  return (
    <Box textColor={"white"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading
          verticalAlign={"center"}
          fontStyle={"italic"}
          textColor={"#9146FF"}
          textAlign={"center"}
          pt=".5rem"
          ml={"1rem"}
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
          <FormControl mt={'1rem'} isInvalid={errors.game ? true : false} isRequired>
            <FormLabel fontWeight={"bold"}>Game</FormLabel>
            <Input
              placeholder="Select a Game"
              {...register("game")}
              bgColor={"gray.700"}
              textColor={"#9146FF"}
              shadow={"lg"}
              onChange={(e) => setInputValue(e.target.value)}
            ></Input>
            <FormErrorMessage>
              {errors.game && errors.game.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontWeight={"bold"}>Number of Results</FormLabel>
            <Select
              defaultValue={10}
              {...register("limit", { valueAsNumber: true })}
              bgColor={"gray.700"}
              textColor={"#9146FF"}
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
              bgColor={"gray.700"}
              textColor={"#9146FF"}
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
          <Button leftIcon={<SearchIcon /> } ml="3.2rem" type="submit" bgColor={"yellow.400"}>
          Search 
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FiltersBar;
