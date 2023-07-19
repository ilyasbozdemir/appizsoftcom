import React, { useEffect, useState } from "react";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  HStack,
  Divider,
} from "@chakra-ui/react";
import {
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Heading,
} from "@chakra-ui/icons";
import Logo from "../Logo";
import { detectBrowserLanguage } from "../../../lib/detectBrowserLanguage";
import { BiMenuAltRight } from "react-icons/bi";
import ThemeSwitcher from "../../ThemeSwitcher";
import SearchButton from "../../SearchButton";
import LanguageSwitcher from "../../LanguageSwitcher";
import Link from "next/link";
import OfferButton from "../../OfferButton";

import { motion } from "framer-motion";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const [lang, setLang] = React.useState("");
  useEffect(() => {
    const browserLanguage = detectBrowserLanguage(["en", "tr"]);
    if (browserLanguage.startsWith("tr")) setLang(`/tr`);
    if (browserLanguage.startsWith("en")) setLang(`/en`);
  }, []);

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 110);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        justifyContent={"flex-end"}
        display={{ base: "none", md: "flex" }}
      >
        <LanguageSwitcher lang={lang} />
      </Flex>
      <Divider />
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        {
          // asagıda ki yapu mobilde hambuerger menu içindir
        }

        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} fontSize={20} />
              ) : (
                <BiMenuAltRight w={5} h={5} fontSize={35} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        {
          //
        }

        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "center" }}
          gap={3}
        >
          <Logo
            platform={useBreakpointValue({ base: "mobile", lg: "desktop" })}
            lang={lang}
          />

          {
            // asagıda ki yapu desktopta  menu içindir
          }

          <Flex display={{ base: "none", md: "flex" }} ml={10} gap={3}>
            <HStack spacing={5}>
              <DesktopNav />

              <SearchButton />
              <ThemeSwitcher />
              <OfferButton />
            </HStack>
          </Flex>
        </Flex>

        <HStack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          spacing={6}
          display={useBreakpointValue({ base: "initial", md: "none" })}
        >
          <Stack direction={"row"}>
            <Box>
              <ThemeSwitcher />
            </Box>
            <Box>
              <SearchButton />
            </Box>
          </Stack>
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      <Flex display={{ base: "none", md: "flex" }}>
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
            zIndex: 999,
            background: "#ffffff",
            boxShadow: isSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "center" }}
            gap={3}
          >
            <HStack>
              <Logo
                platform={useBreakpointValue({ base: "mobile", lg: "desktop" })}
                lang={lang}
              />
            </HStack>

            {
              // asagıda ki yapu desktopta  menu içindir
            }

            <Flex
              display={{ base: "none", md: "flex" }}
              ml={10}
              gap={3}
              p={isSticky ? 4 : 0}
            >
              <HStack spacing={5}>
                <DesktopNav />

                <SearchButton />
                <ThemeSwitcher />
                <OfferButton />
              </HStack>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>

      <Flex display={{ base: "flex", md: "none" }}>
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
            zIndex: 999,
            background: "#ffffff",
            boxShadow: isSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"60px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            align={"center"}
          >
            {
              // asagıda ki yapu mobilde hambuerger menu içindir
            }

            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} fontSize={20} />
                  ) : (
                    <BiMenuAltRight w={5} h={5} fontSize={35} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>

            {
              //
            }

            <Flex
              flex={{ base: 1 }}
              justify={{ base: "center", md: "center" }}
              gap={3}
            >
              <Logo
                platform={useBreakpointValue({ base: "mobile", lg: "desktop" })}
                lang={lang}
              />

              {
                // asagıda ki yapu desktopta  menu içindir
              }

              <Flex display={{ base: "none", md: "flex" }} ml={10} gap={3}>
                <HStack spacing={5}>
                  <DesktopNav />

                  <SearchButton />
                  <ThemeSwitcher />
                  <OfferButton />
                </HStack>
              </Flex>
            </Flex>

            <HStack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              spacing={6}
              display={useBreakpointValue({ base: "initial", md: "none" })}
            >
              <Stack direction={"row"}>
                <Box>
                  <ThemeSwitcher />
                </Box>
                <Box>
                  <SearchButton />
                </Box>
              </Stack>
            </HStack>
          </Flex>
        </motion.div>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={5}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            {navItem.type === "menu" ? (
              <PopoverTrigger>
                <Text
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                  cursor={"pointer"}
                >
                  {navItem.label}
                </Text>
              </PopoverTrigger>
            ) : navItem.type === "link" ? (
              <PopoverTrigger>
                <Link href={"/tr/" + navItem.href} passHref>
                  <Text
                    p={2}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Text>
                </Link>
              </PopoverTrigger>
            ) : (
              <></>
            )}

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link href={href} passHref>
      <Text
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("teal.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "teal.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"teal.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Text>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, type }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      {type === "menu" ? (
        <>
          <Flex
            py={2}
            justify={"space-between"}
            align={"center"}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Text
              fontWeight={600}
              color={useColorModeValue("gray.600", "gray.200")}
              cursor={"pointer"}
            >
              {label}
            </Text>
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
              />
            )}
          </Flex>
        </>
      ) : type === "link" ? (
        <>
          <Link href={"/tr/" + href} passHref>
            <Flex
              py={2}
              justify={"space-between"}
              align={"center"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Text
                fontWeight={600}
                color={useColorModeValue("gray.600", "gray.200")}
              >
                {label}
              </Text>
              {children && (
                <Icon
                  as={ChevronDownIcon}
                  transition={"all .25s ease-in-out"}
                  transform={isOpen ? "rotate(180deg)" : ""}
                  w={6}
                  h={6}
                />
              )}
            </Flex>
          </Link>
        </>
      ) : (
        <></>
      )}

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href} passHref>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Ürünler",
    href: "/products",
    type: "link",
  },
  {
    label: "Kurumsal",
    href: null,
    type: "menu",
    children: [
      {
        label: "Hakkımızda",
        subLabel: "",
        href: "/about-appizsoft",
      },
      {
        label: "Kariyer",
        subLabel: "",
        href: "/careers",
      },
    ],
  },
  {
    label: "Hizmetler",
    href: "/services",
    type: "link",
  },
  {
    label: "Blog",
    href: "/blog",
    type: "link",
  },
  {
    label: "Bize Ulaşın",
    href: "/contact",
    type: "link",
  },
  {
    label: "Teklif İste",
    href: "/get-a-quote",
    type: "button",
  },
];
