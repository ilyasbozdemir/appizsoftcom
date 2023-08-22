import {
  Button,
  Box,
  Center,
  Flex,
  Text,
  Container,
  Heading,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  ListItem,
  Icon,
  List,
  UnorderedList,
  Tag,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PagesBreadcrumb from "../components/shared/PagesBreadcrumb";
import Head from "next/head";
import { site } from "../constants/site";
import { ArrowForwardIcon, CheckCircleIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { careers } from "../constants/careers";
import { hiringProcessFAQ } from "../constants/hiringProcessFAQ";

function CareersPage() {
  return (
    <>
      <Flex direction={"column"} gap={3}>
        <CareersCTA />
        <CareersContent />
      </Flex>
    </>
  );
}

const CareersCTA = () => {
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
      <Flex mt={4} direction={"column"}>
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
                  <Text fontSize={65}>Kariyer</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Kariyer"} />
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
                <Text fontSize={45}>Kariyer</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Kariyer"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const CareerCard = ({
  title,
  description,
  location,
  requirements,
  pageLoc,
  employmentType,
}) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <AccordionButton
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          textAlign="left"
        >
          <Box flex="1" textAlign="left">
            <HStack direction={"row"} spacing={5}>
              <Heading as="h3" fontSize="xl" mb={2}>
                {title}
              </Heading>
              <Tag size={"md"} variant="solid" colorScheme="teal">
                {employmentType}
              </Tag>
            </HStack>

            <Text>{description}</Text>
            <Text mt={2} color="gray.500">
              {location}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Flex direction={"column"}>
            <List>
              {requirements.map((requirement, index) => (
                <React.Fragment key={index}>
                  <ListItem p={1}>
                    <Flex align="center">
                      <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                      {requirement}
                    </Flex>
                  </ListItem>

                  {index === requirements.length - 1 && (
                    <Center>
                      <Link
                        href="/career/[position]"
                        as={`/career/` + pageLoc}
                        shallow={true}
                        passHref
                      >
                        <Button
                          mt={4}
                          variant="outline"
                          colorScheme="blue"
                          size="lg"
                        >
                          Şimdi Katıl
                        </Button>
                      </Link>
                    </Center>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const faqMarkup = hiringProcessFAQ.map((faq, index) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: faq.answer,
  },
}));

const HiringProcess = () => {
  return (
    <Box my={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        İşe Alım Süreci
      </Text>
      <Accordion allowToggle>
        {hiringProcessFAQ.map((faq) => (
          <AccordionItem key={faq.answer}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>{faq.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                İş İlanı ve Başvuru
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Açık pozisyonlarımızı ve iş ilanlarını sitemizde yayınlıyoruz.
              İlgilendiğiniz pozisyon için başvurunuzu online olarak
              yapabilirsiniz.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        {/* Diğer aşamaları buraya ekleyebilirsiniz */}
      </Accordion>
    </Box>
  );
};

const JoinUsSection = () => {
  const router = useRouter();
  return (
    <Box
      my={10}
      py={12}
      px={6}
      bgGradient="linear(to-l, #667eea, #764ba2)"
      borderRadius="lg"
      color="white"
      shadow={"md"}
      textAlign="center"
      boxShadow="xl"
    >
      <Heading as="h2" size={{ base: "xl", md: "2xl" }} mb={4}>
        Daha Büyük Bir Geleceği Şekillendirin
      </Heading>
      <Text fontSize="xl" mb={6}>
        Ekibimize katılarak inovasyonun bir parçası olmanın ve geleceği
        şekillendirmenin heyecanını yaşayın. Yenilikçi projelerde yer alarak
        sınırları zorlayın ve teknoloji dünyasında yeni ufuklara açılın.
        Birlikte çalışarak fark yaratın, büyüyen ekibimizde yerinizi alın ve
        geleceğin teknolojilerini bugünden keşfedin. Kendi yeteneklerinizi
        geliştirirken, küresel ölçekte projelerde yer alma fırsatını yakalayın.
        Bizimle bir adım atın, çünkü geleceğe beraber yürümek istiyoruz
      </Text>
      <Button
        size="lg"
        rightIcon={<ArrowForwardIcon />}
        colorScheme="white"
        variant={"outline"}
        onClick={() => {
          router.push("/tr/careers/[position]", "/tr/careers/join-us", {
            shallow: true,
          });
        }}
      >
        Özgeçmişinizi bırakın
      </Button>
    </Box>
  );
};

const EmployeeBenefits = () => {
  const benefits = [
    "Rekabetçi maaş ve yan haklar",
    "Esnek çalışma saatleri",
    "Kapsamlı sağlık sigortası",
    "Kariyer gelişim fırsatları",
    "Uzaktan çalışma imkanı",
    "Tatil ve izin avantajları",
    "Sosyal etkinlikler ve eğlenceli çalışma ortamı",
  ];

  return (
    <Box my={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Çalışan Avantajları ve İmkanları
      </Text>
      <UnorderedList>
        {benefits.map((benefit, index) => (
          <ListItem key={index}>
            <Text>{benefit}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

const OpenPositions = () => {
  return (
    <Flex direction={"column"}>
      <Flex direction={"column"} gap={5} mt={5}>
        <Flex
          direction={{ base: "column" }}
          justifyContent={"space-between"}
          gap={5}
        >
          <Text fontWeight={"semibold"} fontSize={{ base: 25, md: 35 }}>
            Teknoloji
          </Text>
          <Text fontSize={20}>
            Sınıfının en iyisi dijital deneyimler oluşturmak için teknolojiyi
            kullanıyoruz. Geliştirme yaşam döngüsünün tüm bölümlerinde işbirliği
            yapmak ve ilgi çekici ve işlevsel ürünleri hayata geçirmek için
            mühendislik ekibimize katılın.
          </Text>
        </Flex>

        <Center mb={5} mt={2}>
          <Flex direction={"column"} justifyContent={"center"} gap={3}>
            <Heading as="h2" fontSize={24} pos="relative">
              Açık Pozisyonlar
            </Heading>
          </Flex>
        </Center>
        <Divider />
        {careers.map((career, index) => (
          <React.Fragment key={index}>
            {career.type === "Technology" && (
              <Box>
                <CareerCard
                  title={career.title}
                  description={career.description}
                  location={career.location}
                  pageLoc={career.pageLoc}
                  requirements={career.requirements}
                  employmentType={career.employmentType}
                />

                {careers.length - 2 !== index && <Divider my={4} />}
              </Box>
            )}
          </React.Fragment>
        ))}
      </Flex>
      <Flex direction={"column"} gap={5} mt={5}>
        <Flex
          direction={{ base: "column" }}
          justifyContent={"space-between"}
          gap={5}
        >
          <Text fontWeight={"semibold"} fontSize={{ base: 25, md: 35 }}>
            Tasarım
          </Text>
          <Text fontSize={20}>
            Görseller ve etkileşimler revoksda sınır tanımıyor. Biçim ve işlevi
            sorunsuz bir şekilde harmanlayan birinci sınıf ürünler ve deneyimler
            sunmak için her yerden, her şeyle başlıyoruz.
          </Text>
        </Flex>

        <Center mb={5} mt={2}>
          <Flex direction={"column"} justifyContent={"center"} gap={3}>
            <Heading as="h2" fontSize={24} pos="relative">
              Açık Pozisyonlar
            </Heading>
          </Flex>
        </Center>
        <Divider />
        {careers.map((career, index) => (
          <React.Fragment key={index}>
            {career.type === "Design" && (
              <Box>
                <CareerCard
                  title={career.title}
                  description={career.description}
                  location={career.location}
                  pageLoc={career.pageLoc}
                  requirements={career.requirements}
                  employmentType={career.employmentType}
                />

                {careers.length - 2 !== index && <Divider my={4} />}
              </Box>
            )}
          </React.Fragment>
        ))}
      </Flex>
      <Flex direction={"column"} gap={5} mt={5}>
        <Flex
          direction={{ base: "column" }}
          justifyContent={"space-between"}
          gap={5}
        >
          <Text fontWeight={"semibold"} fontSize={{ base: 25, md: 35 }}>
            Paylaşılan Hizmetler
          </Text>
          <Text fontSize={20}>
            Görseller ve etkileşimler revoksda sınır tanımıyor. Biçim ve işlevi
            sorunsuz bir şekilde harmanlayan birinci sınıf ürünler ve deneyimler
            sunmak için her yerden, her şeyle başlıyoruz.
          </Text>
        </Flex>

        <Center mb={5} mt={2}>
          <Flex direction={"column"} justifyContent={"center"} gap={3}>
            <Heading as="h2" fontSize={24} pos="relative">
              Açık Pozisyonlar
            </Heading>
          </Flex>
        </Center>
        <Divider />
        {careers.map((career, index) => (
          <React.Fragment key={index}>
            {career.type === "Shared Services" && (
              <Box>
                <CareerCard
                  title={career.title}
                  description={career.description}
                  location={career.location}
                  pageLoc={career.pageLoc}
                  requirements={career.requirements}
                  employmentType={career.employmentType}
                />

                {careers.length - 2 !== index && <Divider my={4} />}
              </Box>
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Flex>
  );
};

const CareersContent = () => {
  const publisher = `AppizSoft`;
  const title = `Kariyer Fırsatları - Hayalinizdeki Pozisyon İçin Başvurun • AppizSoft`;
  const desc = `AppizSoft olarak, büyüyen ekibimize katılarak kariyerinizi şekillendirin. Backend geliştirici, frontend geliştirici, mobil uygulama geliştirici ve daha birçok pozisyon için fırsatları inceleyin.`;

  
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/careers`}
        />

        <link
          rel="alternate"
          hreflang="tr"
          href={`${site.baseUrl}/careers`}
        />
        <link
          rel="alternate"
          hreflang="en"
          href={`${site.baseUrl}/en/careers`}
        />
        <link rel="canonical" href="https://appizsoft.com/careers" />


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
        <meta property="og:url" content={`${site.baseUrl}`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqMarkup,
            }),
          }}
        />
      </Head>

      <Container maxW="8xl" p={{ base: 5, md: 10 }}>
        <JoinUsSection />

        <OpenPositions />

        <EmployeeBenefits />
        <HiringProcess />
      </Container>
    </>
  );
};

export default CareersPage;
