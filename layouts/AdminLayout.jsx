import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Admin/Navbar";
import Sidebar from "../components/Admin/Sidebar";

function AdminLayout({ children }) {
  return (
    <Box>
      
      <Navbar />
      <Sidebar />

      <Box p={4} ml={{ base: 0, md: 60 }}>
        {children}
      </Box>

    </Box>
  );
}

export default AdminLayout;
