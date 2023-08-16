import React, { useEffect, useState } from "react";
import Head from "next/head";

import PagesBreadcrumb from "../components/shared/PagesBreadcrumb";

import {
  Text,
  Flex,
  Heading,
  Box,
  Center,
  SimpleGrid,
  Button,
  Divider,
  Stack,
  Card,
  CardBody,
  CardFooter,
  Container,
  useMediaQuery,
  useBreakpointValue,
  Select,
  Icon,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

import { BsArrowRight } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { services } from "../constants/services";
import { useRouter } from "next/router";
import Link from "next/link";
import { PiArrowsDownUpLight } from "react-icons/pi";
import { site } from "../constants/site";
import Image from "next/image";

const baseImagePath = "https://appizsoft-static-api.vercel.app";

import OurTechnologies from "../sections/OurTechnologies";

const ServicesCard = (props) => {
  const { id, img, href, title, content } = props;
  const router = useRouter();

  return (
    <>
      <Card maxW="sm" role={"group"}>
        <CardBody
          onClick={() => {
            router.push("/service/[id]", `/service/${href}`, {
              shallow: true,
            });
          }}
          cursor="pointer"
        >
          <Flex justifyContent={"center"}>
            <Image
              id={id}
              alt={title}
              height={70}
              width={70}
              src={`${baseImagePath}${img}`}
              draggable={false}
              loader={({ src, width, quality }) => {
                return `${baseImagePath}${src}?w=${width}&q=${quality || 75}`;
              }}
            />
          </Flex>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{content}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex justifyContent={"center"} mt={4} justify={"center"} my={2}>
            <Stack>
              <Link
                href="/service/[id]"
                as={`/service/${href}`}
                shallow={true}
                passHref
              >
                <Button
                  variant={"outline"}
                  color="primary.100"
                  rightIcon={<BsArrowRight />}
                  w={"full"}
                  h={"50px"}
                  _groupHover={{
                    boxShadow: `rgba(84, 190, 195, 0.4) 0px 2px 4px, rgba(84, 190, 195, 0.3) 0px 7px 13px -3px, rgba(84, 190, 195, 0.2) 0px -3px 0px inset;`,
                  }}
                >
                  Devamını Oku
                </Button>
              </Link>
            </Stack>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

const OurServicesCTA = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // İlk renderda ekran boyutuna göre kontrol yapılır
    handleWindowSize();

    // Ekran boyutu değiştiğinde kontrol yapılır
    window.addEventListener("resize", handleWindowSize);

    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  const handleWindowSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <>
      <Flex direction={"column"}>
        {!isMobile && (
          <>
            <Flex
              as="section"
              h={"350px"}
              bgGradient="linear(to-l, #667eea, #54BEC3)"
              w="100%"
              color="white"
              justify={"center"}
            >
              <Center>
                <Flex direction={"column"}>
                  <Text fontSize={65}>Hizmetler</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Hizmetler"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Flex
            as="section"
            h={180}
            bgGradient="linear(to-l, #667eea, #54BEC3)"
            w="100%"
            color="white"
            justify={"center"}
          >
            <Center>
              <Flex direction={"column"}>
                <Text fontSize={45}>Hizmetler</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Hizmetler"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
};

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" n userSelect={"none"}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _hover={{
          opacity: 0.9,
        }}
        _checked={{
          bgGradient: "linear(to-l, #0ea5e9,#2563eb)",
          color: "white",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

const OurServicesContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("software");

  let filteredData = services.filter((item) => {
    if (selectedCategory === "all") {
      return true;
    } else {
      return item.serviceCategory === selectedCategory;
    }
  });

  useEffect(() => {
    filteredData = services.filter((item) => {
      if (selectedCategory === "all") {
        return true;
      } else {
        return item.serviceCategory === selectedCategory;
      }
    });
  }, [selectedCategory]);

  const uniqueCategories = new Set(
    services.map((item) => item.serviceCategory)
  );

  const onChangeHandled = (e) => {
    setSelectedCategory(e.target.value);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

 

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "services",
    defaultValue: selectedCategory,
    onChange: setSelectedCategory,
  });

  const group = getRootProps();

  return (
    <Container maxW="8xl" p={{ base: 5, md: 10 }}>
      <Center mb={5} mt={2}>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading as="h2" fontSize={24} pos="relative">
            Hizmetler
          </Heading>
        </Flex>
      </Center>

      {!isMobile && (
        <>
          <Flex
            justifyContent={"center"}
            direction={"columns"}
            flexWrap={"wrap"}
            gap={4}
            {...group}
          >
            {[...uniqueCategories].map((category) => {
              const radio = getRadioProps({ value: category });
              return (
                <RadioCard key={category} {...radio}>
                  {category === "software" ? (
                    <>Yazılım Hizmetlerimiz</>
                  ) : category === "digital marketing" ? (
                    <>Dijital Pazarlama Hizmetlerimiz</>
                  ) : category === "graphic-design" ? (
                    <>Grafik Tasarım Hizmetlerimiz</>
                  ) : (
                    <></>
                  )}
                </RadioCard>
              );
            })}
          </Flex>
        </>
      )}

      {isMobile && (
        <>
          <Select
            onChange={onChangeHandled}
            icon={<Icon as={PiArrowsDownUpLight} />}
          >
            <option value="all">Tüm Hizmetler</option>
            {[...uniqueCategories].map((category) => (
              <>
                <option key={category} value={category}>
                  {category === "software" ? (
                    <>Yazılım Hizmetlerimiz</>
                  ) : category === "digital marketing" ? (
                    <>Dijital Pazarlama Hizmetlerimiz</>
                  ) : category === "graphic-design" ? (
                    <>Grafik Tasarım Hizmetlerimiz</>
                  ) : (
                    <></>
                  )}
                </option>
              </>
            ))}
          </Select>
        </>
      )}

      <Center>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacingX={{
            base: 16,
            lg: 24,
          }}
          spacingY={20}
          mt={6}
        >
          {filteredData.map((child) => (
            <>
              <ServicesCard {...child} />
            </>
          ))}
        </SimpleGrid>
      </Center>
      <Box my={5}>
        <StartProject />
      </Box>

      <Box my={5}>
        <Box p={8} bg="gray.50" borderRadius="md" boxShadow="lg">
          <Text fontSize="xl" fontWeight="semibold" mb={4} color="blue.600">
            Projede Kullandığımız Teknolojiler
          </Text>
          <OurTechnologies />
          <Text mt={4} fontSize="sm" color="gray.600">
            Projemizin geliştirilmesinde en güncel ve performans odaklı
            teknolojileri kullanıyoruz. İnovasyon ve kalite için buradayız!
          </Text>
        </Box>
      </Box>

      <Flex direction="column" align="center">
        <Link href="/contact" passHref>
          <Button
            colorScheme="blue"
            size="lg"
            _hover={{ bg: "blue.600" }}
            leftIcon={<Icon as={FaEnvelope} boxSize={5} />}
          >
            İletişime Geçin
          </Button>
        </Link>
        <Text mt={2} fontSize="sm" color="gray.600">
          Sorularınızı yanıtlamaktan mutluluk duyarız!
        </Text>
      </Flex>
    </Container>
  );
};

const StartProject = () => {
  return (
    <Box
      bgGradient="linear(to-r, teal.400, blue.500)"
      color="white"
      borderRadius="lg"
      p={10}
      textAlign="center"
    >
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="1">
          <Image
            src={
              "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            }
            alt="Project Start"
            height={500}
            width={400}
            borderRadius="md"
            style={{
              borderRadius: "16px",
              boxShadow: "16px",
            }}
          />
        </Box>
        <Box flex="1" ml={{ base: 0, md: 10 }} mt={{ base: 6, md: 0 }}>
          <Heading as="h2" fontSize="2xl" mb={4}>
            Yaratıcılığınızı Hayata Geçirelim
          </Heading>
          <Text fontSize="lg" mb={6}>
            Eşsiz projeleriniz için yanınızdayız. Dijital dünyanın kapılarını
            aralamak ve projenize hayat vermek için hemen başlayalım!
          </Text>
          <Link href={"/start-project"} passHref>
            <Button size="lg">Proje Başlatın</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

function ServicesPage() {
  const publisher = `AppizSoft`;
  const title = `Hizmetler • AppizSoft`;
  const desc = `AppizSoft olarak, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz. Yazılım çözümleri, web geliştirme, mobil uygulama geliştirme ve daha fazlasını keşfedin.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${site.baseUrl}/services`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
      </Head>

      <Box>
        <OurServicesCTA />
        <OurServicesContent />
      </Box>
    </>
  );
}

export default ServicesPage;
