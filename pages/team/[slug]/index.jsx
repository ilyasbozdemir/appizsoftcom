import React from "react";
import { teamMembers } from "../../../constants/teamMembers";
import { Center, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
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
            href={
             `${socialMedia.find((s) => s.platform === "LinkedIn").url}`
            }
            passHref
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Icon as={FaLinkedin} boxSize={10} color={'#0A66C2'} />
           
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};

function TeamDetailPage({ member }) {
  return (
    <Center p={5}>
      <Flex direction={"column"} gap={5} justifyContent={"center"}>
        <TeamMember {...member} />
        {"<Blog Post Component/>"}
      </Flex>
    </Center>
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
