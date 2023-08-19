import React, { useState } from 'react';
import { Box, Button, useDisclosure, Slide } from '@chakra-ui/react';
import ContactForm from './ContactForm'; // İletişim formunun yer alacağı bileşeni buraya ekleyin

const AnimatedContactForm = ({ onClose }) => {
  const { isOpen, onOpen, onClose: closeForm } = useDisclosure();

  return (
    <Box
      position="fixed"
      bottom={0}
      right={0}
      zIndex={999}
      p={4}
      bg="white"
      borderTopLeftRadius="md"
      boxShadow="lg"
      width="100%"
    >
      <Slide in={isOpen} direction="bottom">
        <Box>
          <ContactForm onClose={closeForm} />
        </Box>
      </Slide>
      <Button onClick={onOpen} colorScheme="green">
        İletişime Geç
      </Button>
    </Box>
  );
};

export default AnimatedContactForm;
