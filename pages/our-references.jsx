import Head from "next/head";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../components/shared/PagesBreadcrumb";
import { site } from "../constants/site";
import {
  Box,
  Center,
  Container,
  Flex,
  Icon,
  Select,
  SimpleGrid,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { projects } from "../constants/projects";
import { PiArrowsDownUpLight } from "react-icons/pi";
import Image from "next/image";
const baseImagePath = "https://appizsoft-static-api.vercel.app";
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

const OurReferencesCTA = () => {
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
                  <Text fontSize={65}>Referanslarımız</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Referanslarımız"} />
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
                <Text fontSize={45}>Referanslarımız</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Referanslarımız"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const OurReferencesContent = () => {
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

  const [selectedCategory, setSelectedCategory] = useState("projects");
  const options = [
    {
      val: "real-estate",
      title: "Gayrimenkul",
    },
    {
      val: "tourism",
      title: "Turizm",
    },
    {
      val: "education",
      title: "Eğitim",
    },
    {
      val: "food",
      title: "Gıda",
    },
    {
      val: "retail",
      title: "Perakende",
    },
    {
      val: "transportation",
      title: "Ulaşım",
    },
    {
      val: "health",
      title: "Sağlık",
    },
    {
      val: "technology",
      title: "Teknoloji",
    },
    {
      val: "finance",
      title: "Finans ve Danışmanlık",
    },
    {
      val: "other",
      title: "Diğer",
    },
  ];

  let filteredData = projects.filter((item) => {
    return item.sector === selectedCategory;
  });

  useEffect(() => {
    filteredData = projects.filter((item) => {
      return item.sector === selectedCategory;
    });
  }, [selectedCategory]);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "references",
    defaultValue: options[0].val,
    onChange: setSelectedCategory,
  });

  const onChangeHandled = (e) => {
    setSelectedCategory(e.target.value);
  };

  const group = getRootProps();
  return (
    <Container p={{ base: 9, md: 10 }} maxW="8xl">
      {isMobile && (
        <Select
          onChange={onChangeHandled}
          icon={<Icon as={PiArrowsDownUpLight} />}
        >
          {options.map((category) => (
            <>
              <option key={category.val} value={category.val}>
                {category.title}
              </option>
            </>
          ))}
        </Select>
      )}
      {!isMobile && (
        <Flex
          justifyContent={"center"}
          direction={"columns"}
          flexWrap={"wrap"}
          gap={4}
          {...group}
        >
          {options.map((value) => {
            const radio = getRadioProps({ value: value.val });
            return (
              <RadioCard key={value} {...radio}>
                {value.title}
              </RadioCard>
            );
          })}
        </Flex>
      )}

      <Flex mt={"50px"} flexWrap={"wrap"} gap={3}>
        {filteredData.map((p, index) => (
          <Flex
            key={p.id}
            cursor={"pointer"}
            boxSizing="border-box"
            w={200}
            h={200}
            align={"center"}
            bg={"#e7e7e7"}
            transition={"transform 0.3s ease"} /* Ekledik */
            _hover={{ transform: "scale(1.05)" }} /* Ekledik */
          >
            <Image
              src={`${baseImagePath}/${p.logo}`}
              alt={p.name}
              height={p.portfolioSize.h}
              width={p.portfolioSize.w}
              style={{
                borderRadius: "15px",
              }}
            />
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

function OurReferencesPage() {
  const publisher = `AppizSoft`;
  const title = `Referanslarımız • Appizsoft`;
  const desc = `Müşterilerimizin deneyimleriyle gurur duyuyoruz. Sizler için sunduğumuz hizmetlerimiz hakkındaki referanslarımızı keşfedin.`;

  return (
    <>
      <Head>
        <title>{title}</title>

        <link rel="alternate" hreflang="x-default" href={`${site.baseUrl}/our-references`} />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/our-references`} />
        <link
          rel="alternate"
          hreflang="en"
          href={`${site.baseUrl}/en/our-references`}
        />
        <link rel="canonical" href="https://appizsoft.com/our-references" />

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
        <meta property="og:url" content={`${site.baseUrl}/tr/portfolio`} />
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
        <OurReferencesCTA />
        <OurReferencesContent />
      </Box>
    </>
  );
}

export default OurReferencesPage;
