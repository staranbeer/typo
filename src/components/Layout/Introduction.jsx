import {
  Box,
  Button,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Introduction = ({ hasEnded, hasStarted, setHasStarted }) => {
  return (
    <Modal
      isOpen={!hasStarted && !hasEnded}
      onClose={() => setHasStarted(true)}
      isCentered={true}
      size="xl"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Typo</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={"8"}>
          <Text fontSize={"lg"}>
            A typing test and practice tool made specifically for developers.
          </Text>

          <Text fontSize={"lg"}>
            Learn to type faster and more accurately by practicing with real
            keywords from your favorite programming languages.
          </Text>

          <br />

          <Text fontSize={"lg"}>
            ( We only support javaScript at the moment. More languages and
            features coming soon! )
          </Text>
          <SimpleGrid mt="10" gap="6" columns={"2"}>
            <GridItem gap="2" w="full" alignItems={"start"}>
              <label>Select Mode</label>
              <Select mt="2">
                {["Vanilla Js", "DOM", "Node"].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </Select>
            </GridItem>

            <GridItem w="full" alignItems={"start"}>
              <label>Select Duration</label>
              <Select mt="2">
                {["10", "30", "60"].map((i) => (
                  <option key={i} value={i}>
                    {i} seconds
                  </option>
                ))}
              </Select>
            </GridItem>
          </SimpleGrid>
        </ModalBody>

        <ModalFooter>
          <Button
            size={["md", "lg"]}
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
