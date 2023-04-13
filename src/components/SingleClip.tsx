import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ClipType } from "../types/ClipType";
import { useState } from "react";
import { VideoModal } from "./VideoModal";

type SingleClipProp = {
  clip: ClipType;
};

export const SingleClip = ({ clip }: SingleClipProp) => {
  const [hover, setHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        shadow={"xl"}
        rounded={"md"}
        flexDirection={"row"}
        backgroundColor={"black"}
        pb={[".5rem", ".5rem", "0", "0", "0"]}
        ringColor={"teal.200"}
        ring={"2px"}
        h={["25rem", "25rem", "16rem", "16rem", "16rem"]}
        onMouseEnter={(e: React.MouseEvent) => setHover(true)}
        onMouseLeave={(e: React.MouseEvent) => setHover(false)}
      >
        <Link onClick={onOpen}>
          <HStack>
            <Image
              rounded={"md"}
              boxSize={"3rem"}
              src={clip.streamer.profileImageURL}
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
              src={!hover ? clip.anteprima_clip : clip.url}
              w={["100%", "100%", "60%", "60%", "60%"]}
              fallbackSrc="https://clips-media-assets2.twitch.tv/AfR1v3qWNJSjkidwKZGOJg/AT-cm%7CAfR1v3qWNJSjkidwKZGOJg-preview-260x147.jpg"
            ></Image>
            <Flex
              ml={[".5rem", ".5rem", ".5rem", "0", "0"]}
              w="inherit"
              flexDirection={"column"}
              overflow={"hidden"}
            >
              <Heading
                h={["4rem", "4rem", "8rem", "8rem", "8rem"]}
                mr=".4rem"
                fontSize={"md"}
                color={"white"}
                textOverflow={"ellipsis"}
                overflow={"hidden"}
                w="inherit"
              >
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
                  <TimeIcon style={{ marginRight: ".5rem" }} />
                  {clip.data_creazione.split("T")[1].replace("Z", "")}
                </Text>
              </Stack>
            </Flex>
          </Flex>
        </Link>
      </Flex>
      <VideoModal
        clip={clip}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
    </>
  );
};
