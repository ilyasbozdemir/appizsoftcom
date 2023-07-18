import { Box, Divider, Heading } from "@chakra-ui/react";
import React from "react";

function OurWorkProcess() {
  return (
    <>
      <Box mx={3} display="flex" alignItems="center">
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
        <Box flex="1" textAlign="center">
          <Heading
            fontFamily={"Montserrat"}
            as="h2"
            fontSize={{ base: "24px", md: "26px", lg: "28px", xl: "32px" }}
          >
           İş Sürecimiz
          </Heading>
        </Box>
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
      </Box>
    </>
  );
}

export default OurWorkProcess;
