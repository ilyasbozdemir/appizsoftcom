import React from "react";

import { Box, HStack, Text } from "@chakra-ui/react";

import Link from "next/link";

function Logo() {
  return (
    <>
      <>
        <Box>
          <Link href="/" legacyBehavior passHref>
            <HStack as="a" spacing={0}>
              <Text
                bgGradient="linear(to-r, #005f65,#61DAFB,#007997)"
                bgClip="text"
                fontSize="3xl"
                fontWeight="extrabold"
                userSelect={"none"}
              >
                enterprisesoftware
              </Text>
              <Text
                fontSize="3xl"
                fontWeight='hairline'

              >
                .com
              </Text>
            </HStack>
          </Link>
        </Box>
      </>
    </>
  );
}

export default Logo;