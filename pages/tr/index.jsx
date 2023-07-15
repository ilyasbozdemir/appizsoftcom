import React, { useEffect, useState } from "react";
import Cta from "../../sections/Cta";
import OurServices from "../../sections/OurServices";
import AboutUs from "../../sections/AboutUs";
import OurTechnologies from "../../sections/OurTechnologies";

import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import { Box, Divider, Flex } from "@chakra-ui/react";
import WindowTitleChanger from "../../components/shared/WindowTitleChanger";
import PartnersSection from "../../sections/Partners";
import TestimonialsSection from "../../sections/Testimonials";

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

      <Flex as="main" direction={"column"} gap={5}>
        <Box id={"Cta"}>
          <Cta lang={lang} targetId={"AboutUs"} />
        </Box>
        <Box id={"AboutUs"}>
          <AboutUs lang={lang} targetId={"OurTechnologies"} />
        </Box>
        <Box id={"OurTechnologies"}>
          <OurTechnologies lang={lang} targetId={"Testimonials"} />
        </Box>

    
        <Box id={"Testimonials"}>
          <TestimonialsSection lang={lang} targetId={"OurServices"} />
        </Box>

        <Box id={"OurServices"} mt={3}>
          <OurServices />
        </Box>
      </Flex>
    </>
  );
}

export default IndexPage;
