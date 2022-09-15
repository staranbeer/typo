import {
  Box,
  Button,
  HStack,
  Select,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const Header = ({ right, wrong, timer, duration, setDuration }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "#131313");

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };
  return (
    <HStack
      borderRadius={"lg"}
      bgColor={bgColor}
      justify={"space-between"}
      p={5}
      w="full"
      px={8}
    >
      {/* mode */}

      {/* stats */}
      <HStack spacing={8}>
        <Button color="gray.300" fontWeight={"bold"}>
          Time elapsed: {timer}
        </Button>
        <Button color="green.400" fontWeight={"bold"}>
          Right: {right}
        </Button>
        <Button color="red.400" fontWeight={"bold"}>
          Wrong: {wrong}
        </Button>
      </HStack>

      {/* color mode */}
      <Button
        h={10}
        w={10}
        p="10px"
        borderRadius={"full"}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? (
          <HiOutlineMoon size={24} />
        ) : (
          <HiOutlineSun size={24} />
        )}
      </Button>
    </HStack>
  );
};

export default Header;
