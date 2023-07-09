import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

const ContactCTA = () => {
  const router = useRouter();
  return (
    <>
      <Flex
        as="section"
        h={"350px"}
        bg="primary"
        w="100%"
        color="white"
        justify={"center"}
      >
        <Center>
          <Flex direction={"column"}>
            <Text fontSize={65} fontWeight={"bold"}>
              İletişim
            </Text>
            <Center>
              <PagesBreadcrumb currentPage={'İletişim'} />
            </Center>
          </Flex>
        </Center>
      </Flex>
      <Flex h={"350px"} bg="#fff" w="100%">
        iletişim formu gelcek:S
      </Flex>
    </>
  );
};

const ContactContent = () => {
  return (
    <>
      <></>
    </>
  );
};

function ContactPage() {
  return (
    <Box bg={"#b3b3b3"}>
      <Head>
        <title>İletişim • Appizsoft</title>
      </Head>

      <ContactCTA />
      <ContactContent />
    </Box>
  );
}

export default ContactPage;
