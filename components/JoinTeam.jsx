import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
function JoinTeam() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const lang = `tr`;
  return (
    <>
      <Button
        onClick={() => {
          router.push(lang + "/careers");
        }}
        w={["full", , "auto"]}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={{ base: 5, lg: 10 }}
        py={{ base: 5, lg: 7 }}
        fontWeight="bold"
        rounded="lg"
        borderRadius={"20px"}
        shadow="md"
        rightIcon={<Icon as={BiChevronRight} w={19} h={19} />}
        variant={"outline"}
        colorScheme="teal"
      >
        Appizsofta Katıl
      </Button>
    </>
  );
}

export default JoinTeam;
