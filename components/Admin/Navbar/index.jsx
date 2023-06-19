import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Sidebar from "../Sidebar";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Flex align="center" justify="space-between" px={4} py={2} >
 Navbar
    </Flex>
  );
};

export default Navbar;
