import React, { useEffect, useState } from "react";
import MetaHead from "../../components/shared/MetaHead";
import Cta from "../../sections/Cta";
import OurServices from "../../sections/OurServices";
import OurTechnologies from "../../sections/OurTechnologies";

import { useRouter } from "next/router";
import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import OurReferences from "../../sections/OurReferences";
import { Box, Divider, Flex } from "@chakra-ui/react";
import JsonLd from "../../components/shared/JsonLd";
import AboutUs from "../../sections/AboutUs";

function IndexPage() {
  const router = useRouter();

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.appizsoft.com"
      : "http://localhost:3000";

  const [site, setSite] = React.useState({
    title: `Appizsoft • Özel Yazılım Geliştirme`,
    publisher: `Appizsoft`,
    url: baseUrl,
    image: baseUrl + "/logo.svg",
    imageAlt: "site-logo-png",
    description: `Müşterilerimize özel yaklaşımımızla yaratıcı çözümler sunarak hedeflerine ulaşmalarına yardımcı oluyoruz. Stratejik planlama ve araştırmalarımızla, müşterilerimizin sektöründe öne çıkarak rekabet avantajı elde etmelerini sağlıyoruz.`,
    name: ``,
    keywords: "",
    isRobotIndex: true,
    sameAs: [
      [
        "https://www.instagram.com/appizsoftcom/",
        "https://www.facebook.com/appizsoftcom/",
        "https://www.tiktok.com/@appizsoftcom",
        "https://tr.linkedin.com/company/appizsoft",
        "https://www.youtube.com/channel/UC0T2GB4idz_7_3KAZJZy22A",
      ],
    ],
  });
  const [lang, setLang] = React.useState("");
  useEffect(() => {
    const supportedLanguages = ["tr", "en"];
    const browserLanguage = detectBrowserLanguage(supportedLanguages);
    router.push(`/${browserLanguage}`);
    setLang(browserLanguage);
  }, []);

  const WindowTitleChanger = () => {
    const titles = [
      "Appizsoft • Özel Yazılım Geliştirme",
      "Appizsoft • Dijital Pazarlama",
      "Appizsoft • E-ticaret Çözümleri",
      "Appizsoft • Prodüksiyon & Tasarım",
      "Appizsoft • Oyun Tasarım",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 2500);

      return () => {
        clearInterval(interval);
      };
    }, []);

    useEffect(() => {
      document.title = titles[currentIndex];
    }, [currentIndex]);
  };

  const jsonLdData = {
    context: "https://schema.org",
    type: "Organization",
    name: site.publisher,
    alternateName: baseUrl,
    url: baseUrl,
    logo: site.image,
    contactPoint: {
      type: "ContactPoint",
      telephone: "",
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: "Turkish",
    },
    sameAs: site.sameAs,
  };

  return (
    <>
      <>
        <MetaHead
          pageTitle={site.title}
          description={site.description}
          keywords={site.keywords}
          author={site.author}
          publisher={site.publisher}
          isRobotIndex={site.isRobotIndex}
          image={site.image}
        />
        <JsonLd data={jsonLdData} />

        <WindowTitleChanger />
      </>

      <Flex as="main" direction={"column"} gap={5}>
        <Box>
          <Cta lang={lang} />
        </Box>
        <Divider />

        <Box id={"AboutUs"}>
          <AboutUs lang={lang} />
        </Box>
        <Divider />

        <Box id={"OurServices"}>
          <OurServices />
        </Box>
        <Divider />


        <Box>
          <OurTechnologies />
        </Box>
        <Divider />

        <Box>BLOG ALANI</Box>
        <Divider />
      </Flex>
    </>
  );
}

export default IndexPage;
