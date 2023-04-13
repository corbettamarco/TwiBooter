import {
  Button,
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

const amplify = "";

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
            <iframe src={`${clip.url}&parent=${amplify}`}/>
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
