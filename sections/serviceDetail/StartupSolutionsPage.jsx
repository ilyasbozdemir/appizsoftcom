import React from "react";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link"; // Örnek bir router kütüphanesi

const StartupCTA = () => {
  return (
    <Box p={8}>
      {/* Diğer bölümler */}
      <Box mt={16}>
        <Heading as="h2" size="xl" mb={6}>
          Start-Up Çözümleri
        </Heading>
        <Text fontSize="lg" mb={4}>
          İnovatif start-up projeleriniz için özel olarak tasarlanmış çözüm
          paketlerimizi keşfedin.
        </Text>
        <ChakraLink as={Link} href="/startup-solutions" passHref>
          <Button colorScheme="teal">Keşfedin</Button>
        </ChakraLink>
      </Box>
      {/* Çözümler */}
      <Box mt={16}>
        <Heading as="h2" size="xl" mb={6}>
          Start-Up Çözümlerimiz
        </Heading>
        <Flex direction="column" maxW="800px">
          {/* Çözüm paketlerinizi burada listeleyebilirsiniz */}
          {/* Örneğin: */}
          <Box mb={4}>
            <Heading as="h3" size="lg" mb={2}>
              Temel Paket
            </Heading>
            <Text>
              İdeal bir başlangıç için temel özellikler ve destek seçenekleri.
            </Text>
          </Box>
          <Box mb={4}>
            <Heading as="h3" size="lg" mb={2}>
              İleri Paket
            </Heading>
            <Text>
              İşinizi büyütmek ve özelleştirmek için daha fazla özellik.
            </Text>
          </Box>
          {/* Diğer çözüm paketleri */}
        </Flex>
      </Box>
    </Box>
  );
};

function StartupSolutions() {
  return (
    <div>
      <StartupCTA />
    </div>
  );
}

export default StartupSolutions;
