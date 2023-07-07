import { Icon } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
function SearchButton() {
  return (
    <>
      <Icon as={FiSearch} cursor={"pointer"} fontSize={"lg"} />
    </>
  );
}

export default SearchButton;
