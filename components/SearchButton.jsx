import { useEffect, useRef, useState } from "react";

import { FiSearch } from "react-icons/fi";

import {
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
} from "@chakra-ui/react";

import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

function SearchButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleIconClick = () => {
    onOpen();
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Burada arama işlemini gerçekleştir veya ilgili işlemleri yapabilirsiniz
    console.log("Arama yapıldı:", searchValue);

    // Örnek arama sonuçları
    const results = ["Sonuç 1", "Sonuç 2", "Sonuç 3", "Sonuç 4", "Sonuç 5"];

    setSearchResults(results);

    setSearchValue("");
  };

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const searchInputRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
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

  return (
    <>
      <Icon
        as={FiSearch}
        onClick={handleIconClick}
        cursor={"pointer"}
        fontSize={"20px"}
      />

      <>
        <main>
          {isMobile && (
            <>
              <MobileSearchContent
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              />
            </>
          )}
          {!isMobile && (
            <>
              <DesktopSearchContent
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
              />
            </>
          )}
        </main>
      </>
      <></>
    </>
  );
}

const MobileSearchContent = ({ isOpen, onOpen, onClose }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
const DesktopSearchContent = ({ isOpen, onOpen, onClose }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size={"md"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody pb={6}></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchButton;
