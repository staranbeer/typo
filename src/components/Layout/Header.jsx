import {
  Box,
  Button,
  HStack,
  Select,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  HiOutlineMicrophone,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "#131313");

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
      <HStack gap={20}>
        <HStack>
          <Box>Mode:</Box>
          <Select>
            <option>Keywords</option>
          </Select>
        </HStack>

        {/* stats */}

        <HStack spacing={8}>
          <Box color="green.400" fontWeight={"bold"}>
            Right: 4
          </Box>
          <Box color="red.400" fontWeight={"bold"}>
            Wrong: 0
          </Box>
        </HStack>
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
