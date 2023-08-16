import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Center,
} from "@chakra-ui/react";

import React from "react";

import { ourWorkProcessFeatures } from "../../constants/ourWorkProcessFeatures";

const OurWorkProcessFeature = () => {
  const Feature = (props) => {
    return (
      <Box>
        <Center>
          <Flex
            alignItems="center"
            justifyContent="center"
            w={12}
            h={12}
            mb={4}
            rounded="full"
            color={`${props.color}.600`}
            bg={`${props.color}.100`}
            _dark={{
              color: `${props.color}.200`,
              bg: `${props.color}.800`,
            }}
          >
            <Icon
              as={props.icon}
              boxSize={9}
              viewBox="0 0 25 20"
              fill="currentColor"
              aria-hidden="true"
            />
          </Flex>
        </Center>

        <Center>
          <Box as="h3" mb={2} fontWeight="semibold" lineHeight="shorter">
            {props.title}
          </Box>
        </Center>

        <Box
          as="p"
          fontSize="sm"
          _dark={{
            color: "gray.400",
          }}
        >
          {props.children}
        </Box>
      </Box>
    );
  };

  return (
    <Flex
      p={{ md: 5, lg: 10 }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box px={8} py={20} mx="auto" borderRadius={"15px"}>
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <Center>
            <Flex direction={"column"} justifyContent={"center"} gap={3}>
              <Heading as="h2" fontSize={24} pos="relative">
                İş Sürecimiz
              </Heading>
            </Flex>
          </Center>

          <Box
            as="p"
            mt={4}
            maxW="3xl"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            mx={{
              lg: "auto",
            }}
            color="gray.800"
            _dark={{
              color: "gray.200",
            }}
          >
            İş sürecimiz, projelerimizi başarılı bir şekilde tamamlamak için
            sekiz adımdan oluşmaktadır.
          </Box>
        </Box>

        <SimpleGrid
          columns={{
            base: 1,
            sm: 1,
            md: 2,
            lg: 4,
          }}
          spacingX={{
            base: 16,
            lg: 24,
          }}
          spacingY={20}
          mt={6}
        >
          {ourWorkProcessFeatures.map((child) => (
            <div key={child.icon}>
              <Feature
                color={child.color}
                title={child.title}
                icon={child.icon}
              >
                {child.content}
              </Feature>
            </div>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

function OurWorkProcess() {
  return (
    <>
      <>
        <OurWorkProcessFeature />
      </>
    </>
  );
}

export default OurWorkProcess;
