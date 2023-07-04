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
  Divider,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { detectBrowserLanguage } from "../../../lib/detectBrowserLanguage";
import MobileHeader from "./MobileHeader";
import LanguageSwitcher from "../../LanguageSwitcher";
import { menuList } from "../../../constants/menuList";
import { AiOutlineArrowRight } from "react-icons/ai";
import Logo from "../Logo";
import OfferButton from "../../OfferButton";
import ThemeSwitcher from "../../ThemeSwitcher";

function Header({ isOpen, onOpen, onClose, onToggle }) {
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

    const getChildrenByTitle = (items, title) => {
      const item = items.find((item) => item.title === title);
      return item ? item.children : [];
    };

    const technologiesList = getChildrenByTitle(menus, "Teknolojilerimiz");
    const servicesList = getChildrenByTitle(menus, "Hizmetlerimiz");

    const softwareServiceList = servicesList?.filter(
      (service) => service.serviceCategory === "software"
    );

    const digitalMarketingServiceList = servicesList?.filter(
      (service) => service.serviceCategory === "digital marketing"
    );

    const TechnologiesContent = () => {
      return (
        <Flex justifyContent={"center"} direction={"row"}>
          <Wrap p={3} spacing="30px" justify="center">
            {technologiesList.map((tech) => (
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
                      <Flex direction={"row"} zIndex={11}>
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
              <Button
                colorScheme="teal"
                variant="outline"
                fontFamily={"Montserrat"}
                rightIcon={<AiOutlineArrowRight />}
                mb={0}
                p={3}
                fontWeight={400}
                fontSize={"14px"}
                lineHeight={"20px"}
                onClick={() => {
                  Router.push(`${lang}/teknolojilerimiz`);
                }}
              >
                Daha fazlasını Gör
              </Button>
            </WrapItem>
          </Wrap>
        </Flex>
      );
    };

    const ServicesContent = () => {
      const ServiceItem = ({ child }) => {
        return (
          <>
            <WrapItem
              key={child.title}
              mx={5}
              cursor={"pointer"}
              onClick={() => {
                Router.push(`${lang}/hizmet/${child.href}`);
              }}
            >
              <Box
                w="280px"
                bg="white"
                color={"black"}
                _hover={{ color: "gray.600" }}
              >
                <Text
                  fontWeight={500}
                  fontSize={16}
                  lineHeight={10}
                  color={"primary"}
                >
                  {child.title}
                </Text>
                <Text fontWeight={200} fontSize={14}>
                  {child.content}
                </Text>
              </Box>
            </WrapItem>
          </>
        );
      };

      const ServiceWrap = ({ items, title }) => {
        return (
          <>
            <ServiceHead title={title} />
            <Wrap>
              {items.map((child) => (
                <>
                  <ServiceItem child={child} />
                </>
              ))}
            </Wrap>
          </>
        );
      };

      const ServiceHead = ({ title }) => {
        return (
          <>
            <HStack mx={3}>
              <Divider flex="1" borderColor="primary" />
              <Text fontSize="xl" fontWeight="semibold">
                {title}
              </Text>
              <Divider flex="1" borderColor="primary" />
            </HStack>
          </>
        );
      };

      return (
        <Flex justifyContent={"center"} direction={"column"} px={5} py={2}>
          <ServiceWrap
            items={softwareServiceList}
            title={"Yazılım Hizmetlerimiz"}
          />
          <ServiceWrap
            items={digitalMarketingServiceList}
            title={"Dijital Pazarlama Hizmetlerimiz"}
          />
        </Flex>
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
      return <>{renderComponent()}</>;
    };

    return (
      <>
        <Text
          cursor="pointer"
          fontFamily={"Montserrat"}
          onClick={handleClick}
          pos={"relative"}
          userSelect={"none"}
          data-menu-title={title}
          _hover={{ color: "gray.200" }}
          zIndex={11}
          borderBottom={isOpen === true ? "1px solid #fff" : ""}
          className="font-weight-500 font-size-14 line-height-20 text-white cursor-pointer font-size-13-m font-size-11-sm"
        >
          {title}
        </Text>
        <>
          {isOpen && (
            <>
              <Box
                pos="fixed"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.5)"
                zIndex={10}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />

              <Box
                pos={"absolute"}
                top={"80px"}
                w="100%"
                h={"full"}
                zIndex={11}
              >
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
        as="nav"
        display={{ base: "none", md: "initial" }}
        position="sticky"
        top={0}
        right={0}
        zIndex={11}
      >
        <Center
          bg="black"
          color="#fff"
          p={5}
          boxShadow={isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.6)" : "none"}
          transition="box-shadow 0.3s"
        >
          <Flex
            justifyContent="space-between"
            alignContent="center"
            zIndex={11}
          >
            <Flex
              align="center"
              justifyContent="center"
              textAlign={"center"}
              gap={[3, 4, 5]}
            >
              <Logo platform={"desktop"} lang={lang} />

              <>
                {menus.map((menu) => (
                  <React.Fragment key={menu.title}>
                    <MenuLink title={menu.title} href={menu.href} />
                  </React.Fragment>
                ))}
                <ThemeSwitcher />
                <OfferButton platform={'desktop'} />
              </>
            </Flex>

            <LanguageSwitcher lang={lang} />
          </Flex>
        </Center>
      </Flex>

      <Flex display={{ base: "initial", md: "none" }}>
        <MobileHeader
          lang={lang}
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          onToggle={onToggle}
          menus={menus}
        />
      </Flex>
    </React.Fragment>
  );
}

export default Header;
