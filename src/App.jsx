import React, { useEffect, useState } from "react";
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

  // component state
  const [isIntroModalOpen, setIntroModalOpen] = useState(true);
  const [isStatsModalOpen, setStatsModalOpen] = useState(true);

  const closeStatsModal = () => {
    setStatsModalOpen(false);
  };

  const closeIntroModal = () => {
    setIntroModalOpen(false);
  };

  const dispatch = useDispatch();

  /* side effects */
  useEffect(() => {
    // start a timer for <duration> seconds when the game starts

    if (hasStarted) {
      const interval = setInterval(() => {
        if (timer <= duration && !hasEnded) {
          dispatch(incrementTimer());
        } else {
          clearInterval(interval);
        }
      }, 1000);

      if (+timer >= +duration) {
        dispatch(stopGame());
        dispatch(stopTimer());
      }

      return () => clearInterval(interval);
    }
  }, [hasStarted, hasEnded, timer]);

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
          {hasStarted && <Header />}

          <Button
            onClick={() => {
              dispatch(startGame());
            }}
          >
            click me
          </Button>

          <Box flex={1} w="full">
            {hasStarted && <Game />}
          </Box>
        </VStack>
      </Box>

      {/* intro modal */}
      {
        <Introduction
          isOpen={!hasStarted && !hasEnded && isIntroModalOpen}
          onClose={closeIntroModal}
        />
      }

      {/* stats Modal */}
      {
        <Stats
          isOpen={hasEnded && isStatsModalOpen}
          onClose={closeStatsModal}
        />
      }
    </>
  );
};

export default App;
