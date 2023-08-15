import React, { useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  VStack,
  useColorModeValue,
  Container,
  Input,
  Button,
  Text,
  Flex,
  Textarea,
  useToast,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import { careers } from "../../constants/careers";
import Head from "next/head";
import { site } from "../../constants/site";
import Link from "next/link";

const MagicLinkForm = ({ title, isJoinUsPage }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [cvFile, setCvFile] = useState(null);

  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Başvuru Gönderildi",
      description:
        "Başvurunuz alınmıştır. İncelemeye aldığımızda sizinle iletişime geçeceğiz.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    // Form alanlarını temizleme
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setLinkedinUrl("");
    setCvFile(null);
  };

  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <HStack py={4} margin="0 auto">
        <Icon as={HiOutlineArrowNarrowLeft} boxSize={35} />

        <Link href={"/tr/careers"}>
          <Text fontWeight={'semibold'}   _hover={{color:useColorModeValue('primary.100','primary.200')} }> Tüm Açık Projelere Geri Dön</Text>
        </Link>
      </HStack>

      <Stack maxW={{ base: "20rem", sm: "45rem" }} margin="0 auto">
        <Box pos="relative">
          <Box
            pos="absolute"
            top="-7px"
            right="-7px"
            bottom="-7px"
            left="-7px"
            rounded="lg"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            transform="rotate(-2deg)"
          />
          <VStack
            as="form"
            pos="relative"
            spacing={8}
            p={6}
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            onSubmit={handleSubmit}
          >
            <Box textAlign="center">
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Başvuru Formu
              </Text>
              <Text>
                İş başvurusu yapmak için aşağıdaki formu doldurun. İncelemeye
                aldığımızda sizinle iletişime geçeceğiz.
              </Text>
              <VStack spacing={4} align="start" mt={4}>
                <FormControl>
                  <FormLabel>Ad Soyad</FormLabel>
                  <Input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>E-posta</FormLabel>
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Telefon Numarası</FormLabel>
                  <Input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>LinkedIn URL'si</FormLabel>
                  <Input
                    type="url"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>CV Dosyası (PDF veya Word)</FormLabel>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setCvFile(e.target.files[0])}
                  />
                </FormControl>
              </VStack>
              <Button mt={4} colorScheme="blue" size="lg" type="submit">
                Başvuru Gönder
              </Button>
            </Box>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
};

function PositionPage({ career }) {
  const isJoinUsPage = career.pageLoc === "join-us";
  const publisher = `AppizSoft`;
  const title = `Kariyer Fırsatları - Hayalinizdeki Pozisyon İçin Başvurun • AppizSoft`;
  const desc = `AppizSoft olarak, büyüyen ekibimize katılarak kariyerinizi şekillendirin. Backend geliştirici, frontend geliştirici, mobil uygulama geliştirici ve daha birçok pozisyon için fırsatları inceleyin.`;

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

      <MagicLinkForm title={career.title} isJoinUsPage={isJoinUsPage} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = careers.map((career) => {
    return {
      params: {
        position: career.pageLoc,
      },
    };
  });

  paths.push({
    params: {
      position: "join-us",
    },
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { position } = params;

  const allPositions = [
    ...careers,
    { title: "Bize Katılın", pageLoc: "join-us" },
  ];

  const career = allPositions.find((career) => career.pageLoc === position);

  return {
    props: {
      career,
    },
  };
}

export default PositionPage;
