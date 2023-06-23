import React, { useEffect, useState } from "react";
import MetaHead from "../../components/shared/MetaHead";
import Cta from "../../components/Cta";
import OurServices from "../../components/OurServices";
import OurTechnologies from "../../components/OurTechnologies";

import { Box, Flex } from "@chakra-ui/react";

import { useRouter } from "next/router";
import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import OurReferences from "../../components/OurReferences";
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

        <WindowTitleChanger />
      </>
      <Flex as="main" direction={"column"} gap={5}>
        <Cta lang={lang} />
        <Box>
          <OurServices />
        </Box>
        <Box>
          <OurReferences />
        </Box>
        <Box>
          <OurTechnologies />
        </Box>
        <Box>
          BLOG ALANI

        </Box>
      </Flex>
    </>
  );
}

export default IndexPage;
