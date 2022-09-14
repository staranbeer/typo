import { Box, HStack, Stack } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import keywords from "../../../../lib/generateKeywords";
import isValidKey from "../../../../lib/isValidKey";
import isInLimit from "../../../../lib/isInlimit";
import isSameKey from "../../../../lib/isSameKey";
import Char from "./Char";

const TestCode = ({ incrementRight, incrementWrong }) => {
  const [pressedKey, setPressedKey] = useState("");

  const [arrayIndex, setArrayIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const [currentKey, setCurrentKey] = useState("");
  const [beforeKeys, setBeforeKeys] = useState([]);
  const [afterKeys, setAfterKeys] = useState([]);

  const [code, setCode] = useState(keywords[arrayIndex]);

  const handleKeyDown = useCallback((e) => {
    // 1. whenever a key is pressed, set the pressedKey to the key that was pressed
    // 2. increment the index if index is less than the length of the code

    if (isValidKey(e.key)) {
      setPressedKey(e.key);
      if (isInLimit(index, code.length)) {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }
  }, []);

  useEffect(() => {
    const windowEventListenerId = window.addEventListener("keydown", (e) => {
      handleKeyDown(e);
    });
    return () => window.removeEventListener("keydown", windowEventListenerId);
  }, []);

  useEffect(() => {
    // 1. whenever the index reaches the length of the code string,
    //    reset the index to 0 and add 1 to the arrayIndex

    // 2. Reset all of the values to their initial state

    if (index === code.length) {
      setIndex(0);
      setArrayIndex((prevArrayIndex) => prevArrayIndex + 1);
      setCode(keywords[arrayIndex]);
      setBeforeKeys([]);
      setAfterKeys([]);
      setPressedKey("");
    }
  }, [index]);

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
      //  if the pressed key is an alphanumeric character

      if (isSameKey(pressedKey, currentKey)) {
        // if the pressed key and the current key are the same
        incrementRight();

        if (index < code.length) {
          // if the index is in bounds of the code string

          setBeforeKeys((prev) => [
            ...prev,
            { key: currentKey, color: "white" },
          ]);
        }
      } else {
        incrementWrong();
        // if the currentKey and pressed key are not the same

        if (index < code.length) {
          // if the index is in bounds of the code string

          setBeforeKeys((prev) => [
            ...prev,
            { key: currentKey, color: "darkgray" },
          ]);
        }
      }
    } else {
      setBeforeKeys((prev) => [...prev, currentKey]);
      // if the pressed key is not an alphanumeric character
    }

    setAfterKeys(code.split("").slice(index + 1));
  }, [index]);

  return (
    <HStack justify="center" h="full" w="full">
      <Box
        fontFamily={"monospace"}
        letterSpacing="4px"
        fontWeight={"bold"}
        color="gray.400"
        fontSize={"2xl"}
      >
        {beforeKeys.map((i, index) => {
          return (
            <Char key={index} color={i.color}>
              {i.key}
            </Char>
          );
        })}
        <span className="cursor key">{currentKey}</span>
        {afterKeys.map((i, index) => {
          return <Char key={index}>{i}</Char>;
        })}
      </Box>
    </HStack>
  );
};

export default React.memo(TestCode);
