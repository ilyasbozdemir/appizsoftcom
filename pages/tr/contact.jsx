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
