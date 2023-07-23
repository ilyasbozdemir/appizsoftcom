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
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiTwotoneThunderbolt } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { MdTimeline } from "react-icons/md";
import Logo from "../Logo";
import { useEffect, useState } from "react";
import React from "react";
import { detectBrowserLanguage } from "../../../lib/detectBrowserLanguage";
import ThemeSwitcher from "../../ThemeSwitcher";
import OfferButton from "../../OfferButton";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Ürünler", path: "/products" },
  { name: "Blog", path: "/blog" },
  { name: "Hizmetler", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Bize Ulaşın", path: "/contact" },
];

const dropdownLinks = [
  {
    name: "Hakkımızda",
    path: "/about-appizsoft",
    icon: MdTimeline,
  },
  {
    name: "Kariyer",
    path: "/careers",
    icon: AiTwotoneThunderbolt,
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [lang, setLang] = React.useState("");
  useEffect(() => {
    const browserLanguage = detectBrowserLanguage(["en", "tr"]);
    if (browserLanguage.startsWith("tr")) setLang(`/tr`);
    if (browserLanguage.startsWith("en")) setLang(`/en`);
  }, []);

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 65);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        top={0}
        left={0}
        pos={"fixed"}
        zIndex={50}
        backdropFilter="blur(9px)"
      >
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          maxW={1000}
          mx="auto"
        >
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
            variant={'unstyled'}
          />
          <HStack spacing={8} alignItems="center">
            <Logo
              platform={useBreakpointValue({
                base: "mobile",
                lg: "desktop",
              })}
              lang={lang}
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

              <OfferButton />
            </HStack>
          </HStack>

          <ThemeSwitcher />
        </Flex>

        {/* Mobile Screen Links */}
        {isOpen ? (
          <Box pb={4} display={["inherit", "inherit", "none"]}>
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
                  <NavLink
                    key={index}
                    {...link}
                    onClose={onClose}
                    lang={lang}
                  />
                ))}
              </>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

const NavLink = ({ lang = `/tr/`, name, path, onClose }) => {
  const link = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  return (
    <Link href={lang + path}>
      <Text
        px={3}
        py={1}
        lineHeight="inherit"
        rounded="md"
        _hover={{
          textDecoration: "none",
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

const MenuLink = ({lang = `/tr/`, name, path, icon, onClose }) => {
  return (
    <Link href={lang + path} onClick={() => onClose()}>
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
