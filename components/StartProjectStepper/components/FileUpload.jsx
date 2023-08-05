import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  useBreakpointValue,
  Button
} from "@chakra-ui/react";
import React, { useState } from "react";

function FileUpload({ selectedFile, setSelectedFile }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
  };
  return (
    <>
      <FormControl>
        <FormLabel>Projenize ait dosya varsa ekleyiniz.</FormLabel>

        <Flex
          direction="column"
          align="center"
          justify="center"
          p="6"
          border={useBreakpointValue({ md: "2px dashed #ccc" })}
          borderRadius="8px"
          cursor="pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <FormLabel display={{ base: "none", md: "initial" }}>
            <Text fontSize="lg" cursor="pointer">
              Projenize ait dosya varsa ekleyiniz veya sürükleyip bırakınız.
            </Text>
          </FormLabel>

          <Input
            type="file"
            display={{ base: "initial", md: "none" }}
            onChange={handleFileChange}
          />
        </Flex>

        {selectedFile ? (
          <Flex
            justifyContent={"flex-start"}
            gap={5}
            mt={10}
            direction="column"
            p="6"
          >
            <Flex direction={"column"}>
              <Text fontSize="lg" fontWeight="bold">
                Seçili dosya
              </Text>

              <Text fontSize="lg" fontWeight="bold">
                • {selectedFile.name}
              </Text>
            </Flex>
            <Box>
              <Button colorScheme="red" onClick={handleRemoveClick}>
                Kaldır
              </Button>
            </Box>
          </Flex>
        ) : (
          <>
          <Text fontSize="lg">Dosya seçilmedi.</Text> 
          </>
        )}
      </FormControl>
    </>
  );
}

export default FileUpload;
