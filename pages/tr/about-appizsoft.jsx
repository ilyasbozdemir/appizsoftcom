import React from "react";
import { useRouter } from "next/router";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import Head from "next/head";
const AboutUsCTA = () => {
  const router = useRouter();
  return (
    <>
      <Flex h={"250px"} bg="primary.100" w="100%" color="white" justify={"center"}>
        <Center>
          <Flex direction={"column"}>
            <Text as="h1" fontSize={65}>Hakkımızda</Text>
            <Center>
              <PagesBreadcrumb currentPage={"Hakkımızda"} />
            </Center>
          </Flex>
        </Center>
      </Flex>
    </>
  );
};
const AboutUsContent = () => {
  return (
    <>
      <Box >
       
      </Box>
    </>
  );
};

function AboutUsPage() {
  return (
    <>
      <Head></Head>

      <main>
        <AboutUsCTA />
        <AboutUsContent />
      </main>
    </>
  );
}

export default AboutUsPage;
