import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

import React from "react";
import Router from "next/router";

function App() {
  return (
    <>
      <Container
        maxW="lg"
        py={{
          base: "12",
          md: "24",
        }}
        px={{
          base: "0",
          sm: "8",
        }}
      >
        <Stack spacing="8">
          <Center>
            <Logo />
          </Center>

          <Stack textAlign="center">
            <Heading
              size={{
                base: "xs",
                md: "sm",
              }}
            >
              Appizsoft Admin Interface
            </Heading>
          </Stack>
          <Box
            py={{
              base: "0",
              sm: "8",
            }}
            px={{
              base: "4",
              sm: "10",
            }}
            bg={{
              base: "transparent",
              sm: "bg.surface",
            }}
            boxShadow={{
              base: "none",
              sm: "md",
            }}
            borderRadius={{
              base: "none",
              sm: "xl",
            }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" />
                </FormControl>
                <PasswordField />
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked colorScheme="teal">
                  Remember me
                </Checkbox>
                <Button variant="text" colorScheme="teal" size="sm">
                  Forgot password?
                </Button>
              </HStack>

              <Stack spacing="6">
                <Button
                  colorScheme="teal"
                  _hover={{
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                  }}
                  onClick={() => {
                    Router.push("/admin");
                  }}
                >
                  Sign in
                </Button>
                <HStack>
                  <Divider />
                  <Text fontSize="sm" whiteSpace="nowrap" color={"gray"}>
                    or continue with
                  </Text>
                  <Divider />
                </HStack>
                <OAuthButtonGroup />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default App;
