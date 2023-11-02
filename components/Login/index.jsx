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
import Logo from "./Logo";
import { PasswordField } from "./PasswordField";

import React, { useState } from "react";
import { useRouter } from "next/router";

import { loginUser } from "../../services/authService";

function LoginPage() {
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const SıgnUpHandler = () => {};

  const SıgnInHandler = () => {
    const loginData = {
      usernameOrEmail: email,
      password: password
    };
    loginUser(loginData);
  };

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
              Appizsoft Yazılım Giriş Paneli
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
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEMail(e.target.value);
                    }}
                  />
                </FormControl>
                <PasswordField value={password} setValue={setPassword} />
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked colorScheme="teal">
                  Beni Hatırla
                </Checkbox>
                <Button variant="text" colorScheme="teal" size="sm">
                  Şifremi Unuttum
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button
                  bg="primary.100"
                  _hover={{ bg: "primaryD.100" }}
                  color="white"
                  onClick={SıgnInHandler}
                >
                  Giriş Yap
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default LoginPage;
