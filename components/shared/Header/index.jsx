import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../../hooks/useLanguage";
function Header() {
  const { lang } = useLanguage();

  const [menus, setMenus] = React.useState([
    {
      title: "Yazılım Hizmetlerimiz",
      href: "#hizmetlerimiz",
    },
    {
      title: "Referanslarımız",
      href: "#referanslarimiz",
    },
    {
      title: "Teknolojilerimiz",
      href: "#teknolojilerimiz",
    },
    {
      title: "Hakkımızda",
      href: "#hakkimizda",
    },
    {
      title: "Blog",
      href: "#blog",
    },
    {
      title: "İletişim",
      href: "#iletisim",
    },
  ]);

  const MenuLink = ({ title, href }) => {
    return (
      <Link href={href} passHref>
        <Text as="a" cursor="pointer" className={"text-sm font-medium"}>
          {title}
        </Text>
      </Link>
    );
  };

  return (
    <>
      <Box display={{ base: "none", md: "initial" }} p="4">
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
              <Button colorScheme="blue" size="md">
                <Text fontSize={"sm"}>Teklif Al</Text>
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
      ></Box>
    </>
  );
}

export default Header;
