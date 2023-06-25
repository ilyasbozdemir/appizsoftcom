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
import Router, { useRouter } from "next/router";
import { menuList } from "../../../constants/menuList";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

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

  const handleRouteChangeComplete = (url) => {
    onClose(); // Sayfa geçişi tamamlandığında isOpen durumunu kapatmak için onClose işlevini çağırıyoruz
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
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
        userSelect={"none"}
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
                <MenuLink
                  title={menu.title}
                  href={menu.href}
                  lang={lang}
                  data-menu-title={menu.title}
                />
              </React.Fragment>
            ))}

            <Center my={5}>
              <Button
                color="#fff"
                bg={"primary"}
                _hover={{
                  bg: "#6ebec2",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
                }}
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

const MenuLink = ({ title, href, lang, "data-menu-title": dataMenuTitle }) => {
  const handleClick = (event) => {
    if (href !== null) {
      Router.push(`${lang}/${href}`);
    }
  };

  const [menus, setMenus] = React.useState([
    {
      title: "Hizmetlerimiz",
    },
    {
      title: "Referanslarımız",
    },
    {
      title: "Teknolojilerimiz",
    },
    {
      title: "Hakkımızda",
    },
    {
      title: "Blog",
    },
    {
      title: "İletişim",
    },
  ]);
  useEffect(() => {
    setMenus(menuList);
  }, []);

  
  const TechnologiesContent = () => {
    return <></>;
  };

  const ServicesContent = () => {
    return <></>;
  };

  const ComponentSelector = ({ clickedElementId }) => {
    const renderComponent = () => {
      switch (clickedElementId) {
        case "Teknolojilerimiz":
          return <TechnologiesContent />;
        case "Hizmetlerimiz":
          return <ServicesContent />;
        default:
          return null;
      }
    };
    return <>{renderComponent()}</>;
  };
  
  const AccordionContent = ({ title, menuId }) => {
    return (
      <>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton
                //_expanded={{ bg: "primary", color: "white" }}
                cursor="pointer"
                className={"flex align-center justify-between p-2"}
                fontFamily={"Montserrat"}
                p={5}
                _hover={{
                  color: "#fff",
                }}
                data-menu-id={menuId}
              >
                <Box as="span" flex="1" textAlign="left">
                  {title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ComponentSelector clickedElementId={menuId} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>
    );
  };

  return (
    <>
      <Box onClick={handleClick} _hover={{ bg: "primary", color: "#fff" }}>
        {href === null ? (
          <>
            <AccordionContent title={dataMenuTitle} menuId={dataMenuTitle} />
          </>
        ) : (
          <>
            <Text
              cursor="pointer"
              className={"flex align-center justify-between p-2"}
              fontFamily={"Montserrat"}
              p={5}
              _hover={{
                color: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              {title}
            </Text>
          </>
        )}
      </Box>
    </>
  );
};

export default Header;
