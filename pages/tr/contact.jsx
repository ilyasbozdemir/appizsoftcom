import { Box, Center, Flex, Text, Container } from "@chakra-ui/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import { site } from "../../constants/site";

const ContactCTA = () => {
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
                  <Text fontSize={65}>İletişim</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"İletişim"} />
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
                <Text fontSize={45}>İletişim</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"İletişim"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const ContactContent = () => {
  return <></>;
};

const publisher = `AppizSoft`;

const title = "İletişim - Firmamızla Bağlantı Kurun | AppizSoft";
const desc =
  "Bize ulaşın! Sorularınız, önerileriniz veya işbirliği talepleriniz için iletişim bilgilerimizden faydalanabilirsiniz. Size yardımcı olmaktan mutluluk duyarız.";

function ContactPage() {
  return (
    <Box>
      <Head>
        <title>{title}</title>

        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/tr`}
        />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/tr/contact`} />
        <link rel="alternate" hreflang="en" href={`${site.baseUrl}/contact`} />
        <link rel="canonical" href="https://appizsoft.com/tr/contact" />

        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={site.title} />
        <meta property="og:url" content={`${site.baseUrl}/tr`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
        <meta
          property="article:modified_time"
          content="2023-08-10T19:18:34+00:00"
        />
        <meta name="twitter:label1" content="Tahmini okuma süresi" />
        <meta name="twitter:data1" content="1 dakika" />
      </Head>

      <Box>
        <ContactCTA />
        <ContactContent />
      </Box>
    </Box>
  );
}

export default ContactPage;
