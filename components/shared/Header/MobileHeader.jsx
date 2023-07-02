import React, { useEffect, useRef, useState } from "react";
import { HamburgerIcon, CloseIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  IconButton,
  Text,
  Wrap,
  WrapItem,
  useDisclosure,
  Icon,
  AccordionIcon,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { menuList } from "../../../constants/menuList";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import LanguageSwitcher from "../../LanguageSwitcher";
import { AiOutlineArrowRight } from "react-icons/ai";

import { BiMenuAltRight } from "react-icons/bi";
import Logo from "../Logo";

const Header = ({ lang, isOpen, onOpen, onClose, onToggle, menus }) => {
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
    onClose();
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
        <Logo platform={"mobile"} lang={lang} />

        <IconButton
          icon={
            isOpen ? (
              <Icon as={CloseIcon} fontSize={20} />
            ) : (
              <Icon as={BiMenuAltRight} fontSize={35} />
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
      <>
        {isOpen && (
          <>
            <Box as="section">
              <Flex direction={"column"}>
                {menus.map((menu) => (
                  <React.Fragment key={menu.title}>
                    <MenuLink title={menu.title} href={menu.href} lang={lang} />
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
                    Teklif İste
                  </Button>
                </Center>

                <Box pos={"relative"}>
                  <LanguageSwitcher lang={lang} />
                </Box>
              </Flex>
            </Box>
          </>
        )}
      </>
    </>
  );
};

const MenuLink = ({ title, href, lang }) => {
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
        <Wrap spacing="30px" justify="center">
          {technologiesList?.map((tech) => (
            <>
              {tech.isMenuDisplay === true && (
                <>
                  <WrapItem
                    key={tech.title}
                    mx={10}
                    cursor={"pointer"}
                    onClick={() => {
                      Router.push(`${lang}/teknolojilerimiz#${tech.id}`);
                    }}
                    w="150px"
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
          <WrapItem mx={7} w="175px">
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
            cursor={"pointer"}
            onClick={() => {
              Router.push(`${lang}/hizmet/${child.href}`);
            }}
          >
            <Box bg="white" color={"black"} _hover={{ color: "gray.600" }}>
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
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      fontFamily={"Montserrat"}
                      p={5}
                      userSelect={"none"}
                      className={
                        "font-weight-400 font-size-15 line-height-22 mb-0"
                      }
                    >
                      <Box as="span" flex="1" textAlign="left">
                        {title}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {items?.map((child) => (
                      <>
                        <ServiceItem child={child} />
                      </>
                    ))}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </>
      );
    };

    return (
      <Flex justifyContent={"center"} direction={"column"} py={2}>
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

  return (
    <>
      <Box onClick={handleClick}>
        {href === null ? (
          <>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    fontFamily={"Montserrat"}
                    p={5}
                    userSelect={"none"}
                    className={
                      "font-weight-500 font-size-16 line-height-24 mb-0"
                    }
                  >
                    <Box as="span" flex="1" textAlign="left">
                      {title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {title === "Hizmetlerimiz" ? (
                    <>
                      <ServicesContent />
                    </>
                  ) : (
                    <>
                      <TechnologiesContent />
                    </>
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        ) : (
          <>
            <Text
              cursor="pointer"
              fontFamily={"Montserrat"}
              p={5}
              userSelect={"none"}
              className={"font-weight-500 font-size-16 line-height-24 mb-0"}
            >
              {title}
            </Text>
            <Divider />
          </>
        )}
      </Box>
    </>
  );
};

export default Header;
