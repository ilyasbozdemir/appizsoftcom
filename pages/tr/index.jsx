import React from "react";
import MetaHead from "../../components/shared/MetaHead";
import Cta from "../../components/Cta";
import OurServices from "../../components/OurServices";
import OurTechnologies from "../../components/OurTechnologies";

import { Box, Flex } from "@chakra-ui/react";

import { useEffect } from "react";
import { useRouter } from "next/router";
function IndexPage() {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = React.useState(router.asPath);
  const [site, setSite] = React.useState({
    author: ``,
    title: `Appizsoft • Özel Yazılım & Dijital Pazarlama & `,
    url: currentUrl,
    image: "",
    imageAlt: "site-logo-png",
    description: ``,
    name: ``,
    keywords: "",
  });
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
        <Cta />
        <Box>
          <OurServices />
        </Box>
        <Box>
          <OurTechnologies />
        </Box>
        <></>
      </Flex>
    </>
  );
}

export default IndexPage;
