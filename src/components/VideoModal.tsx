import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay
} from "@chakra-ui/react";
import { ClipType } from "../types/ClipType";

type VideoModalProp = {
  clip: ClipType;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const render = "twi-booter.vercel.app";

export const VideoModal = ({
  clip,
  isOpen,
  onOpen,
  onClose,
}: VideoModalProp) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}  size={"2xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody objectFit={"fill"} p="0">
              <iframe
                src={`https://clips.twitch.tv/embed?clip=${clip.slug}&parent=${render}`}
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                title="videoModal"
                width="100%"
                style={{aspectRatio:16/9}}
              />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
