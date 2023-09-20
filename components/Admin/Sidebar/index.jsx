// components/Sidebar.js
import {
  Box,
  Text,
  VStack,
  Divider,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import Logo from ".././../shared/Logo";

const Sidebar = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.700")}
      w="350px"
      h="100vh"
      p="4"
      boxShadow="md"

    >
   
    </Box>
  );
};

export default Sidebar;
