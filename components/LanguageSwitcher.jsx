import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function LanguageSwitcher({ lang: defaultLanguage = "tr" }) {
  const router = useRouter();


  defaultLanguage = defaultLanguage.replace(/^\/|\/$/g, "");
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language.replace(/^\/|\/$/g, ""));
    router.push(`/`);
  };

  const Lang = () => {
    const [lngText, setLngText] = useState("TR");
    const [isTurkish, setIsTurkish] = useState(true);

    useEffect(() => {
      if (isTurkish) {
        setLngText("EN");
      } else {
        setLngText("TR");
      }
    }, [isTurkish]);

    return (
      <>
        <Button
          id="lang-switcher"
          color={useColorModeValue("text.200", "textD.200")}
          bg="transparent"
          p={2}
          fontSize="lg"
          onClick={() => setIsTurkish(!isTurkish)}
          mr={2}
          variant={"link"}
          _hover={{
            textDecoration: "none",
            color: "primary.100",
          }}
          cursor={"pointer"}
        >
          {lngText}
        </Button>
      </>
    );
  };

  return (
    <>
      <Lang />
    </>
  );
}

export default LanguageSwitcher;
