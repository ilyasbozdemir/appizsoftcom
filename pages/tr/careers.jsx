import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import Head from "next/head";

function CareersPage() {
  return (
    <>
      <Head></Head>

      <main>
        <CareersCTA />
        <CareersContent />
      </main>
    </>
  );
}

const CareersCTA = () => {
  return (
    <>
      
    </>
  );
};

const CareersContent = () => {
  return (
    <>
      <Box></Box>
    </>
  );
};

export default CareersPage;
