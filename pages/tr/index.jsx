import React, { useEffect, useState } from "react";
import Cta from "../../sections/Cta";
import OurServices from "../../sections/OurServices";
import AboutUs from "../../sections/AboutUs";

import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import { Box, Divider, Flex } from "@chakra-ui/react";
import WindowTitleChanger from "../../components/shared/WindowTitleChanger";
import PartnersSection from "../../sections/Partners";

function IndexPage() {
  const [lang, setLang] = React.useState("");
  useEffect(() => {
    const supportedLanguages = ["tr", "en"];
    const browserLanguage = detectBrowserLanguage(supportedLanguages);
    setLang(browserLanguage);
  }, []);

  return (
    <>
      <>
        <WindowTitleChanger />
      </>

      <Flex as="main" direction={"column"}>
        <Box id={"Cta"}>
          <Cta lang={lang} targetId={"AboutUs"} />
        </Box>
        <Box id={"AboutUs"}>
          <AboutUs lang={lang} targetId={"Partners"} />
        </Box>
        <Box id={"Partners"}>
          <PartnersSection lang={lang} targetId={"OurServices"} />
        </Box>

        <Box id={"OurServices"} mt={3}>
          <OurServices />
        </Box>
      </Flex>
    </>
  );
}

export default IndexPage;
