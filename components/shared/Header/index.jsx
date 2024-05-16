import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Divider,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { MdTimeline } from "react-icons/md";
import Logo from "../Logo";
import { useEffect, useState } from "react";
import React from "react";
import ThemeSwitcher from "../../ThemeSwitcher";
import SearchButton from "../../SearchButton";

import Link from "next/link";
import { motion } from "framer-motion";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useRouter } from "next/router";

const navLinks = [
  { name: "Ürünler", path: "/products" },
  { name: "Hizmetler", path: "/services" },
 // { name: "Teknolojiler", path: "/technologies" },
  { name: "Portfolyo", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "İletişim", path: "/contact" },
];

//

const dropdownLinks = [
  {
    name: "Hakkımızda",
    path: "/about",
    icon: MdTimeline,
  },
  {
    name: "Ekip",
    path: "/team",
    icon: AiTwotoneThunderbolt,
  },
  {
    name: "Kariyer",
    path: "/careers",
    icon: AiTwotoneThunderbolt,
  },
];

function Navbar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const browserLocale = router.locale;

  return (
    <Container maxW="9xl">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        justifyContent={"flex-end"}
        display={{ base: "none", md: "flex" }}
      >
        <LanguageSwitcher />
      </Flex>
      <Divider />
      <HeaderNav />

      {isSticky && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isSticky ? 1 : 0, y: isSticky ? 0 : -20 }}
            transition={{ duration: isSticky ? 0.4 : 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: isSticky ? "fixed" : "relative",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 50,
              backdropFilter: "blur(15px)",
              boxShadow: isSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
            }}
          >
            <HeaderNav />
          </motion.div>
        </>
      )}
    </Container>
  );
}

const HeaderNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const currentPath = router.pathname;
  const browserLocale = router.locale;
  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <>
      <Box
        px={4}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        width="100%"
        py={3}
        backdropFilter="blur(9px)"
        pos={"relative"}
      >
        <Flex
          h={16}
          alignItems="center"
          justify={"center"}
          justifyContent="space-between"
          maxW={1000}
          mx="auto"
        >
          <IconButton
            size="lg"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
            variant={"unstyled"}
          />
          <HStack spacing={8} alignItems="center">
            <Logo
              platform={useBreakpointValue({
                base: "mobile",
                lg: "desktop",
              })}
            />

            <HStack
              as="nav"
              spacing={1}
              display={{ base: "none", md: "flex" }}
              alignItems="center"
            >
              {/* Dropdown Menu */}
              <Menu autoSelect={false} isLazy>
                {({ isOpen, onClose }) => (
                  <>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      size="sm"
                      px={3}
                      py={1}
                      lineHeight="inherit"
                      fontSize="1em"
                      fontWeight="normal"
                      rounded="md"
                      height="auto"
                      _hover={{ color: "blue.400", bg: menuProps.bg }}
                    >
                      <Flex alignItems="center">
                        <Text>Kurumsal</Text>
                        <Icon
                          as={BiChevronDown}
                          h={5}
                          w={5}
                          ml={1}
                          transition="all .25s ease-in-out"
                          transform={isOpen ? "rotate(180deg)" : ""}
                        />
                      </Flex>
                    </MenuButton>
                    <MenuList
                      zIndex={5}
                      bg={useColorModeValue(
                        "rgb(255, 255, 255)",
                        "rgb(26, 32, 44)"
                      )}
                      border="none"
                      boxShadow={useColorModeValue(
                        "2px 4px 6px 2px rgba(160, 174, 192, 0.6)",
                        "2px 4px 6px 2px rgba(9, 17, 28, 0.6)"
                      )}
                    >
                      {dropdownLinks.map((link, index) => (
                        <MenuLink
                          key={index}
                          name={link.name}
                          path={link.path}
                          onClose={onClose}
                        />
                      ))}
                    </MenuList>
                  </>
                )}
              </Menu>

              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}

              <Link href={"/start-project"} locale={browserLocale}>
                <Text
                  id={"start-project"}
                  p={6}
                  textAlign={"center"}
                  lineHeight="inherit"
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    //bg: useColorModeValue("gray.200", "gray.700"),
                    color: useColorModeValue("blue.500", "blue.200"),
                  }}
                >
                  Proje Başlat
                </Text>
              </Link>
            </HStack>
          </HStack>

          <Box display={{ base: "none", md: "initial" }}>
            <SearchButton />
          </Box>

          <ThemeSwitcher />
        </Flex>

        {/* Mobile Screen Links */}
        {isOpen ? (
          <Box pb={4} display={["inherit", "inherit", "none"]} zIndex={1000}>
            <Stack as="nav" spacing={2}>
              <>
                <Text fontWeight="semibold" color="gray.500">
                  Kurumsal
                </Text>
                <Stack pl={2} spacing={1} mt={"0 !important"}>
                  {dropdownLinks.map((link, index) => (
                    <NavLink key={index} {...link} onClose={onClose} />
                  ))}
                </Stack>
                {navLinks.map((link, index) => (
                  <NavLink key={index} {...link} onClose={onClose} />
                ))}

                <Link href={"/start-project"}>
                  <Text
                    id={"start-project"}
                    p={6}
                    textAlign={"center"}
                    lineHeight="inherit"
                    rounded="md"
                    bg={"teal.500"}
                    color="white"
                  >
                    Proje Başlat
                  </Text>
                </Link>
              </>

              <Flex direction={"row"}>
                <HStack>
                  <Text>Select Language : </Text>
                  <LanguageSwitcher />
                </HStack>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

const NavLink = ({ name, path, onClose }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  const link = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <Link href={path}>
      <Text
        px={3}
        py={1}
        lineHeight="inherit"
        _hover={{
          borderBottom: "1px solid #54BEC3",
          rounded: "none",
          // bg: link.bg,
          color: link.color,
        }}
        onClick={() => onClose()}
      >
        {name}
      </Text>
    </Link>
  );
};

const MenuLink = ({ name, path, icon, onClose }) => {
  const router = useRouter();

  return (
    <Link href={path} onClick={() => onClose()} locale={router.locale}>
      <MenuItem
        _hover={{
          color: "blue.400",
          // bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        <HStack>
          <Text>{name}</Text>
        </HStack>
      </MenuItem>
    </Link>
  );
};
export default React.memo(Navbar);
