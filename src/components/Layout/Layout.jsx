import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box h="100vh" w="100vw" overflow={"hidden"} p={10}>
      <VStack w="full" h="full" align={"start"} maxW={"5xl"} mx="auto" gap="4">
        <Header />
        <Box flex={1} w="full">
          {children}
        </Box>
      </VStack>
    </Box>
  );
};

export default Layout;
