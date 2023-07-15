import { Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function PartnersSection() {
  return (
    <>
      <Center>
        <Heading fontWeight={"semibold"} color={"#5c5c5c"}>
          İş Ortaklarımız
        </Heading>
      </Center>

      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={3}
      >
       <>
       
       
       </>
      </Flex>
    </>
  );
}

export default PartnersSection;
