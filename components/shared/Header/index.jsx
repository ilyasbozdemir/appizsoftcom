import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Button,
  Center,
  Box,
  ScaleFade,
  Wrap,
  WrapItem,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { detectBrowserLanguage } from "../../../lib/detectBrowserLanguage";
import MobileHeader from "./MobileHeader";
import LanguageSwitcher from "../../LanguageSwitcher";
import { menuList } from "../../../constants/menuList";
import { technologies } from "../../../constants/technologies";
import { AiOutlineArrowRight } from "react-icons/ai";

function Header() {
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

  const [lang, setLang] = React.useState("");

  useEffect(() => {
    const browserLanguage = detectBrowserLanguage(["en", "tr"]);
    if (browserLanguage.startsWith("tr")) setLang(`/tr`);
    if (browserLanguage.startsWith("en")) setLang(`/en`);

    setMenus(menuList);
  }, []);

  const getChildrenByTitle = (items, title) => {
    const item = items.find((item) => item.title === title);
    return item ? item.children : [];
  };

  const MenuLink = ({ title, href }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [clickedElement, setClickedElement] = useState(null);

    const handleClick = (event) => {
      const clickedElementId = event.target.getAttribute("data-menu-title");
      setClickedElement(clickedElementId);

      if (href !== null) {
        Router.push(`${lang}/${href}`);
      } else {
        setIsOpen(!isOpen);
      }
    };

    const children = getChildrenByTitle(menus, title);

    const TechnologiesContent = () => {
      return (
        <Flex justifyContent={"center"}>
          <Wrap p={3} spacing="30px" justify="center">
            {technologies.map((tech) => (
              <>
                {tech.isMenuDisplay === true && (
                  <>
                    <WrapItem
                      key={tech.title}
                      mx={5}
                      cursor={"pointer"}
                      onClick={() => {
                        Router.push(`${lang}/teknolojilerimiz#${tech.id}`);
                      }}
                      w="250px"
                    >
                      <Flex direction={"row"}>
                        <Box
                          width="50%"
                          bg={"#f3f4f6"}
                          borderRadius={"4px"}
                          p={".5rem"}
                          gap={"1rem"}
                          alignItems={"center"}
                          boxSize={"50px"}
                        >
                          <Image
                            src={tech.imageUrl}
                            alt={tech.id}
                            width={tech.size.width}
                            height={tech.size.height}
                            mr={4}
                          />
                        </Box>
                        <Box mx={3}>
                          <Text
                            mb={0}
                            fontWeight={500}
                            fontSize={"14px"}
                            lineHeight={"20px"}
                            isTruncated
                          >
                            {tech.title}
                          </Text>
                          <Text
                            mb={0}
                            fontWeight={400}
                            fontSize={"14px"}
                            lineHeight={"20px"}
                            isTruncated
                          >
                            {tech.category}
                          </Text>
                        </Box>
                      </Flex>
                    </WrapItem>
                  </>
                )}
              </>
            ))}
            <WrapItem mx={5} w="250px">
              <Box
                width="50%"
              >
                <Button
                  p={3}
                  onClick={() => {
                    Router.push(`${lang}/teknolojilerimiz`);
                  }}
                  fontFamily={"Verdana"}
                  rightIcon={<AiOutlineArrowRight />}
                  mb={0}
                  fontWeight={400}
                  fontSize={"14px"}
                  lineHeight={"20px"}
                  bg={'primary'}
                  color={'white'}
                  variant={'outline'}
                >
                  Daha fazlasını Gör
                </Button>
              </Box>
            </WrapItem>
          </Wrap>
        </Flex>
      );
    };

    const ServicesContent = () => {
      return (
        <>
          <Wrap>
            {children.map((child) => (
              <>
                <WrapItem
                  key={child.title}
                  mx={5}
                  cursor={"pointer"}
                  onClick={() => {
                    Router.push(`${lang}/${child.href}`);
                  }}
                >
                  <Box
                    w="280px"
                    bg="white"
                    color={"black"}
                    _hover={{ color: "gray.600" }}
                  >
                    <Text fontWeight={500} fontSize={16} lineHeight={10}>
                      {child.title}
                    </Text>
                    <Text fontWeight={200} fontSize={14}>
                      {child.content}
                    </Text>
                  </Box>
                </WrapItem>
              </>
            ))}
          </Wrap>
        </>
      );
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
      return <div>{renderComponent()}</div>;
    };

    return (
      <>
        <Text
          cursor="pointer"
          fontFamily={"Montserrat"}
          fontWeight={100}
          fontSize={{ md: "13px", lg: "17px" }}
          onClick={handleClick}
          pos={"relative"}
          userSelect={"none"}
          data-menu-title={title}
          _hover={{ color: "gray.200" }}
        >
          {title}
        </Text>
        <>
          {isOpen && (
            <>
              <Box pos={"absolute"} top={"80px"} w="100%" h={"full"}>
                <ScaleFade initialScale={0.9} in={isOpen}>
                  <Center bg="white" color="black" shadow="md">
                    <ComponentSelector clickedElementId={clickedElement} />
                  </Center>
                </ScaleFade>
              </Box>
            </>
          )}
        </>
      </>
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
          <Flex justifyContent="space-between" alignContent="center">
            <Flex
              as="nav"
              align="center"
              justifyContent="center"
              textAlign={"center"}
              gap={[3, 4, 5]}
              userSelect={'none'}
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
              <>
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
                  fontFamily={"Poppins"}
                  p={{ md: 4, lg: 6 }}
                  fontSize={{ md: "13px", lg: "17px" }}
                >
                  Teklif Al
                </Button>
              </>
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
