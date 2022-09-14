import { Box, HStack, Stack } from "@chakra-ui/react";
import React from "react";

const TestCode = () => {
  return (
    <HStack justify="center" h="full" w="full">
      <Box
        fontFamily={"monospace"}
        letterSpacing="4px"
        fontWeight={"bold"}
        color="gray.400"
        fontSize={"3xl"}
      >
        let
      </Box>
    </HStack>
  );
};

export default TestCode;
