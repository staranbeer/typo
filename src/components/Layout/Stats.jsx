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
import React from "react";

const Stats = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>the game has ended</ModalBody>

        <ModalFooter>
          <Button size={"lg"} colorScheme="blue" mr={3}>
            Start practicing now!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Stats;
