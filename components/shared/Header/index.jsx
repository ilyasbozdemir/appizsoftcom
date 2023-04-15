import React, { useEffect, useState } from "react";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import Image from "next/image";
import Router, { useRouter } from "next/router";
import { detectBrowserLanguage } from "../../../lib/detectBrowserLanguage";
import MobileHeader from "./MobileHeader";
function Header() {
  const [menus, setMenus] = React.useState([]);

  const [lang, setLang] = React.useState("");

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
        children: [
          {
            title: "Özel Yazılım Geliştirme",
            href: lang + "hizmet/ozel-yazilim-gelistirme",
          },
          {
            title: "E-ticaret Yazılımı",
            href: lang + "/hizmet/e-ticaret-yazilimi",
          },
          {
            title: "Start-Up Çözümleri",
            href: lang + "/hizmet/startup-cozumleri",
          },
          {
            title: "Mobil Uygulama Geliştirme",
            href: lang + "/hizmet/mobil-uygulama-gelistirme",
          },
        ],
      },
      {
        title: "Referanslarımız",
        href: lang + "/referanslarimiz",
        children: [{}, {}],
      },
      {
        title: "Teknolojilerimiz",
        href: lang + "/teknolojilerimiz",
        children: [{}, {}],
      },
      {
        title: "Hakkımızda",
        href: lang + "/hakkimizda",
        children: [{}, {}],
      },
      {
        title: "Blog",
        href: lang + "/blog",
        children: [],
      },
      {
        title: "İletişim",
        href: lang + "/iletisim",
        children: [],
      },
    ]);
  }, []);

  const MenuLink = ({ title, href }) => {
    return (
      <Text
        cursor="pointer"
        className={"text-sm font-medium"}
        fontFamily={"Verdana"}
        onClick={() => {
          Router.push(lang + "/" + href);
        }}
      >
        {title}
      </Text>
    );
  };

  const router = useRouter();
  return (
    <>
      <Box display={{ base: "none", md: "initial" }}>
        <></>
        <Flex
          as="nav"
          bg="black"
          color="#fff"
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
          py={2}
        >
          <Image
            src={"/logo.svg"}
            width={150}
            height={30}
            onClick={() => {
              router.push(`/${lang}?ref=desktop-logo`);
            }}
            style={{
              cursor: "pointer",
            }}
          />

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
                  router.push(`${lang}/teklif-al`);
                }}
                fontSize={"sm"}
                fontFamily={"Poppins"}
              >
                Teklif Al
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box display={{ base: "initial", md: "none" }}>
        <MobileHeader lang={lang} menuItems={menus} />
      </Box>
    </>
  );
}

export default Header;
