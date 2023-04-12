import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import {
    Flex,
    HStack,
    Heading,
    Image,
    Spacer,
    Stack,
    Text
} from "@chakra-ui/react";
import { ClipType } from "../types/ClipType";

type SingleClipProp = {
  clip: ClipType;
};

export const SingleClip = ({ clip }: SingleClipProp) => {
  return (
    <Flex
      shadow={"xl"}
      rounded={"md"}
      flexDirection={"column"}
      justify={"flex-end"}
      backgroundColor={"#1D2025"}
      pb={[".5rem",".5rem","0","0","0"]}
    >
      <HStack>
        <Image
          rounded={"md"}
          boxSize={"3rem"}
          src={clip.streamer.profileImageUrl}
        ></Image>
        <Text fontWeight={"bold"} textColor={"white"}>
          {clip.streamer.displayName}
        </Text>
        <Spacer />
        <Image
          rounded={"md"}
          boxSize={"3rem"}
          src={clip.immagine_categoria}
        ></Image>
      </HStack>
      <Flex
        mt="1rem"
        gap={".5rem"}
        flexDirection={["column", "column", "row", "row", "row"]}
      >
        <Image
          rounded={"md"}
          src={clip.anteprima_clip}
          w={["100%","100%","60%","60%","60%"]}
          
        ></Image>
        <Flex ml={[".5rem",".5rem",".5rem","0","0"]} w="inherit" flexDirection={"column"}>
          <Heading fontSize={"lg"} color={"white"} textTransform={"uppercase"}>
            {clip.titolo}
          </Heading>
          <Stack
            my=".5rem"
            fontStyle={"italic"}
            fontSize={"sm"}
            textColor={"white"}
          >
            <Text>
              <CalendarIcon mr=".5rem" />
              {clip.data_creazione.split("T")[0]}
            </Text>
            <Text>
              <TimeIcon  style={{ marginRight: ".5rem" }} />
              {clip.data_creazione.split("T")[1].replace("Z", "")}
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};
