import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  VStack,
  useColorModeValue,
  Container,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

const MagicLinkForm = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Stack spacing={4} maxW={{ base: "20rem", sm: "25rem" }} margin="0 auto">
        <Stack>
          <Text>aa</Text>
        </Stack>

        <Box pos="relative">
          <Box
            pos="absolute"
            top="-7px"
            right="-7px"
            bottom="-7px"
            left="-7px"
            rounded="lg"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            transform="rotate(-2deg)"
          ></Box>
          <VStack
            as="form"
            pos="relative"
            spacing={8}
            p={6}
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
          >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Your email" rounded="md" />
            </FormControl>

            <Button
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
              rounded="md"
              w="100%"
            >
              Başvuruyu onayla
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
};

function PositionPage({ career }) {
  return (
    <>
      <MagicLinkForm />
    </>
  );
}

export async function getStaticPaths() {
  const paths = careers.map((career) => {
    return {
      params: {
        position: career.pageLoc,
      },
    };
  });

  paths.push({
    params: {
      position: "join-us",
    },
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { position } = params;

  const allPositions = [
    ...careers,
    { title: "Bize Katılın", pageLoc: "join-us" },
  ];

  const career = allPositions.find((career) => career.pageLoc === position);

  return {
    props: {
      career,
    },
  };
}

export default PositionPage;
