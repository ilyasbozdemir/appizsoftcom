import React, { useEffect, useState } from "react";
import MetaHead from "../../configuration/MetaHead";
import Cta from "../../sections/Cta";
import OurServices from "../../sections/OurServices";
import OurTechnologies from "../../sections/OurTechnologies";

import { useRouter } from "next/router";
import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import { Box, Divider, Flex } from "@chakra-ui/react";
import AboutUs from "../../sections/AboutUs";
import WindowTitleChanger from "../../components/shared/WindowTitleChanger";

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
        <Box>
          <Cta lang={lang} targetId={"OurServices"} />
        </Box>

        {/*

     <Box id={"AboutUs"}>
          <AboutUs lang={lang} targetId={"OurServices"}  />
        </Box>
  
  */}

        <Box id={"OurServices"} mt={3}>
          <OurServices />
        </Box>
      </Flex>
    </>
  );
}

export default IndexPage;
