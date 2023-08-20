import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Textarea,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

const ContactForm = ({ onClose }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose(); // Formu kapat
  };

  return (
    <>
      {isMobile && (
        <Box
          position="fixed"
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={999}
          p={2}
          bg="white"
          w="full"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box w={350} p={6} borderTopLeftRadius="md" boxShadow="lg">
            <Flex
              as="span"
              onClick={onClose}
              justifyContent={"flex-end"}
              my={2}
              cursor={"pointer"}
              _hover={{ color: "primary.200" }}
              color={useColorModeValue("black", "black")}
            >
              Kapat
            </Flex>
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
              <Input
                placeholder="Telefon"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                mb={2}
              />
              <Textarea
                placeholder="Mesajınız"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                mb={2}
              />

              <Button colorScheme="blue" type="submit" mr={3} w={"100%"}>
                Gönder
              </Button>
            </form>
          </Box>
        </Box>
      )}
      {!isMobile && (
        <Box
          position="fixed"
          w={350}
          top={"40%"}
          right={0}
          zIndex={999}
          p={6}
          bg={useColorModeValue("gray.700", "gray.500")}
          borderTopLeftRadius="md"
          boxShadow="lg"
          maxW={350}
        >
          <Flex
            as="span"
            onClick={onClose}
            justifyContent={"flex-end"}
            my={2}
            cursor={"pointer"}
            _hover={{ color: "primary.200" }}
            color={useColorModeValue("white", "white")}
          >
            Kapat
          </Flex>
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
            <Input
              placeholder="Telefon"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              mb={2}
            />
            <Textarea
              placeholder="Mesajınız"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              mb={2}
            />

            <Button colorScheme="blue" type="submit" mr={3} w={"100%"}>
              Gönder
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default ContactForm;
