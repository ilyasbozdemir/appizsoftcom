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
        rounded={"full"}
        colorScheme={colorMode === "light" ? "black" : "white"}
        _hover={{
          boxShadow: "0 4px 8px rgba(110, 190, 194, 0.6)",
        }}
        fontFamily={"Nunito Sans"}
        p={7}
        fontSize={{ base: 14, md: 16, lg: 18 }}
        variant={"outline"}
        onClick={() => {
          router.push(lang + "/get-a-quote");
        }}
      >
        Bizimle bir proje başlatın 🚀🚀🚀
      </Button>
    </>
  );
}

export default StartProjectButton;
