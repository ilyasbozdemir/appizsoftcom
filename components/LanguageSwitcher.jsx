import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function LangSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    const savedLocale = localStorage.getItem("selectedLocale");
    if (savedLocale) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "tr" : "en";
    setCurrentLocale(newLocale);
    localStorage.setItem("selectedLocale", newLocale);
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <Button
      id="lang-switcher"
      color={useColorModeValue("text.200", "textD.200")}
      bg="transparent"
      p={2}
      fontSize="lg"
      onClick={toggleLanguage}
      mr={2}
      variant={"link"}
      _hover={{
        textDecoration: "none",
        color: "primary.100",
      }}
      cursor={"pointer"}
    >
      {currentLocale === "en" ? "Türkçe" : "English"}
    </Button>
  );
}

export default LangSwitcher;
