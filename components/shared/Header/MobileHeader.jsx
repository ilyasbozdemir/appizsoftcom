import React, { useEffect, useState } from "react";
import { HamburgerIcon, CloseIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import LanguageSwitcher from "../../LanguageSwitcher";

const Header = ({ lang, menuItems }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Flex
        as="nav"
        bg="black"
        color="#fff"
        p={5}
        justify="space-between"
        align="center"
        zIndex={500}
        pos={"relative"}
        w={"100%"}
        position="sticky"
        boxShadow={isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.6)" : "none"}
        transition="box-shadow 0.3s"
        top={0}
        right={0}
      >
        <Box
          onClick={() => {
            router.push(`/${lang}?ref=mobile-logo`);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          <Image src={"/logo.svg"} width={150} height={30} />
        </Box>

        <IconButton
          icon={
            isOpen ? (
              <Icon as={CloseIcon} fontSize={20} />
            ) : (
              <Icon as={HamburgerIcon} fontSize={35} />
            )
          }
          onClick={onToggle}
          size="md"
          aria-label="Toggle Navigation"
          bg="transparent"
          color="white"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        />
      </Flex>

      <></>

      {isOpen && (
        <Box
          as="section"
          zIndex={499}
          pos={"absolute"}
          top={"80px"}
          left={0}
          bg={"#fff"}
          w={"full"}
          h={"full"}
        >
          <Flex pos={"relative"} direction={"column"}>
            {menuItems.map((menu) => (
              <React.Fragment key={menu.title}>
                <MenuLink title={menu.title} href={menu.href} lang={lang} />
              </React.Fragment>
            ))}

            <Center>
              <Button
                color="#fff"
                bg={"primary"}
                _hover={{ bg: "#6ebec2" }}
                size="md"
                onClick={() => {
                  router.push(`${lang}/teklif-al`);
                }}
                fontSize={"2xl"}
                fontFamily={"Poppins"}
                w="90%"
                px={4}
                h={75}
              >
                Teklif Al
              </Button>
            </Center>

            <Box pos={"relative"}>
              <LanguageSwitcher lang={lang} />
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

const MenuLink = ({ title, href, lang }) => {
  return (
    <Link href={`/${lang}/${href}`} passHref>
      <Text
        cursor="pointer"
        className={"flex align-center justify-between p-2"}
        fontFamily={"Montserrat"}
        p={5}
        _hover={{ color: "gray.600" }}
      >
        {title}
      </Text>
      <Divider color={"#000"} />
    </Link>
  );
};

export default Header;
