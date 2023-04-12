import { Center, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { ClipType } from "../types/ClipType";
import { SingleClip } from "./SingleClip";

type ClipListProps = {
  clips: ClipType[];
};

export const ClipList = ({ clips }: ClipListProps) => {
  return (
    <VStack px=".5rem">
      <Heading my="1rem" fontWeight={"extrabold"} textColor={"purple.600"} fontStyle={"italic"}>RESULTS</Heading>
      <Center m="1rem" mt={"4rem"}>
        <SimpleGrid spacing={"1rem"}  columns={[1, 2, 2, 2, 3]} >
          {clips.map((clip: ClipType, index: number) => {
            return <SingleClip key={index} clip={clip} />;
          })}
        </SimpleGrid>
      </Center>
    </VStack>
  );
};
