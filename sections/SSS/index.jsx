import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
function SSS({ sss }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [nameSurname, setNameSurname] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const toast = useToast();

  return (
    <Box my={10}>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading
            as="h2"
            fontSize={{ base: 20, md: 22, lg: 24, xl: 26 }}
            pos="relative"
          >
            Sıkça Sorulan Sorular
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={30}
            color={useColorModeValue("gray.500", "gray.200")}
          >
            Soru ve cevap
          </Text>
          <Text
            textAlign={"center"}
            fontSize={20}
            color={useColorModeValue("gray.500", "gray.200")}
            cursor={"pointer"}
            onClick={onOpen}
            _hover={{
              textDecoration: "underline",
            }}
            id="ask-question"
          >
            Soru sor
          </Text>
        </Flex>
      </Center>

      <Flex align={"center"} justify={"center"} my={18}>
        <Container maxW={"7xl"}>
          <Accordion
            width="100%"
            maxW="full"
            rounded="lg"
            allowToggle
            fontSize={25}
          >
            {sss.map((s, index) => (
              <AccordionItem key={index} fontSize="18px">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {s.Question}
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}> {s.Answer}</AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Flex>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bağlantıda Kalalım</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="small">
              Appizsoft ile ilgili tüm sorularınız için bizlere ulaşabilirsiniz.
              Bu sayfadaki soru cevap kısmını incelemenizi de öneririz.
            </Text>
            <FormControl my={5}>
              <InputGroup>
                <Input
                  type={"text"}
                  value={nameSurname}
                  onChange={(e) => {
                    setNameSurname(e.target.value);
                  }}
                  ref={initialRef}
                  placeholder="İsim Soyisim"
                />
              </InputGroup>
            </FormControl>
            <FormControl my={5}>
              <InputGroup>
                <Input
                  type={"text"}
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  placeholder="Email Adresiniz"
                />
              </InputGroup>
            </FormControl>
            <FormControl my={5}>
              <InputGroup>
                <Input
                  type={"text"}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Mesajınız"
                />
              </InputGroup>
            </FormControl>
            <Flex justify={"center"}>
              <Button
                bg={"primary.100"}
                _hover={{ bg: "primary.200" }}
                color={"white"}
                w={"full"}
                onClick={() =>
                  toast({
                    title: "Meajınız Başarıyla Alındı!",
                    description: "En kısa sürede dönüş yapacağız",
                    status: "success",
                    position: "top",
                    duration: 2500,
                    isClosable: true,
                  })
                }
              >
                Gönder
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SSS;
