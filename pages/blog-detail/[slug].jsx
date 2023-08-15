import React from "react";
import { blogData } from "../../constants/blogData";
import { Center,Container } from "@chakra-ui/react";

function BlogDetailPage() {
  return (
    <>
      <Center my={10}>
        <Container maxW="container.lg" bg="blue.600" color="white">
        xxx
        </Container>
      </Center>
    </>
  );
}

export async function getStaticPaths() {
  const paths = blogData.map((data) => {
    return {
      params: {
        slug: data.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const service = blogData.find((service) => service.slug === slug);
  return {
    props: {
      service,
    },
  };
}

export default BlogDetailPage;
