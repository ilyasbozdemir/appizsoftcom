import React, { useState } from "react";
import {
  Box,
  Button,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import ContactForm from "./ContactForm"; // İletişim formunun yer alacağı bileşeni buraya ekleyin

const FloatingContactButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {!isMobile && (
        <>
          <Box
            position="fixed"
            top={"50%"}
            right={2}
            zIndex={1000}
            display="flex"
            justifyContent="flex-end"
            
          >
            <Button
              onClick={onOpen}
              size={"lg"}
              color="white"
              bg="primary.100"
              _hover={{ bg: "primaryD.100" }}
              transform={"rotate(270deg)"}
              transformOrigin="right bottom"
            >
              İletişime Geç
            </Button>
            {isOpen && <ContactForm onClose={onClose} />}{" "}
            {/* İletişim formunun içeriğini burada yerleştirin */}
          </Box>
        </>
      )}
      {isMobile && (
        <>
          <Box
            position="fixed"
            bottom={2}
            right={"40%"}
            zIndex={1000}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              onClick={onOpen}
              size={"lg"}
              color="white"
              bg="primary.100"
              _hover={{ bg: "primaryD.100" }}
            >
              İletişime Geç
            </Button>
            {isOpen && <ContactForm onClose={onClose} />}{" "}
            {/* İletişim formunun içeriğini burada yerleştirin */}
          </Box>
        </>
      )}
    </>
  );
};

export default FloatingContactButton;
