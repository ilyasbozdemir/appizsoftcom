import React, { useEffect } from "react";
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
  const [currentUrl, setCurrentUrl] = React.useState(router.asPath);
  const [site, setSite] = React.useState({
    author: ``,
    title: `Appizsoft • Özel Yazılım & Dijital Pazarlama`,
    url: currentUrl,
    image: "",
    imageAlt: "site-logo-png",
    description: ``,
    name: ``,
    keywords: "",
  });

  const [lang, setLang] = React.useState("");
  useEffect(() => {
    // Tarayıcı dilini al
    const browserLanguage = detectBrowserLanguage(["en", "tr"]);

    if (browserLanguage.startsWith("tr")) {
      setLang(`/tr`);
    }
    if (browserLanguage.startsWith("en")) {
      setLang(`/en`);
    }
  }, []);

  return (
    <>
      <>
        <MetaHead
          pageTitle={site.title}
          description={site.description}
          keywords={site.keywords}
        />
      </>
      <Flex as="main" direction={"column"} gap={5}>
        <Cta lang={lang} />
        <Box>
          <OurServices />
        </Box>
        <Box>
          <OurTechnologies />
        </Box>
        <Box>
          <OurReferences />
        </Box>
      </Flex>
    </>
  );
}

export default IndexPage;
