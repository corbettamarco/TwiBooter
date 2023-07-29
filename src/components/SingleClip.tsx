import { TimeIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Tag,
  TagLabel,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { ClipType } from "../types/ClipType";
import { VideoModal } from "./VideoModal";

type SingleClipProp = {
  clip: ClipType;
};

export const SingleClip = ({ clip }: SingleClipProp) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hover, setHover] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
       <Flex
        _hover={{
          textDecoration: "none",
          transform: "scale(1.10)",
          transition: "0.3s",
        }}
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
        bgImage={`url(${clip.thumbnail_url})`}
        bgSize={"contain"}
      >
        <Link _hover={{ textDecoration: "none" }} onClick={onOpen} w={"full"}>
          <Box w={"full"} h={"full"} p={3}>
          <HStack justifyContent={"space-between"} >
            <Tag size="sm" bgColor={"black"} borderRadius="full">
              <ViewIcon textColor={"white"} mr={1}></ViewIcon>
              <TagLabel textColor={"white"} fontWeight={"bold"}>
                {clip.viewCount}
              </TagLabel>
            </Tag>
            <Tag size="sm" bgColor={"black"} borderRadius="full">
            <TimeIcon textColor={"white"} mr={1}></TimeIcon>
              <TagLabel textColor={"white"} fontWeight={"bold"}>
                {clip.duration_seconds}
              </TagLabel>
            </Tag>
          </HStack>
          <Flex direction={"column"} mt={10} gap={1}>
          <Flex direction={"row"} alignItems={"center"} gap={2}>
            <Avatar size={"sm"} src={clip.broadcaster !== null ? clip.broadcaster.profileImageURL : "" }></Avatar>
            <Text maxW={"50%"} fontSize={"sm"} noOfLines={1} textColor={"white"} fontWeight={"bold"}>{clip.broadcaster !== null ?  clip.broadcaster.displayName : ""}</Text>
          </Flex>
          <Flex direction={"row"} alignItems={"center"} gap={2} >
            <Image w={"32px"} minW={"32px"} height={"36px"} src={clip.box_art_url} ></Image>
            <Text maxW={"100%"} fontSize={"sm"} noOfLines={1} textColor={"white"} fontWeight={"bold"}>{clip.title}</Text>
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
