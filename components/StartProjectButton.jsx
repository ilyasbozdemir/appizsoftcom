import { Button, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function StartProjectButton() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const lang = `tr`;
  return (
    <>
      <Button
        onClick={() => {
          router.push(lang + "/get-a-quote");
        }}
        w={["full", , "auto"]}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        px={10}
        py={7}
        border="solid transparent"
        fontWeight="bold"
        rounded="md"
        shadow="md"
        _light={{
          color: "white",
        }}
        bg={"primary.100"}
        _hover={{
          bg: "primary.200",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
        }}
      >
        Şimdi Teklif Al
      </Button>
    </>
  );
}

export default StartProjectButton;
