import React from "react";
import { technologies } from "../../constants/technologies";

import MetaHead from "../../configuration//MetaHead";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";

const OurTechnologiesCTA = () => {
  return <></>;
};
const OurTechnologiesContent = () => {
  return (
    <>
      {technologies.map((tech) => (
        <>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 10 }}
            mx={10}
            px={10}
          >
            <Flex direction={"row"}>
              <Box
                width="50%"
                bg={"#f3f4f6"}
                borderRadius={"4px"}
                p={".5rem"}
                gap={"1rem"}
                alignItems={"center"}
                boxSize={"50px"}
              >
                <Image
                  id={tech.id}
                  src={tech.imageUrl}
                  alt={tech.id}
                  width={150}
                  height={150}
                  mr={4}
                />
              </Box>
              <Box mx={3}>
                <Text
                  mb={0}
                  fontWeight={500}
                  fontSize={"14px"}
                  lineHeight={"20px"}
                  isTruncated
                >
                  {tech.title}
                </Text>
                <Text
                  mb={0}
                  fontWeight={400}
                  fontSize={"14px"}
                  lineHeight={"20px"}
                  isTruncated
                >
                  {tech.category}
                </Text>
              </Box>
            </Flex>
            <Flex>{tech.description}</Flex>
            
            <Divider/>
          </Flex>
        </>
      ))}
    </>
  );
};

function OurTechnologiesPage() {

  return (
    <>
      <Head>

      </Head>

      <OurTechnologiesCTA />
      <OurTechnologiesContent />
    </>
  );
}

export default OurTechnologiesPage;
