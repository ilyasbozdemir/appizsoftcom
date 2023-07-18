import React, { useEffect, useState } from "react";
import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import { Box, Flex, Heading } from "@chakra-ui/react";
import WindowTitleChanger from "../../components/shared/WindowTitleChanger";
import dynamic from "next/dynamic";

const LazyCta = dynamic(() => import("../../sections/Cta"), {
  //loading: () => <p>Loading...</p>,
});

const LazyOurServices = dynamic(() => import("../../sections/OurServices"));
const LazyAboutUs = dynamic(() => import("../../sections/AboutUs"));

const LazyOurTechnologies = dynamic(() =>
  import("../../sections/OurTechnologies")
);
const LazyTestimonialsSection = dynamic(() =>
  import("../../sections/Testimonials")
);
const LazyWhyChooseUs = dynamic(() => import("../../sections/WhyChooseUs"));
//
function IndexPage() {
  const [lang, setLang] = React.useState("");
  useEffect(() => {
    const supportedLanguages = ["tr", "en"];
    const browserLanguage = detectBrowserLanguage(supportedLanguages);
    setLang(browserLanguage);
  }, []);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <WindowTitleChanger />

      <Flex direction={"column"} gap={5}>
        <Box id={"Cta"} as="section">
          {isMounted && (
            <>
              <LazyCta lang={lang} targetId={"OurServices"} />
            </>
          )}
        </Box>

        <Box id={"OurServices"} as="section">
          {isMounted && (
            <>
              <LazyOurServices targetId={"AboutUs"} />
            </>
          )}
        </Box>

        <Box id={"AboutUs"} as="section">
          {isMounted && (
            <>
              <LazyAboutUs lang={lang} targetId={"OurTechnologies"} />
            </>
          )}
        </Box>

        <Box id={"OurTechnologies"} as="section">
          {isMounted && (
            <>
              <LazyOurTechnologies lang={lang} targetId={"Testimonials"} />
            </>
          )}
        </Box>
        <Box id={"LazyWhyChooseUs"} as="section">
          Why Choose Us section
        </Box>
        <Box id={"Testimonials"} as="section">
          Testimonials section
        </Box>
        <Box id={"Blog"} as="section">
          Blog section
        </Box>

     
      </Flex>
    </>
  );
}

export default IndexPage;
