import { Flex, Text, Image, Heading, Box } from "@chakra-ui/react";

import React from "react";
import { services } from "../../constants/services";

const Services = ({ img, title, content }) => {
  return (
    <>
      <Flex
        direction={"column"}
        w={{ base: "100%", md: "100%" }}
        gap={5}
        mt={2}
        mx={5}
        userSelect={"none"}
      >
        <Flex justifyContent={"center"} data-aos={"zoom-out"}>
          <Image height={70} width={70} src={img} draggable={false} />
        </Flex>
        <Flex justifyContent={"center"}>
          <Heading
            as={"h2"}
            data-aos="zoom-in"
            textTransform={"uppercase"}
            fontSize={{ base: "15px", md: "16px" }}
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

const ServiceCard = ({ title, body }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="6" mb="8">
      <Heading size="md" mb="2">
        {title}
      </Heading>
      <Text>{body}</Text>
    </Box>
  );
};

function OurServices() {
  return (
    <>
      <>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          p={3}
        >
          {services.map(
            (service, i) =>
              service.isServicesComponentDisplay === true &&(
                <>
                  <>
                    <Services
                      img={service.img}
                      title={service.title}
                      content={service.content}
                    />
                  </>
                </>
              )
          )}
        </Flex>
      </>
    </>
  );
}

export default OurServices;
