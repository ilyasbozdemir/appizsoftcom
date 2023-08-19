import React, { useState } from "react";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import ContactForm from "./ContactForm"; // İletişim formunun yer alacağı bileşeni buraya ekleyin

const FloatingContactButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="fixed"
      top={"40%"}
      right={2}
      zIndex={1000}
      display="flex"
      justifyContent="flex-end"
    >
      <Button
        onClick={onOpen}
        size={'lg'}
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
  );
};

export default FloatingContactButton;
