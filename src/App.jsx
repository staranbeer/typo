import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Layout/Header";
import TestCode from "./components/Layout/TestCode";

const App = () => {
  return (
    <Box h="100vh" w="100vw" overflow={"hidden"} p={10}>
      <VStack w="full" h="full" align={"start"} maxW={"5xl"} mx="auto" gap="4">
        <Header />
        <Box flex={1} w="full">
          <TestCode />
        </Box>
      </VStack>
    </Box>
  );
};

export default App;
