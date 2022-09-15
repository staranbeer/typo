import { Box, Button, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Header from "./components/Layout/Header";
import TestCode from "./components/Layout/CodeArea/TestCode";
import { useEffect } from "react";
import Introduction from "./components/Layout/Introduction";
import Stats from "./components/Layout/Stats";
import { useDispatch, useSelector } from "react-redux";
import { stopGame } from "./store/gameSlice";

const App = () => {
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [duration, setDuration] = useState(2);
  const [timer, setTimer] = useState(0);

  const { hasStarted, hasEnded } = useSelector((state) => state.game);
  const { isOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  // start a timer for 30 seconds when the game starts

  useEffect(() => {
    if (hasStarted) {
      const interval = setInterval(() => {
        if (timer < duration && !hasEnded) {
          setTimer((prevTimer) => prevTimer + 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [hasStarted, hasEnded]);

  // reset the timer to 0 when the game ends
  useEffect(() => {
    if (timer === duration) {
      setTimer((prevDuration) => prevDuration);
      dispatch(stopGame());
    }
  }, [timer]);

  const startTimer = () => {
    setTimer((prevTimer) => prevTimer + 1);
  };

  const stopTimer = () => {
    setTimer(0);
  };

  const incrementRight = () => {
    setRight((prevRight) => prevRight + 1);
  };

  const incrementWrong = () => {
    setWrong((prevWrong) => prevWrong + 1);
  };

  useEffect(() => {
    console.log(timer);
  }, [timer]);

  return (
    <>
      <Box h="100vh" w="100vw" overflow={"hidden"} p={10}>
        <VStack
          w="full"
          h="full"
          align={"start"}
          maxW={"5xl"}
          mx="auto"
          gap="4"
        >
          <Header
            right={right}
            wrong={wrong}
            duration={duration}
            setDuration={setDuration}
            timer={timer}
          />
          <Button onClick={() => setHasStarted(true)}>click me</Button>

          <Box flex={1} w="full">
            <TestCode
              hasStarted={hasStarted}
              hasEnded={hasEnded}
              incrementRight={incrementRight}
              incrementWrong={incrementWrong}
            />
          </Box>
        </VStack>
      </Box>
      {/* intro modal */}

      {<Introduction />}

      {/* stats Modal */}
      {<Stats />}
    </>
  );
};

export default App;
