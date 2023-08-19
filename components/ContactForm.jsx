import React, { useState } from "react";
import { Box, Button, Input, Textarea, useMediaQuery } from "@chakra-ui/react";

const ContactForm = ({ onClose }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose(); // Formu kapat
  };

  return (
    <>
      {isMobile && (
        <>
          <Box
            position="fixed"
            top={0}
            right={0}
            bottom={0}
            left={0}
            zIndex={999}
            p={4}
            bg="white"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <form
              onSubmit={handleSubmit}
              style={{ width: "100%", maxWidth: 350 }}
            >
              <Input
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
                mb={2}
              />
              <Input
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb={2}
              />
              <Textarea
                placeholder="Mesajınız"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                mb={2}
              />
              <Button colorScheme="blue" type="submit" mr={3}>
                Gönder
              </Button>
              <Button onClick={onClose}>Kapat</Button>
            </form>
          </Box>
        </>
      )}
      {!isMobile && (
        <>
          <Box
            position="fixed"
            top={"40%"}
            right={0}
            zIndex={999}
            p={4}
            bg="white"
            borderTopLeftRadius="md"
            boxShadow="lg"
            maxW={350}
          >
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
                mb={2}
              />
              <Input
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                mb={2}
              />
              <Textarea
                placeholder="Mesajınız"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                mb={2}
              />
              <Button colorScheme="blue" type="submit" mr={3}>
                Gönder
              </Button>
              <Button onClick={onClose}>Kapat</Button>
            </form>
          </Box>
        </>
      )}
    </>
  );
};

export default ContactForm;
