import { InfoIcon, WarningIcon } from "@chakra-ui/icons";
import {
  AlertIcon,
  Box,
  Center,
  Heading,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { ClipType } from "../types/ClipType";
import { SingleClip } from "./SingleClip";

type ClipListProps = {
  clips: ClipType[];
  isLoading: boolean;
};

export const ClipList = ({ clips, isLoading }: ClipListProps) => {
  return (
    <VStack
      overflowY={"scroll"}
      minH="100vh"
      p=".5rem"
      bg={"linear-gradient(0deg, rgba(0,64,170,1) 0%, rgba(130,26,161,1) 100%)"}
    >
      <Heading
        my="1rem"
        fontWeight={"extrabold"}
        textColor={"white"}
        fontStyle={"italic"}
      >
        RESULTS
      </Heading>
      <Center m="1rem" mt={"4rem"}>
        {isLoading ? (
          <Spinner />
        ) : (
          <SimpleGrid gap={"2rem"} columns={[1, 2, 2, 2, 3]} mb="1rem">
            {clips.length > 0 &&
              clips.map((clip: ClipType, index: number) => {
                return <SingleClip key={index} clip={clip} />;
              })}
          </SimpleGrid>
        )}
        {clips.length === 0 && (
          <WarningIcon fontSize={"8rem"} mt="40vh" mr="4rem" />
        )}
      </Center>
    </VStack>
  );
};
