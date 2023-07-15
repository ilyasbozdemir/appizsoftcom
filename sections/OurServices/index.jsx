import { Flex, Text, Image, Heading, Box, Center } from "@chakra-ui/react";

import React from "react";
import { services } from "../../constants/services";
import Link from "next/link";
import { useRouter } from "next/router";

const Services = (props) => {
  const { id, img, href, title, content } = props;
  const router = useRouter();
  return (
    <>
      <Flex
        direction={"column"}
        w={{ base: "100%", md: "100%" }}
        gap={5}
        mt={2}
        mx={5}
        userSelect={"none"}
        onClick={() => {
          router.push("tr/service/" + href);
        }}
        cursor={"pointer"}
        p={5}
      >
        <Flex justifyContent={"center"} data-aos={"zoom-out"}>
          <Image id={id} height={70} width={70} src={img} draggable={false} />
        </Flex>
        <Flex justifyContent={"center"}>
          <Heading
            as={"h2"}
            data-aos="zoom-in"
            textTransform={"uppercase"}
            fontSize={{ base: "15px", md: "16px" }}
            color={"#616161"}
          >
            {title}
          </Heading>
        </Flex>

        <Text
          _light={{ color: "gray.600" }}
          _dark={{ color: "#fff" }}
          data-aos="zoom-in-up"
          fontSize={{ base: "15px", md: "16px" }}
        >
          {content}
        </Text>
      </Flex>
    </>
  );
};

function OurServices() {
  return (
    <>
      <Center>
        <Heading fontWeight={"semibold"} color={"#5c5c5c"}>
          Hizmetler
        </Heading>
      </Center>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={3}
      >
        {services.map(
          (service, i) =>
            service.isServicesComponentDisplay === true && (
              <React.Fragment key={service.id}>
                <Services {...service} />
              </React.Fragment>
            )
        )}
      </Flex>
    </>
  );
}

export default OurServices;
