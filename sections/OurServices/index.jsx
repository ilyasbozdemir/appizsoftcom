import {
  Flex,
  Text,
  Image,
  Heading,
  Box,
  Center,
  SimpleGrid,
  Button,
  Divider,
} from "@chakra-ui/react";

import { BsArrowRight } from "react-icons/bs";

import React from "react";
import { services } from "../../constants/services";
import { useRouter } from "next/router";
import Link from "next/link";
import ScrollToIdButton from "../../components/ScrollToIdButton ";
const Services = (props) => {
  const { id, img, href, title, content } = props;
  const router = useRouter();

  return (
    <Flex gap={5} mt={2} mx={5} direction={"column"}>
      <Flex
        direction={"column"}
        gap={5}
        mt={2}
        mx={5}
        userSelect={"none"}
        p={5}
        //bg={useColorModeValue("#F5F5F5", "#fff")}
        boxShadow={
          "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;"
        }
        borderRadius={"10px"}
      >
        <Flex justifyContent={"flex-start"} data-aos={"zoom-out"}>
          <Image id={id} height={70} width={70} src={img} draggable={false} />
        </Flex>
        <Flex justifyContent={"center"}>
          <Heading
            as={"h2"}
            data-aos="zoom-in"
            textTransform={"uppercase"}
            fontSize={{ base: "15px", md: "16px" }}
            isTruncated
          >
            {title}
          </Heading>
        </Flex>

        <Text
          data-aos="zoom-in-up"
          fontSize={{ base: "15px", md: "16px" }}
          p={3}
        >
          {content}
        </Text>

        <Flex justifyContent={"center"} mt={4}>
          <Link href={`tr/service/${href}`} passHref>
            <Button
              variant={"outline"}
              color="primary.100"
              rightIcon={<BsArrowRight />}
              w={"full"}
              h={"50px"}
            >
              İncele
            </Button>
          </Link>
        </Flex>
        <Text mt={2} textAlign="center" fontSize="sm">
          Size Özel Çözümlerimizle İşinizi Dijital Dünyada Öne Çıkarıyoruz!
        </Text>
      </Flex>
    </Flex>
  );
};

function OurServices({ targetId }) {
  return (
    <>
      <Flex as={"article"} direction={"column"} gap={5} w="100vw" h="auto">
        <Box mx={3} display="flex" alignItems="center">
          <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
          <Box flex="1" textAlign="center">
            <Heading
              fontFamily={"Montserrat"}
              as="h2"
              fontSize={{ base: "24px", md: "26px", lg: "28px", xl: "32px" }}
            >
              Size Özel Hizmetler
            </Heading>
          </Box>
          <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
        </Box>

        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2, xl: 2, "2xl": 4 }}
          spacing={5}
          justify="center"
        >
          {services.map(
            (service, i) =>
              service.isServicesComponentDisplay === true && (
                <Box key={service.id} p={5}>
                  <Services {...service} />
                </Box>
              )
          )}
        </SimpleGrid>

        <Center>
          <Flex direction={"column"} gap={3}>
            <Link href={"/tr/services"} passHref>
              <Button variant={"outline"} color="primary.100" p={5}>
                Hizmetlerimizi İncele
              </Button>
            </Link>

            <Text>Diğer Hizmetlerimizi İnceleyin</Text>
          </Flex>
        </Center>

        <Box display={{ base: "none", lg: "initial" }}>
          <Center>
            <ScrollToIdButton targetId={targetId} />
          </Center>
        </Box>
      </Flex>
    </>
  );
}

export default OurServices;
