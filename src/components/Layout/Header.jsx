import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const Header = () => {
  /* global state */
  const { timer } = useSelector((state) => state.timer);
  const { correct, wrong } = useSelector((state) => state.stats);

  /* component state */
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "#131313");

  return (
    <HStack
      borderRadius={"lg"}
      bgColor={bgColor}
      justify={"space-between"}
      p={5}
      w="full"
      px={8}
    >
      {/* stats */}
      <HStack spacing={8}>
        <Button color="gray.300" fontWeight={"bold"}>
          Time elapsed: {timer}
        </Button>
        <Button color="green.400" fontWeight={"bold"}>
          Right: {correct}
        </Button>
        <Button color="red.400" fontWeight={"bold"}>
          Wrong: {wrong}
        </Button>
      </HStack>

      {/* theme */}
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
