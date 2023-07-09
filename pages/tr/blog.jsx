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
      <Flex h={"350px"} bg="primary" w="100%" color="white" justify={"center"}>
        <Center>
          <Flex direction={"column"}>
            <Text fontSize={65}>Blog</Text>
            <Center>
              <PagesBreadcrumb currentPage={"Blog"} />
            </Center>
          </Flex>
        </Center>
      </Flex>
    </>
  );
};

const BlogPageContent = () => {
  return (
    <>
      <></>
    </>
  );
};

export default BlogPage;
