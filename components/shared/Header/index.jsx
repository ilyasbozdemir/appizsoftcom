import React, { useEffect, useState } from "react";
import { Flex, Text, Button, Center } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { detectBrowserLanguage } from "../../../lib/detectBrowserLanguage";
import MobileHeader from "./MobileHeader";
import LanguageSwitcher from "../../LanguageSwitcher";
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
        children: [],
      },
      {
        title: "Teknolojilerimiz",
        href: lang + "/teknolojilerimiz",
        children: [],
      },
      {
        title: "Hakkımızda",
        href: lang + "/hakkimizda",
        children: [],
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
        fontFamily={"Montserrat"}
        onClick={() => {
          Router.push(lang + "/" + href);
        }}
        fontSize={"lg"}
      >
        {title}
      </Text>
    );
  };

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
    <React.Fragment>
      <Flex
        display={{ base: "none", md: "initial" }}
        position="sticky"
        top={0}
        right={0}
        zIndex={500}
      >
        <Center
          bg="black"
          color="#fff"
          p={5}
          boxShadow={isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.6)" : "none"}
          transition="box-shadow 0.3s"
        >
          <Flex as="nav" justifyContent="space-between" alignContent="center">
            <Flex align="center" justifyContent="center" gap={5}>
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
              <React.Fragment>
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
              </React.Fragment>
            </Flex>
            <LanguageSwitcher lang={lang} />
          </Flex>
        </Center>
      </Flex>

      <Flex display={{ base: "initial", md: "none" }}>
        <MobileHeader lang={lang} menuItems={menus} />
      </Flex>
    </React.Fragment>
  );
}

export default Header;
