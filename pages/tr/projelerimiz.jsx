import React from "react";
import MetaHead from "../../configuration//MetaHead";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";

const OurReferencesCTA = () => {
  return <>Projeler</>;
};
const OurReferencesContent = () => {
  return <>Tümü</>;
};

function OurReferencesPage() {
 
  return (
    <>
      <Head>
    
      </Head>

      <Flex direction={"row"} gap={2}>
        <OurReferencesCTA />
        <OurReferencesContent />
      </Flex>
    </>
  );
}

export default OurReferencesPage;
