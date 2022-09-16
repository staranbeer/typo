import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stats from "./components/Layout/Stats";
import Game from "./components/Layout/Game/Game";

/*  actions */
import { startGame, stopGame } from "./store/gameSlice";
import { incrementTimer, stopTimer } from "./store/timerSlice";
import Layout from "./components/Layout/Layout";

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
      <Layout>
        <Game />
      </Layout>

      {/* intro modal */}
      {/* {
        <Introduction
          isOpen={!hasStarted && !hasEnded && isIntroModalOpen}
          onClose={closeIntroModal}
        />
      } */}

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
