import {
  Box,
  Input,
  InputProps,
  SimpleGrid,
  TagCloseButtonProps,
  TagLabelProps,
  TagProps,
  Wrap,
  WrapItem,
  WrapItemProps,
  WrapProps,
} from "@chakra-ui/react";
import type { ForwardedRef, KeyboardEvent, SyntheticEvent } from "react";
import { forwardRef, useCallback } from "react";

import type { MaybeFunc } from "./maybe";
import { maybeCall } from "./maybe";
import ChakraTagInputTag from "./Tag";
import "./styles.css";

type MaybeIsInputProps<P> = MaybeFunc<[isInput: boolean, index?: number], P>;
type MaybeTagProps<P> = MaybeFunc<[tag: string, index?: number], P>;

export type ChakraTagInputProps = InputProps & {
  tags?: string[];
  onTagsChange?(event: SyntheticEvent, tags: string[]): void;
  onTagAdd?(event: SyntheticEvent, value: string): void;
  onTagRemove?(event: SyntheticEvent, index: number): void;

  vertical?: boolean;
  addKeys?: string[];

  wrapProps?: WrapProps;
  wrapItemProps?: MaybeIsInputProps<WrapItemProps>;
  tagProps?: MaybeTagProps<TagProps>;
  tagLabelProps?: MaybeTagProps<TagLabelProps>;
  tagCloseButtonProps?: MaybeTagProps<TagCloseButtonProps>;
};

export default forwardRef(function ChakraTagInput(
  {
    tags = [],
    onTagsChange,
    onTagAdd,
    onTagRemove,
    vertical = false,
    addKeys = ["Enter"],
    wrapProps,
    wrapItemProps,
    tagProps,
    tagLabelProps,
    tagCloseButtonProps,
    ...props
  }: ChakraTagInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const addTag = useCallback(
    (event: SyntheticEvent, tag: string) => {
      onTagAdd?.(event, tag);
      if (event.isDefaultPrevented()) return;

      onTagsChange?.(event, tags.concat([tag]));
    },
    [tags, onTagsChange, onTagAdd]
  );
  const removeTag = useCallback(
    (event: SyntheticEvent, index: number) => {
      onTagRemove?.(event, index);
      if (event.isDefaultPrevented()) return;

      onTagsChange?.(event, [
        ...tags.slice(0, index),
        ...tags.slice(index + 1),
      ]);
    },
    [tags, onTagsChange, onTagRemove]
  );
  const handleRemoveTag = useCallback(
    (index: number) => (event: SyntheticEvent) => {
      removeTag(event, index);
    },
    [removeTag]
  );
  const onKeyDown = props.onKeyDown;
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event);

      if (event.isDefaultPrevented()) return;
      if (event.isPropagationStopped()) return;

      const { currentTarget, key } = event;
      const { selectionStart, selectionEnd } = currentTarget;
      if (addKeys.indexOf(key) > -1 && currentTarget.value) {
        addTag(event, currentTarget.value);
        if (!event.isDefaultPrevented()) {
          currentTarget.value = "";
        }
        event.preventDefault();
      } else if (
        key === "Backspace" &&
        tags.length > 0 &&
        selectionStart === 0 &&
        selectionEnd === 0
      ) {
        removeTag(event, tags.length - 1);
      }
    },
    [addKeys, tags.length, addTag, removeTag, onKeyDown]
  );

  return (
    <Wrap align="center" {...wrapProps}>
      <WrapItem flexGrow={1} {...maybeCall(wrapItemProps, true, tags.length)}>
        <Input
          bgColor={"gray.700"}
          shadow={"lg"}
          {...props}
          onKeyDown={handleKeyDown}
          ref={ref}
          placeholder={"Add Tags and press Enter..."}
          _placeholder={{textColor:"purple.500"}}
        />
      </WrapItem>
      <SimpleGrid
        px=".2rem"
        gap=".2rem"
        columns={2}
        w="full"
        h="6rem"
        overflowY={"scroll"}
        p=".5rem"
        className="tagsGrid"
        borderColor={"#9146FF"}
        borderWidth={"2px"}
        rounded={"lg"}
        visibility={tags.length ? "visible" : "hidden"}
      >
        {tags.map((tag, index) => (
          <Box {...maybeCall(wrapItemProps, false, index)} key={index} mb="0">
            <ChakraTagInputTag
              onRemove={handleRemoveTag(index)}
              tagLabelProps={maybeCall(tagLabelProps, tag, index)}
              tagCloseButtonProps={maybeCall(tagCloseButtonProps, tag, index)}
              colorScheme={props.colorScheme}
              bgColor={"#9146FF"}
              size={props.size}
              {...maybeCall(tagProps, tag, index)}
            >
              {tag}
            </ChakraTagInputTag>
          </Box>
        ))}
      </SimpleGrid>
    </Wrap>
  );
});
