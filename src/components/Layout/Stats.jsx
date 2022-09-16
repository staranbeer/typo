import {
  Button,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGameMode } from "../../store/codeSlice";
import { changeGameDuration, startGame } from "../../store/gameSlice";
import {
  calculateAccuracyReducer,
  calculateSpeedReducer,
  resetStats,
} from "../../store/statsSlice";
import { resetTimer } from "../../store/timerSlice";

const Stats = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { correct, wrong, speed, accuracy } = useSelector(
    (state) => state.stats
  );
  const { hasEnded, duration } = useSelector((state) => state.game);

  useEffect(() => {
    if (hasEnded === true) {
      dispatch(calculateSpeedReducer({ duration: duration }));
      dispatch(calculateAccuracyReducer());
    }
  }, [hasEnded]);

  const handleModeChange = (e) => {
    dispatch(
      changeGameMode({
        mode: e.target.value,
      })
    );
  };

  const handleDurationChange = (e) => {
    dispatch(
      changeGameDuration({
        duration: e.target.value,
      })
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      closeOnOverlayClick={false}
      onClose={onClose}
      isCentered={true}
      size="xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading fontSize={"3xl"}>Stats</Heading>
        </ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <SimpleGrid py={"6"} columns={2} gap="5" alignItems="start3">
            <GridItem>
              <Text color={"#c3c3c3"} fontSize={"lg"}>
                <span style={{ fontWeight: "bold" }}>Right:</span> {correct}
              </Text>
            </GridItem>

            <GridItem>
              <Text color={"#c3c3c3"} fontSize={"lg"}>
                <span style={{ fontWeight: "bold" }}>speed:</span> {speed} wpm
              </Text>
            </GridItem>
            <GridItem>
              <Text color={"#c3c3c3"} fontSize={"lg"}>
                <span style={{ fontWeight: "bold" }}>wrong:</span> {wrong}
              </Text>
            </GridItem>
            <GridItem>
              <Text color={"#c3c3c3"} fontSize={"lg"}>
                <span style={{ fontWeight: "bold" }}>Accuracy:</span> {accuracy}
                %
              </Text>
            </GridItem>
          </SimpleGrid>

          <SimpleGrid mt="10" gap="6" columns={"2"}>
            <GridItem gap="2" w="full" alignItems={"start"}>
              <label>Select Mode</label>
              <Select mt="2" onChange={handleModeChange}>
                {["Vanilla Js", "DOM", "Node"].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </Select>
            </GridItem>

            <GridItem w="full" alignItems={"start"}>
              <label>Select Duration</label>
              <Select mt="2" onChange={handleDurationChange}>
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
            onClick={() => {
              dispatch(resetTimer());
              dispatch(startGame());
              dispatch(resetStats());
            }}
            size={"lg"}
            colorScheme="blue"
            mr={3}
          >
            Play again!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Stats;
