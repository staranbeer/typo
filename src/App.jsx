import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Header from "./components/Layout/Header";
import TestCode from "./components/Layout/CodeArea/TestCode";

const App = () => {
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  const incrementRight = () => {
    setRight((prevRight) => prevRight + 1);
  };

  const incrementWrong = () => {
    setWrong((prevWrong) => prevWrong + 1);
  };

  return (
    <Box h="100vh" w="100vw" overflow={"hidden"} p={10}>
      <VStack w="full" h="full" align={"start"} maxW={"5xl"} mx="auto" gap="4">
        <Header right={right} wrong={wrong} />
        <Box flex={1} w="full">
          <TestCode
            incrementRight={incrementRight}
            incrementWrong={incrementWrong}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default App;
