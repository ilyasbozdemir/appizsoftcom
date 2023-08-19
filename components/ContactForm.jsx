import React, { useState } from "react";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Burada form verilerini işlemek için gerekli kodu ekleyebilirsiniz

    // Örnek olarak form verilerini konsola yazdırma:
    console.log("Ad:", name);
    console.log("E-posta:", email);
    console.log("Mesaj:", message);

    onClose(); // Formu kapat
  };

  return (
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
  );
};

export default ContactForm;
