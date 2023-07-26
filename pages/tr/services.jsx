import React, { useEffect, useState } from "react";
import Head from "next/head";

import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

import {
  Text,
  Flex,
  Image,
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
              src={img}
              draggable={false}
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
                  İncele
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
              bg="primary.100"
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
          <Box mx={3}>
            <PagesBreadcrumb currentPage={"Teklif Al"} />
          </Box>
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
  const categories = ["all", "software", "digital marketing"];
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
              <>
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
                  ) : (
                    <></>
                  )}
                </Button>
              </>
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
  return (
    <>
      <Head>
        <title>Hizmetler • Appizsoft</title>
      </Head>

      <main>
        {/*<OurServicesCTA />*/}
        <OurServicesContent />
      </main>
    </>
  );
}

export default ServicesPage;
