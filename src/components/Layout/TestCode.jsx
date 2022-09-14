import { Box, HStack, Stack } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import isValidKey from "../../../lib/isValidKey";
import isInLimit from "./../../../lib/isInlimit";

const code = "this is some random text";

const TestCode = () => {
  const [pressedKey, setPressedKey] = useState("");
  const [index, setIndex] = useState(0);
  const [currentKey, setCurrentKey] = useState("");

  const handleKeyDown = useCallback((e) => {
    setPressedKey(e.key);
  }, []);

  useEffect(() => {
    const windowEventListenerId = window.addEventListener("keydown", (e) => {
      handleKeyDown(e);
    });

    return () => window.removeEventListener("keydown", windowEventListenerId);
  }, []);

  useEffect(() => {
    setIndex((prevIndex) => prevIndex + 1);
    setCurrentKey(code[index]);

    if (isValidKey(pressedKey) && isInLimit(index, code.length)) {
      console.log(pressedKey, currentKey);
    }
  }, [pressedKey]);

  return (
    <HStack justify="center" h="full" w="full">
      <Box
        fontFamily={"monospace"}
        letterSpacing="4px"
        fontWeight={"bold"}
        color="gray.400"
        fontSize={"3xl"}
      >
        {code}
      </Box>
    </HStack>
  );
};

export default TestCode;
