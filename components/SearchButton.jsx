import { useEffect, useRef, useState } from "react";
import {
  Divider,
  HStack,
  InputLeftElement,
  Kbd,
  ModalFooter,
  Spacer,
  Stack,
  Flex,
  Button,
  Box,
  Input,
  Icon,
  Text,
  InputGroup,
  InputRightElement,
  useDisclosure,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { AiOutlineEnter } from "react-icons/ai";

function SearchButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleIconClick = () => {
    onOpen();
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [blockScrollOnMount, setBlockScrollOnMount] = useState(true);

  const modalOverlay = {
    bg: "none",
    backdropFilter: "auto",
    backdropBlur: "8px",
  };

  return (
    <>
      <Icon
        as={FiSearch}
        onClick={handleIconClick}
        cursor={"pointer"}
        fontSize={"20px"}
      />

      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
          blockScrollOnMount={blockScrollOnMount}
          size={isMobile === true ? "full" : "750px"}
        >
          {isMobile && (
            <>
              <ModalOverlay />
            </>
          )}
          {!isMobile && (
            <>
              <ModalOverlay {...modalOverlay} />
            </>
          )}
          <ModalContent
            width={isMobile === true ? "full" : "750px"}
            height={isMobile === true ? "full" : "85%"}
          >
            <ModalBody overflowY="auto">
              <SearchContent
                isMobile={isMobile}
                onClose={onClose}
                isOpen={isOpen}
              />
            </ModalBody>
            {!isMobile && (
              <ModalFooter display={"none"}>
                <Flex direction={"row"} justifyContent={"space-between"}>
                  <Kbd>Enter</Kbd> <Text color={"#969faf"}>Seç</Text>
                  <Spacer />
                  <Kbd>↑</Kbd> <Text color={"#969faf"}>yukarı veya</Text>
                  <Kbd>↓</Kbd>
                  <Text color={"#969faf"}>aşağı tuşuna basın</Text>
                  <Spacer />
                  <Kbd>Esc</Kbd> <Text color={"#969faf"}>Kapat</Text>
                </Flex>
              </ModalFooter>
            )}
          </ModalContent>
        </Modal>
      </>
      <></>
    </>
  );
}

const SearchContent = ({ isMobile, onClose, isOpen }) => {
  const searchInputRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
    }
  }, [isOpen]);

  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/search`, {
        params: {
          query: searchQuery,
        },
      });

      const searchData = response.data;

      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchQuery]);

  return (
    <>
      <Stack spacing={4} direction={"row"}>
        <form
          style={{
            width: "100%",
          }}
          onSubmit={handleSearch}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} cursor={"pointer"} fontSize={"20px"} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Blog Ara"
              ref={searchInputRef}
              borderColor={"primary"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.length > 0 && (
              <>
                <InputRightElement>
                  <Icon
                    as={AiOutlineClose}
                    cursor={"pointer"}
                    onClick={() => {
                      setSearchQuery("");
                    }}
                    _hover={{ color: "red.500" }}
                  />
                </InputRightElement>
              </>
            )}
          </InputGroup>
        </form>

        {isMobile && (
          <>
            <HStack>
              <Text onClick={onClose} cursor={"pointer"} color={"primary.100"}>
                <>Kapat</>
              </Text>
            </HStack>
          </>
        )}
      </Stack>
      <Box mt={4} ml={4} overflow="auto">
        {searchResults.length > 0 && (
          <>
            <Text fontWeight={"semibold"} my={3}>
              Bloglar
            </Text>
          </>
        )}
        <List spacing={5}>
          {searchResults.map((result) => (
            <ListItem
              key={result.id}
              py={2}
              bg={"gray.100"}
              borderRadius={"md"}
              p={3}
              _hover={{ bg: "primary.100", color: "white" }}
              cursor={"pointer"}
            >
              <Flex
                direction={"row"}
                justifyContent={isMobile === false ? "space-between" : ""}
              >
                <Icon as={FaBlog} />
                <Text ml={10}>{result.title}</Text>

                {!isMobile && (
                  <>
                    <Icon as={AiOutlineEnter} />
                  </>
                )}
              </Flex>
            </ListItem>
          ))}
          {errorMessage}
        </List>
      </Box>
    </>
  );
};

export default SearchButton;
