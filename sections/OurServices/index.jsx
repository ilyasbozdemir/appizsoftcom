import {
  Flex,
  Text,
  Heading,
  Box,
  Center,
  SimpleGrid,
  Button,
  Divider,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

import React from "react";
import { services } from "../../constants/services";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const baseImagePath = "https://appizsoft-static-api.vercel.app/";

const ServicesCard = (props) => {
  const { id, img, href, title, content } = props;
  const router = useRouter();

  return (
    <>
      <Card maxW="sm" h={450} role={"group"}>
        <CardBody
          onClick={() => {
            router.push("/tr/service/[id]", `/tr/service/${href}`, {
              shallow: true,
            });
          }}
          cursor="pointer"
        >
          <Flex justifyContent={"center"}>
            <Image
              id={id}
              alt={title}
              height={70}
              width={70}
              src={`${baseImagePath}`+img}
              style={{
                draggable: false,
              }}
              loader={({ src, width, quality }) => {
                return `${baseImagePath}/${src}?w=${width}&q=${quality || 75}`;
              }}
            />
          </Flex>
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>{content}</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Flex justifyContent={"center"} mt={4} justify={"center"} my={2}>
            <Stack>
              <Link
                href="/tr/service/[id]"
                as={`/tr/service/${href}`}
                shallow={true}
                passHref
              >
                <Button
                  variant={"outline"}
                  color="primary.100"
                  rightIcon={<BsArrowRight />}
                  w={"full"}
                  h={"50px"}
                  _groupHover={{
                    boxShadow: `rgba(84, 190, 195, 0.4) 0px 2px 4px, rgba(84, 190, 195, 0.3) 0px 7px 13px -3px, rgba(84, 190, 195, 0.2) 0px -3px 0px inset;`,
                  }}
                >
                  İncele
                </Button>
              </Link>
            </Stack>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

function OurServices({ targetId }) {
  return (
    <Box>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading  as="h2" fontSize={24} pos="relative">
            Hizmetlerimiz
          </Heading>
        </Flex>
      </Center>

      <Flex as={"article"} direction={"column"} gap={5} data-aos="zoom-in-up">
        <Center>
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
            spacing={2}
            justify="center"
          >
            {services.map(
              (service, i) =>
                service.isServicesComponentDisplay === true && (
                  <Box key={service.id} p={5}>
                    <ServicesCard {...service} />
                  </Box>
                )
            )}
          </SimpleGrid>
        </Center>

        <Center>
          <Flex display={{ base: "initial" }}>
            <Link href={"/tr/services"} passHref>
              <Button variant={"outline"}>Tüm Hizmetler</Button>
            </Link>
          </Flex>
        </Center>
      </Flex>
    </Box>
  );
}

export default OurServices;
