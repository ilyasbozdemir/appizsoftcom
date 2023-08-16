import {
  chakra,
  VStack,
  HStack,
  Text,
  Container,
  Box,
  Icon,
  Button,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { BiCheck } from "react-icons/bi";
import { BsFillCloudCheckFill } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import Link from "next/link";

const plansList = [
  {
    title: "Ekonomi",
    price: 49,
    icon: BsFillCloudCheckFill,
    features: [
      "Deploy 5 apps",
      "2 Servers",
      "Push to deploy",
      "Collaborate with your team",
    ],
  },
  {
    title: "Premium",
    price: 79,
    icon: AiOutlineCloudServer,
    features: [
      "Deploy 10 apps",
      "4 Servers",
      "Push to deploy",
      "Collaborate with your team",
      "Setup load balanced clusters",
    ],
  },
  {
    title: "Appizsoft",
    price: 99,
    icon: FaServer,
    features: [
      "Deploy unlimited apps",
      "unlimited Servers",
      "Push to deploy",
      "Collaborate with your team",
      "Setup load balanced clusters",
    ],
  },
];

const ThreeTiersPricing = () => {
  return (
    <Container maxW="7xl" py="8" px="0">
      <chakra.h2
        fontSize={{ base: "x-large", md: "xx-large" }}
        fontWeight="bold"
        textAlign="center"
        mb={5}
      >
        İşinizi çevrimiçi dünyada büyütün: Standart, Kurumsal ve E-ticaret
        Paketlerimizle hedefinize ulaşın
      </chakra.h2>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={1} mt={4}>
        {plansList.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const PricingCard = ({ title, price, icon, features }) => {
  return (
    <Box
      minW={{ base: "xs", sm: "xs", lg: "sm" }}
      rounded="md"
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="md"
      marginInline="auto"
      my={3}
      p={6}
    >
      <Box textAlign="center">
        <Icon as={icon} h={10} w={10} color="teal.500" />
        <chakra.h2 fontSize="2xl" fontWeight="bold">
          {title}
        </chakra.h2>
      </Box>
      <VStack spacing={2} alignItems="flex-start" my={6}>
        {features.map((feature, index) => (
          <HStack key={index} spacing={3}>
            <Icon as={BiCheck} h={4} w={4} color="green.500" />
            <Text fontSize="sm" color="gray.500">
              {feature}
            </Text>
          </HStack>
        ))}
      </VStack>
      <Link href="/start-project" passHref>
        <Button
          colorScheme="teal"
          variant="solid"
          size="md"
          rounded="md"
          w="100%"
        >
          Hemen Teklif Al
        </Button>
      </Link>
    </Box>
  );
};

export default ThreeTiersPricing;
