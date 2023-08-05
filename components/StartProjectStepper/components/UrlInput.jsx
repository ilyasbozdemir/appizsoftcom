import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import React from "react";

function UrlInput() {
  const [url, setUrl] = React.useState("");
  const isError = url !== "";

  return (
    <>
      <FormControl w={{ base: "full", md: "450px" }} isInvalid={isError}>
        <FormLabel>Mevcut web sitenizin adresi nedir?</FormLabel>
        <InputGroup size="sm">
          <InputLeftAddon children="https://" />
          <Input
            placeholder="example: appizsoft.com"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </InputGroup>
        <FormErrorMessage>{"urlErrorMessage"}</FormErrorMessage>
      </FormControl>
    </>
  );
}

export default UrlInput;
