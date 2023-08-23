import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaUserAlt } from "react-icons/fa";
import { teamMembers } from "../../constants/teamMembers";
import Link from "next/link";
import Head from "next/head";
import { site } from "../../constants/site";
const TeamMember = ({ name, role, photoUrl, socialMedia }) => {
  return (
    <Flex
      direction={"column"}
      borderWidth="1px"
      borderRadius="xl"
      align={"center"}
      w={250}
      p={2}
      _hover={{
        boxShadow: "xl",
      }}
      h={250}
    >
      <Image src={photoUrl} alt={`${name}'s photo`} width={150} height={100} />

      <Box p="6">
        <Text fontWeight="semibold" fontSize="lg" mb="2">
          {name}
        </Text>
        <Text color="gray.500">{role}</Text>
      </Box>
    </Flex>
  );
};
function TeamPage() {
  const publisher = `AppizSoft`;
  const title = `Ekip • AppizSoft`;
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

        <link
          rel="alternate"
          hreflang="tr"
          href={`${site.baseUrl}/team` }
        />
        <link
          rel="alternate"
          hreflang="en"
          href={`${site.baseUrl}/en/team`}
        />
        <link rel="canonical" href={"https://appizsoft.com/team"} />

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
    <Center p={5}>
      <Flex alignItems="center" justifyContent="center" m={4} >
        <Container maxW="6xl">
          <VStack spacing={8} align="center">
            <Heading as="h1" size="xl">
              Ekip Üyeleri
            </Heading>
            <Flex gap={4} flexWrap="wrap">
              {teamMembers.map((member, index) => (
                <Link
                  key={index}
                  href={`/team/[slug]`}
                  as={"/team/" + member.slug}
                >
                  <TeamMember {...member} />
                </Link>
              ))}
            </Flex>
          </VStack>
        </Container>
      </Flex>
    </Center>
    </>
  );
}

export default TeamPage;
