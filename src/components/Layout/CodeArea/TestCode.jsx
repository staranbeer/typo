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
    if (isValidKey(e.key)) {
      setPressedKey(e.key);
    }
  }, []);

  useEffect(() => {
    const windowEventListenerId = window.addEventListener("keydown", (e) => {
      handleKeyDown(e);
      if (isInLimit(index, code.length)) {
        setIndex((prevIndex) => prevIndex + 1);
      }
    });
    return () => window.removeEventListener("keydown", windowEventListenerId);
  }, []);

  useEffect(() => {
    if (index === code.length) {
      setIndex(0);
      setArrayIndex((prevArrayIndex) => prevArrayIndex + 1);
      setCode(keywords[arrayIndex]);
      setBeforeKeys([]);
      setAfterKeys([]);
      setCurrentKey("");
    }
  }, [index]);

  useEffect(() => {
    console.log(index);
    setCurrentKey(code[index]);

    if (isValidKey(pressedKey)) {
      //  if the pressed key is an alphanumeric character
      if (isSameKey(pressedKey, currentKey)) {
        // if the pressed key and the current key is same
        // change its color to white, if not, change its
        //  color to dark gray

        setBeforeKeys((prev) => [...prev, { key: currentKey, color: "white" }]);
        incrementRight();
      } else {
        setBeforeKeys((prev) => [
          ...prev,
          { key: currentKey, color: "darkgray" },
        ]);
        incrementWrong();
      }
    } else {
      setBeforeKeys((prev) => [...prev, currentKey]);
    }

    setAfterKeys(code.split("").slice(index + 1));

    console.log(pressedKey, currentKey);
  }, [index, pressedKey]);

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
