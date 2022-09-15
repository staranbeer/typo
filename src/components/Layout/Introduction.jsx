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

const Introduction = ({ hasEnded, hasStarted, setHasStarted }) => {
  return (
    <Modal
      isOpen={!hasStarted && !hasEnded}
      onClose={() => setHasStarted(true)}
      isCentered={true}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          possimus quo nulla, vitae ducimus doloremque nam vero! Repellat cumque
          obcaecati enim quia suscipit magnam delectus impedit. Impedit
          recusandae laborum odio.
        </ModalBody>

        <ModalFooter>
          <Button
            size={"lg"}
            colorScheme="blue"
            mr={3}
            onClick={() => setHasStarted(true)}
          >
            Start practicing now!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Introduction;
