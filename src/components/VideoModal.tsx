import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ClipType } from "../types/ClipType";

type VideoModalProp = {
  clip: ClipType;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const amplify = "master.d1afh24azjts0l.amplifyapp.com";

export const VideoModal = ({
  clip,
  isOpen,
  onOpen,
  onClose,
}: VideoModalProp) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{clip.titolo}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <iframe src={`https://clips.twitch.tv/embed?clip=${clip.slug}&parent=${amplify}`} frameBorder="0" allowFullScreen={true} scrolling="no" height="1280" width="720" title="videoModal"/>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button size={"lg"} colorScheme="purple" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
