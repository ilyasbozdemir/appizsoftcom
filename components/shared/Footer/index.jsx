import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Center,
  useTheme,
  useColorMode,
  useBreakpointValue,
  Button,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { AddIcon, ChevronDownIcon, MinusIcon } from "@chakra-ui/icons";
import SocialMediaIcon from "../SocialMediaIcon";

const ListHeader = ({ children }) => {
  return (
    <Text
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
      textDecoration={"underline"}
    >
      {children}
    </Text>
  );
};

const MetaBusinessPartner = () => {
  return (
    <>
      <Link href="#" target="_blank" passHref>
        <Image
          src="/images/meta-partner.webp"
          alt="Meta-Business-Partner_logo.png"
          width={100}
          height={100}
          draggable='false'
        />
      </Link>
    </>
  );
};
const GooglePartner = () => {
  const googlePartnersUrl = `#`;
  return (
    <>
      <Link href={googlePartnersUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/google-partner.webp"
          alt="google-partner"
          width={100}
          height={100}
          draggable='false'
        />
      </Link>
    </>
  );
};
const Partners = () => {
  const state = false;
  return (
    <>
      <Container as={Stack} maxW={"4xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"center"}>
            <Box px={2}>
              <GooglePartner />
            </Box>
          </Stack>
          <Stack align={"center"}>
            <Box px={2}>
              <MetaBusinessPartner />
            </Box>
          </Stack>
          <Stack align={"center"}>
            <Box px={2}></Box>
          </Stack>
          <Stack align={"center"}>
            <Box px={2}></Box>
          </Stack>
        </SimpleGrid>
        <Divider mt={3} display={{ base: "none", lg: "initial" }} />
      </Container>
    </>
  );
};

const FooterAcordion = () => {
  return (
    <>
      <Flex align={"center"} justify={"center"}>
        <Container>
          <Accordion width="100%" maxW="full" rounded="lg" allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Kurumsal
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack align={"flex-start"}>
                      <Link href={"#"}>Hakkımızda</Link>
                      <Link href={"#"}>Kariyer</Link>
                      <Link href={"#"}>Bize Ulaşın</Link>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Hizmetler
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack align={"flex-start"}>
                      <Link href={"#"}>Yazılım Hizmetlerimiz</Link>
                      <Link href={"#"}>Dijital Hizmetlerimiz</Link>
                      <Link href={"#"}>E-ticaret Çözümleri</Link>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Faydalı Kaynak
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack align={"flex-start"}>
                      <Link href={"#"}>Blog</Link>
                      <Link href={"#"}>RSS Aboneliği</Link>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Legal
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack align={"flex-start"}>
                      <Link href={"#"}>Çerez Politikası</Link>
                      <Link href={"#"}>Gizlilik Politikası</Link>
                      <Link href={"#"}>KVKK</Link>
                    </Stack>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Container>
      </Flex>
    </>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Flex direction={"column"}>
      <Box
        bgImage={"linear-gradient(220deg, #38435B 46%, #495368 100%)"}
        color={useColorModeValue("white", "gray.200")}
        w="100vw"
        h="auto"
      >
        <Flex direction={"column"} justify={"center"} justifyContent={"center"}>
          <Box display={{ base: "none", lg: "initial" }}>
            <Partners />
          </Box>
          <Container as={Stack} maxW={"8xl"} py={{ base: 5, sm: 10 }}>
            <Box display={{ base: "none", sm: "initial" }}>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                <Stack align={"flex-start"}>
                  <ListHeader>Kurumsal</ListHeader>
                  <Link href={"#"}>Hakkımızda</Link>
                  <Link href={"#"}>Kariyer</Link>
                  <Link href={"#"}>Bize Ulaşın</Link>
                </Stack>
                <Stack align={"flex-start"}>
                  <ListHeader>Hizmetler</ListHeader>
                  <Link href={"#"}>Yazılım Hizmetlerimiz</Link>
                  <Link href={"#"}>Dijital Hizmetlerimiz</Link>
                  <Link href={"#"}>E-ticaret Çözümleri</Link>
                </Stack>

                <Stack align={"flex-start"}>
                  <ListHeader>Blog / RSS</ListHeader>
                  <Link href={"#"}>Blog</Link>
                  <Link href={"#"}>RSS Aboneliği</Link>
                </Stack>
                <Stack align={"flex-start"}>
                  <ListHeader>Legal</ListHeader>
                  <Link href={"#"}>Çerez Politikası</Link>
                  <Link href={"#"}>Gizlilik Politikası</Link>
                  <Link href={"#"}>KVKK</Link>
                </Stack>
              </SimpleGrid>
            </Box>

            <Box display={{ base: "initial", sm: "none" }}>
              <FooterAcordion />
            </Box>
          </Container>
          <Box display={{ base: "initial", lg: "none" }}>
            <Partners />
          </Box>

          <Box py={{ base: 0, sm: 10 }}>
            <Flex
              align={"center"}
              _before={{
                content: '""',
                borderBottom: "1px solid",
                borderColor: useColorModeValue("gray.200", "gray.200"),
                flexGrow: 1,
                mr: 8,
              }}
              _after={{
                content: '""',
                borderBottom: "1px solid",
                borderColor: useColorModeValue("gray.200", "gray.200"),
                flexGrow: 1,
                ml: 8,
              }}
            >
              <Logo isLink={false} s={{ h: 125, w: 250 }} />
            </Flex>
            <Text pt={{ base: 0, sm: 6 }} fontSize={"sm"} textAlign={"center"}>
              <SocialMediaIcon />
            </Text>
            <Text pt={{ base: 0, sm: 6 }} fontSize={"sm"} textAlign={"center"}>
              <FooterData />
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

const FooterTopContent = () => {
  const router = useRouter();
  const isTeklifAlPage =
    router.asPath.endsWith("/get-a-quote") ||
    router.pathname.endsWith("/get-a-quote");

  const isAboutPage =
    router.asPath.endsWith("/about-appizsoft") ||
    router.pathname.endsWith("/about-appizsoft");

  const theme = useTheme();

  const { colorMode } = useColorMode();

  const primaryColor =
    colorMode === "dark"
      ? theme.colors.primaryD["100"]
      : theme.colors.primary["100"];

  const primaryColor2 =
    colorMode === "dark"
      ? theme.colors.primaryD["200"]
      : theme.colors.primary["200"];

  const boxShadow = useBreakpointValue({
    base: theme.shadows.sm,
    sm: theme.shadows.md,
    md: theme.shadows.lg,
    lg: theme.shadows.xl,
    xl: theme.shadows["2xl"],
  });

  return (
    <>
      {isTeklifAlPage | isAboutPage ? (
        <></>
      ) : (
        <Flex>
          <Center>
            <Stack
              as={Box}
              bgColor={"transparent"}
              bgImage={`radial-gradient(at bottom left, ${primaryColor} 55%, ${primaryColor2}  100%)`}
              boxShadow={boxShadow}
              p={"64px"}
              spacing={4}
              borderRadius={"15px"}
              w={{ base: "95%", md: "auto" }}
            >
              <Flex direction={"column"}>
                <Text
                  color={"white"}
                  fontSize={18}
                  fontFamily={"Inter"}
                  data-aos="fade-down"
                >
                  Biz senin için buradayız
                </Text>
                <Text
                  color={"white"}
                  fontSize={30}
                  fontFamily={"Inter"}
                  as={"h4"}
                  data-aos="fade-up"
                >
                  Fikir aşamasından tasarıma, koddan teslimata.
                </Text>

                <Text
                  color={"white"}
                  w={{ base: "", md: 650 }}
                  fontSize={18}
                  display={{ base: "none", lg: "initial" }}
                >
                  Her büyüklükteki ekip için kullanıcı merkezli uygulamalar
                  geliştiren tam hizmet veren bir dijital ajansız.
                  Teknolojilerimiz, ortaklarımız için heyecan verici yeni
                  olanaklar yaratıyor.
                </Text>
              </Flex>
              <Box>
                <Button
                  colorScheme={colorMode === "dark" ? "white" : "messenger"}
                  rounded={"full"}
                  p={3}
                  variant="outline"
                  fontSize={"md"}
                  onClick={() => {
                    router.push(`/tr/get-a-quote`);
                  }}
                  data-aos="fade-right"
                >
                  Bizimle bir proje başlatın 🚀
                </Button>
              </Box>
            </Stack>
          </Center>
        </Flex>
      )}
    </>
  );
};

const FooterData = () => {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  let yearText;
  if (currentYear > startYear) {
    yearText = `${startYear}-${currentYear}`;
  } else {
    yearText = `${startYear}`;
  }
  return <> {currentYear} Appizsoft &copy; Tüm Hakları Saklıdır</>;
};
