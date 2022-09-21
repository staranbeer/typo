import React, { useState, useEffect, useCallback } from "react";
import { Box, HStack } from "@chakra-ui/react";
import isValidKey from "../../../../lib/isValidKey";
import isInLimit from "../../../../lib/isInlimit";
import isSameKey from "../../../../lib/isSameKey";
import { useDispatch, useSelector } from "react-redux";
import { incrementCorrect, incrementWrong } from "../../../store/statsSlice";
import Characters from "./Characters";
import { changeGameMode } from "../../../store/codeSlice";
import generateKeywords from "../../../../lib/generateKeywords";

const Game = () => {
  const dispatch = useDispatch();

  /* global state */
  const { hasStarted, hasEnded, restarted } = useSelector(
    (state) => state.game
  );
  const { keywords } = useSelector((state) => state.code);

  /* component state */
  const [pressedKey, setPressedKey] = useState("");

  const [index, setIndex] = useState(0);
  const [arrayIndex, setArrayIndex] = useState(0);

  const [currentKey, setCurrentKey] = useState("");
  const [beforeKeys, setBeforeKeys] = useState([]);
  const [afterKeys, setAfterKeys] = useState([]);

  const [code, setCode] = useState(keywords[arrayIndex]);

  /* Add an event listener to the window */
  useEffect(() => {
    // add a keydown event listener when
    // the game starts

    if (hasStarted && !hasEnded) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // remove the listener when game ends

    if (hasEnded) {
      window.removeEventListener("keydown", handleKeyDown);
    }

    // remove the listener when the fame restarts

    if (restarted) {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasStarted, hasEnded, restarted]);

  /* check which key was pressed */
  const handleKeyDown = useCallback((e) => {
    // 1. whenever a key is pressed, set the pressedKey to the key that was pressed
    // 2. increment the index if index is less than the length of the word

    if (isValidKey(e.key)) {
      setPressedKey(e.key);
      if (isInLimit(index, code.length)) {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }
  }, []);

  /* if <pressedKey> is equal to the <currentKey>, increment <correct> else increment <wrong> */
  useEffect(() => {
    // 1. whenever a valid key is pressed, set the currentKey to the next
    //    character in the code string.

    // 2. when the index reaches the length of the code string, reset the currentKey to an empty string

    if (index < code.length) {
      setCurrentKey(code[index]);
    } else {
      setCurrentKey("");
    }

    if (isValidKey(pressedKey)) {
      //  if the pressed key is an alphabetical character

      if (isSameKey(pressedKey, currentKey)) {
        // if the pressed key and the current key are the same
        dispatch(incrementCorrect());

        if (index < code.length) {
          // if the index is in bounds of the code string

          setBeforeKeys((prev) => [
            ...prev,
            { key: currentKey, isCorrect: true },
          ]);
        }
      } else {
        dispatch(incrementWrong());
        // if the currentKey and pressed key are not the same

        if (index < code.length) {
          // if the index is in bounds of the code string

          setBeforeKeys((prev) => [
            ...prev,
            { key: currentKey, isCorrect: false },
          ]);
        }
      }
    } else {
      setBeforeKeys((prev) => [...prev, currentKey]);
      // if the pressed key is not an alphanumeric character
    }

    setAfterKeys(
      code
        .split("")
        .slice(index + 1)
        .map((i) => ({ key: i, isCorrect: false }))
    );
  }, [index]);

  /* when the current word finishes, go to the next word */
  useEffect(() => {
    if (index === code.length) {
      setIndex(0);
      setArrayIndex((prevArrayIndex) => prevArrayIndex + 1);
      setCode(keywords[arrayIndex]);
      setBeforeKeys([]);
      setAfterKeys([]);
      setPressedKey("");
    }
  }, [index]);

  /* reset the game when the game finishes */
  useEffect(() => {
    if (hasEnded) {
      setIndex(0);
      setArrayIndex(0);
      setCode(keywords[arrayIndex]);
      setBeforeKeys([]);
      setAfterKeys([]);
      setPressedKey("");
      setCurrentKey(code[0]);
    }
  }, [hasEnded, restarted]);

  return (
    <HStack justify="center" h="full" w="full">
      <Box
        fontFamily={"monospace"}
        letterSpacing="4px"
        fontWeight={"bold"}
        color="gray.400"
        fontSize={"2xl"}
      >
        <Characters characters={beforeKeys} />
        <span className="cursor key">{currentKey}</span>
        <Characters characters={afterKeys} />
      </Box>
    </HStack>
  );
};

export default React.memo(Game);
