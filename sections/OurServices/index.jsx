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

const Services = (props) => {
  const { id, img, href, title, content } = props;
  const router = useRouter();

  return (
    <Flex
      direction={"column"}
      gap={5}
      mt={2}
      mx={5}
      userSelect={"none"}
      h={600}
      p={5}
      //bg={useColorModeValue("#F5F5F5", "#fff")}
      boxShadow={"rgba(17, 17, 26, 0.1) 0px 0px 16px;"}
      borderRadius={"10px"}
      cursor="pointer"
      role={"group"}
      _hover={{
        boxShadow: `rgba(84, 190, 195, 0.4) 0px 2px 4px, rgba(84, 190, 195, 0.3) 0px 7px 13px -3px, rgba(84, 190, 195, 0.2) 0px -3px 0px inset;`,
      }}
      rounded="md"
      marginInline="auto"
      onClick={() => {
        router.push("/tr/service/[id]", `/tr/service/${href}`, {
          shallow: true,
        });
      }}
    >
      <Flex justifyContent={"flex-start"} data-aos={"zoom-out"}>
        <Image
          id={id}
          alt={title}
          height={70}
          width={70}
          src={img}
          draggable={false}
        />
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
        fontFamily={"'Open Sans', sans-serif, Arial, Helvetica"}
      >
        {content}
      </Text>

      <Flex justifyContent={"center"} mt={4}>
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
      </Flex>
      <Text mt={2} textAlign="center" fontSize="sm">
        Size Özel Çözümlerimizle İşinizi Dijital Dünyada Öne Çıkarıyoruz!
      </Text>
    </Flex>
  );
};

function OurServices({ targetId }) {
  return (
    <>
      <Flex
        id="services-top"
        direction={"row"}
        justifyContent={"space-between"}
        px={{ base: 10, md: 20 }}
      >
        <Flex direction={"column"} justify={"center"} gap={3}>
          <Heading
            as="h2"
            fontSize={24}
            pos="relative"
            _before={{
              content: `""`,
              borderRadius: "50px",
              position: "absolute",
              backgroundColor: "#000",
              width: "4px",
              height: "100%",
              left: "-10px",
            }}
          >
            Hizmetlerimiz
          </Heading>
          <Text>
            Yazılım Hizmetlerimiz, dijital hizmetlerimiz ve e-ticaret
            çözümlerimizle müşterilerimize kapsamlı ve özelleştirilmiş çözümler
            sunuyoruz.
          </Text>
        </Flex>
        <Flex display={{ base: "none", md: "initial" }}>
          <Link href={"/tr/services"} passHref>
            <Button variant={"outline"}>Tüm Hizmetler</Button>
          </Link>
        </Flex>
      </Flex>

      <Flex as={"article"} direction={"column"} gap={5} data-aos="zoom-in-up">
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2, xl: 2, "2xl": 4 }}
          spacing={2}
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
          <Flex display={{ base: "initial", md: "none" }}>
            <Link href={"/tr/services"} passHref>
              <Button variant={"outline"}>Tüm Hizmetler</Button>
            </Link>
          </Flex>
        </Center>
      </Flex>
    </>
  );
}

export default OurServices;
