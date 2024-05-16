import Head from "next/head";
import React from "react";
import { site } from "../constants/site";
import { Center, Container, Flex, Heading, Text } from "@chakra-ui/react";

function CommercialInformationPage() {
  const publisher = `Fake Company Name`;
  const title = `Ticari Bilgiler | Şirket ve Banka Bilgileri • Fake Company Name`;
  const desc = `Müşterilerimizin deneyimleriyle gurur duyuyoruz. Sizler için sunduğumuz hizmetlerimiz hakkındaki referanslarımızı keşfedin.`;

  return (
    <>
      <Head>
        <title>{title}</title>

      </Head>
      <Container maxW="container.md" py="8">
        <Center>
          <Flex direction={"column"} justify={"center"}>
            <Center>
              <Heading as="h1" size="xl" mb="4">
                Ticari Bilgiler
              </Heading>
            </Center>

            <Text>Firma ve banka hesap bilgileri aşağıdaki gibidir.</Text>

            <>
            [Coming Soon :))]
            </>
          </Flex>
        </Center>
      </Container>
    </>
  );
}

export default CommercialInformationPage;
