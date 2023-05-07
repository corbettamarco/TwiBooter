import { WarningIcon } from "@chakra-ui/icons";
import { Center, Spinner, VStack, Wrap } from "@chakra-ui/react";
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
      
      <Center m="1rem" >
        {isLoading ? (
          <Spinner />
        ) : clips.length > 0 ? (
          <Wrap  spacing={"2rem"} p="1rem" justify={"center"}>
            {clips && clips.map((clip: ClipType, index: number) => {
              return <SingleClip key={index} clip={clip} />;
            })}
          </Wrap>
        ) : (
          !isLoading && <WarningIcon fontSize={"8rem"} mt="40vh" />
        )}
      </Center>
    </VStack>
  );
};
