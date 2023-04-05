import {
    Flex,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { SyntheticEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import ChakraTagInput from "./ChakraTagInput";
import MultiSelectMenu from "./MultiselectMenu";

// eslint-disable-next-line @typescript-eslint/no-redeclare
type PropTypes = {};

const FiltersBar = (props: PropTypes) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [tags, setTags] = useState<string[] | undefined>([]);
  const [languages, setLanguages] = useState<string[] | undefined>([]);

  const handleTagsChange = useCallback(
    (event: SyntheticEvent, tags: string[]) => {
      setTags(tags);
    },
    []
  );

  const handleLanguagesChange = useCallback(
    (event: SyntheticEvent, languages: string[]) => {
      setLanguages(languages);
    },
    []
  );
  const onSubmit = (data: any) => console.log(data);

  const options = ["IT", "EN", "FR"];

  return (
    <Flex>
      <form onSubmit={() => handleSubmit(onSubmit)}>
        <Input
          defaultValue="Search a Game"
          {...register("game", { required: true })}
        />

        <NumberInput min={1} max={100} defaultValue="Number of Results">
          <NumberInputField {...register("limit", { required: true })} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <ChakraTagInput
          tags={tags}
          onTagsChange={handleTagsChange}
          {...register("tags")}
        />

        <Select placeholder="Periodo" {...register("filter")}>
          <option value="LAST_DAY">Oggi</option>
          <option value="LAST_WEEK">Ultima Settimana</option>
          <option value="ALL_TIME">Sempre</option>
        </Select>

       

        <MultiSelectMenu label="Lingue" options={options} />
      </form>
    </Flex>
  );
};

export default FiltersBar;
