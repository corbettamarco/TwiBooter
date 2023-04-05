import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Select,
  Stack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Searchtype } from "../types/SearchType";
import ChakraTagInput from "./ChakraTagInput";
import MultiSelectMenu from "./MultiselectMenu";

// eslint-disable-next-line @typescript-eslint/no-redeclare
type PropTypes = {};

const FiltersBar = (props: PropTypes) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Searchtype>();

  const [tags, setTags] = useState<string[] | undefined>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleTagsChange = useCallback(
    (event: SyntheticEvent, tags: string[]) => {
      setTags(tags);
    },
    []
  );

  const onSubmit: SubmitHandler<Searchtype> = (values) => {
    console.log(values);
  };

  const langOptions = ["IT", "EN", "FR"];

  useEffect(() => {
    setValue("tags", tags);
    setValue("languages", selectedLanguages);
  }, [selectedLanguages, setValue, tags]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center mt="1rem" >
        <Flex
          textAlign={"center"}
          gap={".5rem"}
          direction={["column", "column", "row", "row", "row"]}
        >
          <FormControl isInvalid={errors.game ? true : false}>
            <Select
              placeholder="Select a Game"
              {...register("game")}
              w="10rem"
            >
              <option value="VALORANT"> Valorant </option>
            </Select>
            <FormErrorMessage>
              {errors.game && errors.game.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <Select defaultValue={10} {...register("limit")}>
              <option value={10}> 10 </option>
              <option value={20}> 20 </option>
              <option value={30}> 30 </option>
            </Select>
            <FormErrorMessage>
              {errors.limit && errors.limit.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <ChakraTagInput tags={tags} onTagsChange={handleTagsChange} />
            <FormErrorMessage>
              {errors.limit && errors.limit.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <Select
              defaultValue={"ALL_TIME"}
              placeholder="Periodo"
              {...register("filter")}
              minW="12rem"
            >
              <option value="LAST_DAY">Oggi</option>
              <option value="LAST_WEEK">Ultima Settimana</option>
              <option value="ALL_TIME">Sempre</option>
            </Select>
            <FormErrorMessage>
              {errors.filter && errors.filter.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <div {...register("languages")}>
              <MultiSelectMenu
                selectedOptions={selectedLanguages}
                setSelectedOptions={setSelectedLanguages}
                label="Lingue"
                options={langOptions}
              />
            </div>

            <FormErrorMessage>
              {errors.languages && errors.languages.message}
            </FormErrorMessage>
          </FormControl>{" "}
        </Flex>
      </Center>
        
        <Button mt="1rem" ml="1.6rem" type="submit"> Search </Button>
        
    </form>
  );
};

export default FiltersBar;
