import React from "react";
import { teamMembers } from "../../../constants/teamMembers";
import { Box, Center, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";
import { site } from "../../../constants/site";
const TeamMember = ({ name, role, photoUrl, socialMedia }) => {
  return (
    <Flex
      direction={"column"}
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      align={"center"}
      w={250}
      p={2}
    >
      <Image src={photoUrl} alt={`${name}'s photo`} width={150} height={100} />

      <Flex direction={"column"} align={"center"} p="6">
        <Text fontWeight="semibold" fontSize="lg" mb="2">
          {name}
        </Text>
        <Text color="gray.500">{role}</Text>
        <HStack mt="3" spacing="2">
          <Link
            href={`${socialMedia.find((s) => s.platform === "LinkedIn").url}`}
            passHref
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Icon as={FaLinkedin} boxSize={10} color={"#0A66C2"} />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};

const Experience = ({ title, company, duration, description }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4">
      <Text fontWeight="semibold">{title}</Text>
      <Text color="gray.500">{company}</Text>
      <Text color="gray.500">{duration}</Text>
      <Text mt="2">{description}</Text>
    </Box>
  );
};

function TeamDetailPage({ member }) {
  const publisher = `AppizSoft`;
  const title = `${member.name} • AppizSoft`;
  const desc = `Meet ${member.name}, our ${member.role}.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/careers`}
        />

        <link
          rel="alternate"
          hreflang="tr"
          href={`${site.baseUrl}/` + member.slug}
        />
        <link
          rel="alternate"
          hreflang="en"
          href={`${site.baseUrl}/en/` + member.slug}
        />
        <link rel="canonical" href={"https://appizsoft.com/" + member.slug} />

        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${site.baseUrl}`} />
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
        <Flex direction={"column"} gap={5} justifyContent={"center"}>
          <TeamMember {...member} />
          <VStack mt="4" spacing="4" align="start">
            <Experience
              title={member.role}
              company="AppizSoft Yazılılm"
              duration="June 2023 - Present"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor leo vel justo consectetur..."
            />
            {/* Diğer deneyimler buraya eklenebilir */}
          </VStack>
          {"<Blog Post Component/>"}
        </Flex>
      </Center>
    </>
  );
}

export async function getStaticPaths() {
  const paths = teamMembers.map((member) => {
    return {
      params: {
        slug: member.slug,
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
  const member = teamMembers.find((member) => member.slug === slug);

  return {
    props: {
      member: member,
    },
  };
}

export default TeamDetailPage;
