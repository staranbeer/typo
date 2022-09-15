import React, { useState, useEffect } from "react";
import { Box, Button, useDisclosure, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Introduction from "./components/Layout/Introduction";
import Stats from "./components/Layout/Stats";
import Game from "./components/Layout/Game/Game";
import Header from "./components/Layout/Header";

/*  actions */
import { startGame, stopGame } from "./store/gameSlice";
import { incrementTimer, stopTimer } from "./store/timerSlice";

const App = () => {
  /* global state */
  const { timer } = useSelector((state) => state.timer);
  const { hasStarted, hasEnded } = useSelector((state) => state.game);
  const { duration } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  /* side effects */
  useEffect(() => {
    // start a timer for <duration> seconds when the game starts

    if (hasStarted) {
      const interval = setInterval(() => {
        if (timer < duration && !hasEnded) {
          dispatch(incrementTimer());
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [hasStarted, hasEnded]);

  useEffect(() => {
    // stop the timer when the game ends

    if (timer === duration) {
      dispatch(stopTimer());
      dispatch(stopGame());
    }
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
          <Header />

          <Button
            onClick={() => {
              dispatch(startGame());
            }}
          >
            click me
          </Button>

          <Box flex={1} w="full">
            <Game />
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
