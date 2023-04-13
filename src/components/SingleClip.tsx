import { TimeIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Link,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
  Image
} from "@chakra-ui/react";
import { useState } from "react";
import { ClipType } from "../types/ClipType";
import { VideoModal } from "./VideoModal";

type SingleClipProp = {
  clip: ClipType;
};

export const SingleClip = ({ clip }: SingleClipProp) => {
  const [hover, setHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(clip.anteprima_clip);
  return (
    <>
      <Flex
        shadow={"xl"}
        rounded={"md"}
        flexDirection={"row"}
        backgroundColor={"black"}
        pb={[".5rem", ".5rem", "0", "0", "0"]}
        ringColor={"white"}
        ring={"2px"}
        w={"260px"}
        h={"147px"}
        onMouseEnter={(e: React.MouseEvent) => setHover(true)}
        onMouseLeave={(e: React.MouseEvent) => setHover(false)}
        bgImage={`url(${clip.anteprima_clip})`}
        bgSize={"contain"}
      >
        <Link onClick={onOpen} w={"full"}>
          <Box w={"full"} h={"full"} p={3}>
          <HStack justifyContent={"space-between"} >
            <Tag size="sm" bgColor={"black"} borderRadius="full">
              <ViewIcon textColor={"white"} mr={1}></ViewIcon>
              <TagLabel textColor={"white"} fontWeight={"bold"}>
                {clip.visualizzazioni}
              </TagLabel>
            </Tag>
            <Tag size="sm" bgColor={"black"} borderRadius="full">
            <TimeIcon textColor={"white"} mr={1}></TimeIcon>
              <TagLabel textColor={"white"} fontWeight={"bold"}>
                {clip.durata}
              </TagLabel>
            </Tag>
          </HStack>
          <Flex direction={"column"} mt={10} gap={1}>
          <Flex direction={"row"} alignItems={"center"} gap={2}>
            <Avatar size={"sm"} src={clip.streamer.profileImageURL}></Avatar>
            <Text maxW={"50%"} fontSize={"sm"} noOfLines={1} textColor={"white"} fontWeight={"bold"}>{clip.streamer.displayName}</Text>
          </Flex>
          <Flex direction={"row"} alignItems={"center"} gap={2} >
            <Image w={"32px"} minW={"32px"} height={"36px"} src={clip.immagine_categoria} ></Image>
            <Text maxW={"100%"} fontSize={"sm"} noOfLines={1} textColor={"white"} fontWeight={"bold"}>{clip.titolo}</Text>
          </Flex>
          </Flex>
          </Box>
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
