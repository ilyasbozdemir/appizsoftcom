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
            top={"calc(50% - 100px)"}
            right="2px"
            transform="translateY(-50%)"
            zIndex={1000}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              onClick={onOpen}
              w={200}
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
            bottom={5}
            right={"calc(50% - 75px)"}
            zIndex={1000}
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              onClick={onOpen}
              w={150}
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
