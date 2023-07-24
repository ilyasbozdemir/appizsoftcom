import React, { useEffect, useState } from "react";
import { detectBrowserLanguage } from "../../lib/detectBrowserLanguage";
import { Box, Flex, Heading } from "@chakra-ui/react";
import WindowTitleChanger from "../../components/shared/WindowTitleChanger";
import dynamic from "next/dynamic";

import Cta from "../../sections/Cta";

const LazyCta = dynamic(() => import("../../sections/Cta"), {
  //loading: () => <p>Loading...</p>,
});

const LazyOurServices = dynamic(() => import("../../sections/OurServices"));
const LazyOurReferences = dynamic(() => import("../../sections/OurReferences"));

const LazyAboutUs = dynamic(() => import("../../sections/AboutUs"));

const LazyOurTechnologies = dynamic(() =>
  import("../../sections/OurTechnologies")
);
const LazyTestimonials = dynamic(() => import("../../sections/Testimonials"));
const LazyWhyChooseUs = dynamic(() => import("../../sections/WhyChooseUs"));
const LazyOurWorkProcess = dynamic(() =>
  import("../../sections/OurWorkProcess")
);
const LazyBlog = dynamic(() => import("../../sections/Blog"));
const LazyPartners = dynamic(() => import("../../sections/Partners"));
const LazyTrustedByDev = dynamic(() => import("../../sections/TrustedByDev"));

const LazySSS = dynamic(() => import("../../sections/SSS"));
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

  const RenderLazyComponent = (id, lang = `tr`, targetId) => {
    switch (id) {
      case "Cta":
        return <LazyCta lang={lang} targetId={targetId} />;
      case "OurServices":
        return <LazyOurServices targetId={targetId} />;
      case "AboutUs":
        return <LazyAboutUs lang={lang} targetId={targetId} />;
      case "OurTechnologies":
        return <LazyOurTechnologies lang={lang} targetId={targetId} />;
      case "OurWorkProcess":
        return <LazyOurWorkProcess lang={lang} targetId={targetId} />;
      case "LazyWhyChooseUs":
        return <LazyWhyChooseUs lang={lang} targetId={targetId} />;
      case "Testimonials":
        return <LazyTestimonials lang={lang} targetId={targetId} />;
      case "Partners":
        return <LazyPartners lang={lang} targetId={targetId} />;
      case "Blog":
        return <LazyBlog lang={lang} targetId={targetId} />;
      default:
        return null;
    }
  };

  const priorityOrder = [
    { id: "Cta", targetId: "OurServices" },
    { id: "OurServices", targetId: "AboutUs" },
    { id: "AboutUs", targetId: "OurTechnologies" },
    { id: "OurTechnologies", targetId: "OurWorkProcess" },
    { id: "OurWorkProcess", targetId: "WhyChooseUs" },
    { id: "WhyChooseUs", targetId: "Testimonials" },
    { id: "Testimonials", targetId: "Partners" },
    { id: "Partners", targetId: "Blog" },
    { id: "Blog", targetId: "" },
  ];

  return (
    <>


    
      <WindowTitleChanger />
      <Flex direction={"column"} gap={5}>
        <Box id={"Cta"} as="section">
          <Cta lang={lang} targetId={"OurServices"} />
        </Box>
        <Box id={"OurServices"} as="section">
          {isMounted && <LazyOurServices targetId={"Technologies"} />}
        </Box>

        <Box id={"OurReferences"} as="section">
          {isMounted && (
            <LazyOurReferences lang={lang} targetId={"Testimonials"} />
          )}
        </Box>

        <Box id={"WhyChooseUs"} as="section">
          {isMounted && (
            <LazyWhyChooseUs lang={lang} targetId={"OurWorkProcess"} />
          )}
        </Box>
        <Box id={"Technologies"} as="section">
          {isMounted && (
            <LazyTrustedByDev lang={lang} targetId={"WhyChooseUs"} />
          )}
        </Box>
        <Box id={"OurWorkProcess"} as="section">
          {isMounted && (
            <LazyOurWorkProcess lang={lang} targetId={"OurReferences"} />
          )}
        </Box>
        <Box id={"WhyChooseUs"} as="section">
          {isMounted && (
            <LazyOurTechnologies lang={lang} targetId={"TrustedByDev"} />
          )}
        </Box>

        <Box id={"Testimonials"} as="section">
          {isMounted && <LazyTestimonials lang={lang} targetId={"Partners"} />}
        </Box>
        <Box id={"Partners"} as="section">
          {isMounted && <LazyPartners lang={lang} targetId={"Blog"} />}
        </Box>

        <Box id={"Blog"} as="section">
          {isMounted && <LazyBlog lang={lang} targetId={"SSS"} />}
        </Box>

        <Box id={"SSS"} as="section">
          {isMounted && <LazySSS lang={lang} />}
        </Box>
      </Flex>
    </>
  );
}

export default IndexPage;
