import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stats from "./components/Layout/Stats";
import Game from "./components/Layout/Game/Game";
/*  actions */
import { startGame, stopGame } from "./store/gameSlice";
import { incrementTimer, stopTimer } from "./store/timerSlice";
import Layout from "./components/Layout/Layout";
import Introduction from "./components/Layout/Introduction";

const App = () => {
  /* global state */
  const { timer } = useSelector((state) => state.timer);
  const { hasStarted, hasEnded } = useSelector((state) => state.game);
  const { duration } = useSelector((state) => state.game);

  // component state
  const [isIntroModalOpen, setIntroModalOpen] = useState(true);
  const [isStatsModalOpen, setStatsModalOpen] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // start a timer for <duration> seconds when the user clicks on start game button

    if (hasStarted) {
      const interval = setInterval(() => {
        if (+timer < +duration && !hasEnded) {
          dispatch(incrementTimer());
        }
      }, 1000);

      if (+timer >= +duration) {
        clearInterval(interval);
        dispatch(stopTimer());
        dispatch(stopGame());
      }

      return () => clearInterval(interval);
    }
  }, [hasStarted, hasEnded, timer]);

  const closeIntroModal = () => {
    setIntroModalOpen(false);
  };

  const closeStatsModal = () => {
    setStatsModalOpen(false);
  };

  return (
    <>
      <Layout>{hasStarted && <Game />}</Layout>

      {/* intro modal */}
      {
        <Introduction
          isOpen={!hasStarted && !hasEnded && isIntroModalOpen}
          onClose={closeIntroModal}
        />
      }

      {/* open the stats modal when the game ends */}
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
