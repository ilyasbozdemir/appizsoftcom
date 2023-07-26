import { Box, Button, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

function LanguageSwitcher({ lang: defaultLanguage }) {
    const router = useRouter();

    defaultLanguage = defaultLanguage.replace(/^\/|\/$/g, "");
    const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

    const handleLanguageChange = (language) => {
      setCurrentLanguage(language.replace(/^\/|\/$/g, ""));
      //router.push(`/${language}`);
    };

    return (
      <Box  >
        <Stack direction={"row"}>
          <Button
            cursor={"default"}
            color="text.200"
            bg="transparent"
            p={2}
            fontSize="md"
            onClick={() => handleLanguageChange("tr")}
            mr={2}
            variant={"link"}
            textDecoration={'underline'}
          >
            TR
          </Button>
          <Button
            cursor={"default"}
            color="text.200"
            bg="transparent"
            border="none"
            p={2}
            fontSize="md"
            mr={2}
            variant={"unstyled"}
          >
            EN
          </Button>
        </Stack>
      </Box>
    );
}

export default LanguageSwitcher