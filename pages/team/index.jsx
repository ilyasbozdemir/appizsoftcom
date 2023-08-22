import {
  Box,
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
      _hover={{
        boxShadow: "xl",
      }}
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
  return (
    <Flex alignItems="center" justifyContent="center" m={4}>
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
  );
}

export default TeamPage;
