import React, { useEffect, useState } from "react";
import Head from "next/head";

import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

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
} from "@chakra-ui/react";

import { BsArrowRight } from "react-icons/bs";

import { services } from "../../constants/services";
import { useRouter } from "next/router";
import Link from "next/link";
import { PiArrowsDownUpLight } from "react-icons/pi";
import { site } from "../../constants/site";
import Image from "next/image";

const baseImagePath = "https://appizsoft-static-api.vercel.app";

const ServicesCard = (props) => {
  const { id, img, href, title, content } = props;
  const router = useRouter();

  return (
    <>
      <Card maxW="sm" role={"group"}>
        <CardBody
          onClick={() => {
            router.push("/tr/service/[id]", `/tr/service/${href}`, {
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
                href="/tr/service/[id]"
                as={`/tr/service/${href}`}
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

const OurServicesContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
  const categories = ["all", "software", "digital marketing", "graphic-design"];
  const selectedIndex = categories.indexOf(selectedCategory);

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
            bg={"gray.200"}
            justifyContent={"center"}
            h={50}
            align={"center"}
            w={"100%"}
          >
            <Button
              variant="ghost"
              onClick={() => {
                setSelectedCategory("all");
              }}
            >
              Tüm Hizmetler
            </Button>
            {[...uniqueCategories].map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => {
                  setSelectedCategory(category);
                }}
              >
                {category === "software" ? (
                  <>Yazılım Hizmetlerimiz</>
                ) : category === "digital marketing" ? (
                  <>Dijital Pazarlama Hizmetlerimiz</>
                ) : category === "graphic-design" ? (
                  <>Grafik Tasarım Hizmetlerimiz</>
                ) : (
                  <></>
                )}
              </Button>
            ))}
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
    </Container>
  );
};

function ServicesPage() {
  const publisher = `AppizSoft`;
  const title = `Yaratıcı Çözümlerle İşinizi Destekliyoruz • AppizSoft`;
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
        <meta property="og:url" content={`${site.baseUrl}/tr`} />
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
