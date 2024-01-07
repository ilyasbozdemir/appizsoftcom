import React from "react";
import { teamMembers } from "../../../constants/teamMembers";
import {
  Badge,
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Progress,
  Stack,
  Tag,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { site } from "../../../constants/site";
const TeamMember = ({ name, role, photoUrl, socialMedia }) => {
  return (
    <Flex
      direction={"column"}
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      align={"center"}
      w={300}
      p={2}
    >
      <Image
        src={photoUrl}
        alt={`${name}'s photo`}
        width={150}
        height={100}
        style={{ borderRadius: "50%" }}
      />

      <Flex direction={"column"} align={"center"} p="6">
        <Text fontWeight="semibold" fontSize="lg" mb="2">
          {name}
        </Text>
        <Text color="gray.500" fontSize="sm">{role}</Text>
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

const Card = ({ title, role, skills, period, logo, alt }) => {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      shadow="md"
      backgroundColor={useColorModeValue("gray.100", "gray.700")}
      position="relative"
      rounded="md"
      width="100%"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Box
            width={50}
            height={50}
            objectFit={"cover"}
            rounded={"full"}
            pos={"relative"}
            bg={"gray.300"}
          >
            <Image style={{ objectFit: "cover" }} src={logo} alt={alt} fill />
          </Box>

          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl">{title}</Heading>
            <Heading fontSize="sm">
              {role}
              <Text display={["block", "none", "none", "none"]} fontSize={14}>
                {period}
              </Text>
            </Heading>
          </Stack>
        </Flex>
        <Stack display={["none", "flex", "flex", "flex"]}>
          <Text fontSize={14}>{period}</Text>
        </Stack>
      </Flex>
      <Flex gap={2} mt={3} flexWrap={"wrap"} alignItems="center">
        {skills.split(",").map((skill) => (
          <Tag
            size="sm"
            padding="0 3px"
            key={skill}
            fontWeight="bold"
            backgroundColor={useColorModeValue("teal.200", "teal.500")}
            color={useColorModeValue("white.500", "blackAlpha.800")}
          >
            {skill}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};

const baseImagePath = "https://appizsoft-static-api.vercel.app";

function TeamDetailPage({ member }) {
  const publisher = `AppizSoft`;
  const title = `${member.name} • AppizSoft`;
  const desc = `${member.name}, ekip üyemizdir ve profesyonel yetenekleriyle ekibimize katkı sağlamaktadır.`;

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

      <Center>
        <Link href={"/team"}>
          <HStack py={4} margin="0 auto" _hover={{
            color: useColorModeValue("primary.100", "primary.200"),
          }}>
            <Icon as={HiOutlineArrowNarrowLeft} boxSize={35} />



            <Text
              fontWeight={"semibold"}

            >
              Ekipe Geri Dön
            </Text>

          </HStack>
        </Link>
      </Center>

      <Center p={5}>
        <Flex direction={"column"} gap={5} justifyContent={"center"}>
          <Center>
            <TeamMember {...member} />
          </Center>

          <Text fontWeight={"semibold"} fontSize={22}>
            Kariyer
          </Text>
          <VStack spacing={2}>
            {member.companies.map((company, index) => (
              <Card
                key={index}
                title={company.title}
                role={company.role}
                skills={company.skills}
                period={company.period}
                logo={company.logo}
              />
            ))}
          </VStack>
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
