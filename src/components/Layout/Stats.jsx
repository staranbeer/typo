import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../../store/gameSlice";
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
        <ModalHeader>Stats</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Right: {correct}
          </Text>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            wrong: {wrong}
          </Text>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            speed: {speed} wpm
          </Text>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Accuracy: {accuracy}%
          </Text>
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
