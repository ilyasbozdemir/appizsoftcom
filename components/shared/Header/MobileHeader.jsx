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
  Icon,
  AccordionIcon,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { menuList } from "../../../constants/menuList";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
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
import ThemeSwitcher from "../../ThemeSwitcher";
import OfferButton from "../../OfferButton";
import SearchButton from "../../SearchButton";

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

  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <Flex
        as="nav"
        bg={bg}
        p={5}
        justify="space-between"
        align="center"
        pos={"relative"}
        w={"100%"}
        position="sticky"
        boxShadow={isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "none"}
        transition="box-shadow 0.3s"
        top={0}
        right={0}
        userSelect={"none"}
      >
        <HStack spacing={5}>
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
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          />
        </HStack>

        <Logo platform={"mobile"} lang={lang} />

        <HStack spacing={5}>
          <ThemeSwitcher />
          <SearchButton />
        </HStack>
      </Flex>
      <>
        <Modal
          size={"full"}
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Flex p={5} justify="space-between">
                <HStack spacing={5}>
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
                    _hover={{ bg: "transparent" }}
                    _active={{ bg: "transparent" }}
                  />
                </HStack>
                <Logo platform={"mobile"} lang={lang} />

                <HStack spacing={5}>
                  <ThemeSwitcher />
                  <SearchButton />
                </HStack>
              </Flex>
            </ModalHeader>
            <ModalBody>
              <Box>
                <Flex direction={"column"}>
                  {menus.map((menu) => (
                    <React.Fragment key={menu.title}>
                      <MenuLink
                        title={menu.title}
                        href={menu.href}
                        lang={lang}
                      />
                    </React.Fragment>
                  ))}

                  <Center my={5}>
                    <OfferButton platform={"mobile"} />
                  </Center>

                  <Box pos={"relative"}>
                    <LanguageSwitcher lang={lang} />
                  </Box>
                </Flex>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
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

  const technologiesList = getChildrenByTitle(menus, "Teknolojiler");
  const servicesList = getChildrenByTitle(menus, "Hizmetler");

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
              Router.push(`${lang}/service/${child.href}`);
            }}
          >
            <Box bg="white" color={"black"} _hover={{ color: "gray.600" }}>
              <Text
                fontWeight={500}
                fontSize={16}
                lineHeight={10}
                color={"primary.100"}
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

  const InstitutionalContent = () => {
    return <>InstitutionalContent</>;
  };

  return (
    <>
      <Box onClick={handleClick}>
        {href === null ? (
          <>
            <Accordion>
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
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      itemscope="itemscope"
                      itemtype="https://www.schema.org/SiteNavigationElement"
                    >
                      {title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {title === "Hizmetler" ? (
                    <>
                      <ServicesContent />
                    </>
                  ) : (
                    <>
                      {title === "Kurumsal" ? (
                        <>
                          <InstitutionalContent />
                        </>
                      ) : (
                        <>
                          {title === "Kurumsal"}
                          <TechnologiesContent />
                        </>
                      )}
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
