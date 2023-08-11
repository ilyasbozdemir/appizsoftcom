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
import PagesBreadcrumb from "../../../components/shared/PagesBreadcrumb";
import OurServices from "../../../sections/OurServices";

function BlogPage() {
  return (
    <>
      <Head></Head>

      <BlogPageCTA />
      <BlogPageContent />
    </>
  );
}

const BlogPageCTA = () => {
  const router = useRouter();
  return (
    <>
      <Flex mt={4} direction={"column"}>
        {!isMobile && (
          <>
            <Flex
              as="section"
              h={"350px"}
              bgGradient="linear(to-l, #667eea, #54BEC3)"
              w="100%"
              color="white"
              justify={"center"}
            >
              <Center>
                <Flex direction={"column"}>
                  <Text fontSize={65}>Kariyer</Text>
                  <Center>
                    <PagesBreadcrumb currentPage={"Blog"} />
                  </Center>
                </Flex>
              </Center>
            </Flex>
          </>
        )}

        {isMobile && (
          <Flex
            as="section"
            h={180}
            bgGradient="linear(to-l, #667eea, #54BEC3)"
            w="100%"
            color="white"
            justify={"center"}
          >
            <Center>
              <Flex direction={"column"}>
                <Text fontSize={45}>Hizmetler</Text>
                <Center>
                  <PagesBreadcrumb currentPage={"Blog"} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        )}
      </Flex>
    </>
  );
};

const BlogPageContent = () => {
  return <></>;
};

export default BlogPage;
