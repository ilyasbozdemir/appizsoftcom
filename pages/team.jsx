import {
  chakra,
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { teamMembers } from "../constants/teamMembers";
import Link from "next/link";
import Head from "next/head";
import { site } from "../constants/site";
const TeamMember = ({ name, role, photoUrl, socialMedia }) => {
  return (
    <Flex
      direction={"column"}
      borderWidth="1px"
      borderRadius="xl"
      align={"center"}
      w={{ md: 250 }}
      p={2}
      _hover={{
        boxShadow: "xl",
      }}
    >
      <Image
        src={photoUrl}
        alt={`${name}'s photo`}
        width={150}
        height={100}
        style={{ borderRadius: "50%",border:'3px solid #54bec3' }}
      />

      <Box p="6">
        <Text fontWeight="semibold" fontSize="lg" mb="2">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {role}
        </Text>
      </Box>
    </Flex>
  );
};

function TeamPage() {
  const publisher = `Fake Company Name`;
  const title = `Ekip • Fake Company Name`;
  const desc = `Ekip üyelerimizle projelerinizi hayata geçirin. Teknoloji ve tasarımın gücüyle çözümler sunuyoruz`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/team`}
        />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/team`} />
        <link rel="alternate" hreflang="en" href={`${site.baseUrl}/en/team`} />
        <link rel="canonical" href={"https://domain.com/team"} />

        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${site.baseUrl}/team`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
      </Head>
      <>
        <Flex alignItems="center" justifyContent="center">
          <Container maxW="6xl" m={4}>
            <VStack spacing={8} align="center">
              <chakra.h3
                fontSize={{ base: 19, md: 27 }}
                fontWeight="bold"
                mb={5}
                textAlign="center"
                color={useColorModeValue("blackAlpha.800", "blackAlpha.700")}
                fontFamily={"roboto"}
              >
                Ekip Üyeleri
              </chakra.h3>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10}>
                {teamMembers.map((member, index) => (
                  <Link key={index} href={`/u/[slug]`} as={"/u/" + member.slug}>
                    <TeamMember {...member} />
                  </Link>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Flex>
      </>
    </>
  );
}

export default TeamPage;
