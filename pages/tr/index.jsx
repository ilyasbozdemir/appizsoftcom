import React, { useEffect, useState } from "react";
import MetaHead from "../../configuration/MetaHead";
import Cta from "../../sections/Cta";
import OurServices from "../../sections/OurServices";
import OurTechnologies from "../../sections/OurTechnologies";

import { useRouter } from "next/router";
import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import { Box, Divider, Flex } from "@chakra-ui/react";
import AboutUs from "../../sections/AboutUs";

function IndexPage() {
  const router = useRouter();

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
