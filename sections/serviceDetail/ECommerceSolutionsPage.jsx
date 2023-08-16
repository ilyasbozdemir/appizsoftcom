import {Button, chakra, Container, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import SelectedTechnologiesComponent from '../../components/SelectedTechnologiesComponent'
import { technologies } from '../../constants/technologies';
import Link from 'next/link';


const HeroSection = () => {
  return (
    <>
      <Stack direction="column" spacing={6} alignItems="center">
        <chakra.h1
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          maxW="600px"
        >
          Kişisel, kurumsal veya e-ticaret bir{" "}
          <chakra.span
            bgGradient="linear(to-br, #228be6, #15aabf)"
            bgClip="text"
          >
            {" "}
            web sitesine{" "}
          </chakra.span>{" "}
          mi ihtiyacınız var
        </chakra.h1>
        <Text maxW="550px" fontSize="xl" textAlign="center" color="gray.500">
          Bireysel, kurumsal veya e-ticaret projeleriniz için özel tasarım
          çözümleri sunuyoruz. Kullanıcı dostu arayüzler ve etkileyici görsel
          tasarımlar oluşturarak markanızı öne çıkarıyoruz.
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          w={{ base: "100%", sm: "auto" }}
          spacing={5}
        >
          <Link href="/start-project?source=web-design-development" passHref>
            <Button
              colorScheme="blue"
              variant="outline"
              rounded="md"
              size="lg"
              height="3.5rem"
              fontSize="1.2rem"
            >
              Hemen Başlayalım!
            </Button>
          </Link>
          <Link href="/contact?source=web-design-development" passHref>
            <Button
              colorScheme="gray"
              variant="outline"
              rounded="md"
              size="lg"
              height="3.5rem"
              fontSize="1.2rem"
            >
              Detaylı Bilgi Al
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};


function ECommerceSolutionsPage() {
 

  return (
    <Container p={{ base: 8, sm: 14 }} maxW={"8xl"}>
      <Flex direction={"column"} gap={15}>
        <HeroSection />



       
      </Flex>
    </Container>
  )
}

export default ECommerceSolutionsPage