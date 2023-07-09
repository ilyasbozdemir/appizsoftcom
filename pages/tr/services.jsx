import React from "react";
import Head from "next/head";
import { Center, Flex, Text } from "@chakra-ui/react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

const OurServicesCTA = () => {
  return (
    <>
      <Flex h={"350px"} bg="primary" w="100%" color="white" justify={"center"}>
        <Center>
          <Flex direction={"column"}>
            <Text fontSize={65}>Hizmetler</Text>
            <Center>
              <PagesBreadcrumb currentPage={"Hizmetler"} />
            </Center>
          </Flex>
        </Center>
      </Flex>
    </>
  );
};
const OurServicesContent = () => {
  return <>OurServicesContent</>;
};

function OurServicesPage() {
  return (
    <>
      <Head>
        <title>Hizmetler • Appizsoft</title>
      </Head>

      <main>
        <OurServicesCTA />
        <OurServicesContent />
      </main>
    </>
  );
}

export default OurServicesPage;
