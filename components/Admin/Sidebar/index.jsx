// components/Sidebar.js
import { Box, Text, VStack, Divider } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box bg="gray.100" w="250px" h="100vh" p="4" boxShadow="md">
      <VStack spacing="4" align="stretch">
        <Divider />
        <Text>Öğe 1</Text>
        <Text>Öğe 2</Text>
        <Text>Öğe 3</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;
