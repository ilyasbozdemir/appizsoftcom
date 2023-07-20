import React from "react";
import Head from "next/head";

import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";

import {
  Text,
  Flex,
  Image,
  Heading,
  Box,
  Center,
  SimpleGrid,
  Button,
  Divider,
} from "@chakra-ui/react";

import { BsArrowRight } from "react-icons/bs";

import { services } from "../../constants/services";
import { useRouter } from "next/router";
import Link from "next/link";

const OurServicesCTA = () => {
  return <></>;
};

const Services = (props) => {
  const { id, img, href, title, content } = props;
  const router = useRouter();

  return (
    <Flex gap={5} direction={"column"} p={{ base: 3, md: 5, lg: 8 }}>
      <Flex
        direction={"column"}
        gap={5}
        mt={2}
        mx={5}
        userSelect={"none"}
        p={5}
        //bg={useColorModeValue("#F5F5F5", "#fff")}
        boxShadow={"rgba(17, 17, 26, 0.1) 0px 0px 16px;"}
        borderRadius={"10px"}
        cursor="pointer"
        role={"group"}
        _hover={{
          boxShadow: `rgba(84, 190, 195, 0.4) 0px 2px 4px, rgba(84, 190, 195, 0.3) 0px 7px 13px -3px, rgba(84, 190, 195, 0.2) 0px -3px 0px inset;`,
        }}
        onClick={() => {
          router.push("/tr/service/[id]", `/tr/service/${href}`, {
            shallow: true,
          });
        }}
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
    </Flex>
  );
};

const OurServicesContent = () => {
  return (
    <>
    
    </>
  );
};

function OurServicesPage() {
  return (
    <>
      <Head>
        <title>Hizmetler • Appizsoft</title>
      </Head>

      <main>
        <OurServicesCTA />
        <OurServicesContent />
      </main>
    </>
  );
}

export default OurServicesPage;
