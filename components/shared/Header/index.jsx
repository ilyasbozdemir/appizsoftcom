import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { detectBrowserLanguage } from "../../../lib/detectBrowserLanguage";
function Header() {
  const [lang, setLang] = React.useState("");
  const [menus, setMenus] = React.useState([]);

  useEffect(() => {
    // Tarayıcı dilini al
    const browserLanguage = detectBrowserLanguage(["en", "tr"]);

    if (browserLanguage.startsWith("tr")) {
      setLang(`/tr`);
    }
    if (browserLanguage.startsWith("en")) {
      setLang(`/en`);
    }

    setMenus([
      {
        title: "Hizmetlerimiz",
        href: lang + "/hizmetlerimiz",
      },
      {
        title: "Referanslarımız",
        href: lang + "/referanslarimiz",
      },
      {
        title: "Teknolojilerimiz",
        href: lang + "/teknolojilerimiz",
      },
      {
        title: "Hakkımızda",
        href: lang + "/hakkimizda",
      },
      {
        title: "Blog",
        href: lang + "/blog",
      },
      {
        title: "İletişim",
        href: lang + "/iletisim",
      },
    ]);
  }, []);

  const MenuLink = ({ title, href }) => {
    return (
      <Link href={href} passHref>
        <Text
          cursor="pointer"
          className={"text-sm font-medium"}
          fontFamily={"Verdana"}
        >
          {title}
        </Text>
      </Link>
    );
  };

  return (
    <>
      <Box display={{ base: "none", md: "initial" }}>
        <></>
        <Flex
          bg="black"
          color="#fff"
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
        >
          <Box>
            <Link href={`/${lang}?ref=desktop-logo`}>
              <Text fontSize="xl" fontWeight="bold" cursor="pointer">
                <Image src={"/logo.png"} width={200} height={35} />
              </Text>
            </Link>
          </Box>
          <Box>
            <Flex align={"center"} justifyContent="flex-end" gap={2}>
              {menus.map((menu) => (
                <React.Fragment key={menu.title}>
                  <MenuLink title={menu.title} href={menu.href} />
                </React.Fragment>
              ))}
              <Button
                color="#fff"
                bg={"#54bec3"}
                _hover={{ bg: "#6ebec2" }}
                size="md"
                onClick={() => {
                  Router.push(`${lang}/teklif-al`);
                }}
              >
                <Text fontSize={"sm"} fontFamily={"Poppins"}>
                  Teklif Al
                </Text>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box
        display={{ base: "initial", md: "none" }}
        bg="black"
        color="#fff"
        justifyContent="space-between"
        alignItems="center"
        px={1.5}
      >
        mobile
      </Box>
    </>
  );
}

export default Header;
