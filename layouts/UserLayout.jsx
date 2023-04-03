import React from "react";

import Footer from "../components/shared/Footer";
import ScrollToTop from "../components/shared/ScrollToTop";
import Sidebar from "../components/shared/Sidebar";
import Header from "../components/shared/Header";

import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure
} from "@chakra-ui/react";


function UserLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box minH="100vh" zIndex="100">
        <Drawer
          autoFocus={true}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="xs"
        >
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>

        <>
          <Header onOpen={onOpen} />
          <Box p={2}>
            {children}
          </Box>
          <ScrollToTop />
          <Footer />
        </>
      </Box>
    </>
  );
}

export default UserLayout;
