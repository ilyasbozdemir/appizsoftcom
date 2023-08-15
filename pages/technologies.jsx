import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  Wrap,
  WrapItem,
  Select,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  PopoverContent,
  SimpleGrid,
  VStack,
  HStack,
  Stack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";
import PagesBreadcrumb from "../components/shared/PagesBreadcrumb";
import axios from "axios";

const OurTechnologiesCTA = () => {
  return <></>;
};

const OurTechnologiesContent = () => {
  const [technologies, setTechnologies] = useState([]);
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);

  const getUniqueCategories = (data) => {
    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    return uniqueCategories;
  };

  let uniqueCategories = getUniqueCategories(technologies);

  const handleCategoryFilter = (category) => {
    const filteredData = technologies.filter(
      (item) => item.category === category
    );
    setFilteredTechnologies(filteredData);
  };
  const handleCategoryAll = () => {
    setFilteredTechnologies(technologies);
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }

    };
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/technologies-list`);
        setTechnologies(response.data);

        handleCategoryAll();
      } catch (error) {}
    };

    fetchData();
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    const filteredData = technologies.filter(
      (item) => item.category === selectedCategory
    );
    setFilteredTechnologies(filteredData);
  };

  return (
    <Box h={"auto"} as={"article"} mt={100}>
      <Flex direction={"row"} justifyContent={"flex-start"} gap={5} my={5}>
        <Flex w={{ base: 0, md: 300 }}   p={3}>
          {!isMobile && (
            <>
              <VStack justify={"start"} align={'start'}>
                <>
                  <>
                    <Button onClick={() => handleCategoryAll()}>Tümü</Button>
                  </>
                  {uniqueCategories.map((category) => (
                    <WrapItem key={category}>
                      <Button onClick={() => handleCategoryFilter(category)}>
                        {category}
                      </Button>
                    </WrapItem>
                  ))}
                </>
              </VStack>
            </>
          )}
        </Flex>

        <Flex direction={"column"} justifyContent={"flex-start"}>
          {isMobile && (
            <Center my={10}>
              <Select onChange={handleCategoryChange}>
                {/*<option value="all">Tümü</option>*/}
                {uniqueCategories.map((category) => (
                  <>
                    <option
                      value={category}
                      onClick={() => handleCategoryFilter(category)}
                    >
                      {category}
                    </option>
                  </>
                ))}
              </Select>
            </Center>
          )}

          <Center>
            <SimpleGrid
              columns={{ sm: 2, md: 3, lg: 4, xl: 5, "2xl": 6 }}
              spacing={2}
              justify="center"
              gap={5}
            >
              {filteredTechnologies.map((tech) => (
                <Flex key={tech.id}>
                  <Flex direction={{ base: "column", lg: "row" }} gap={4}>
                    <Flex>
                      <Box
                        width="50%"
                        bg={"#f3f4f6"}
                        borderRadius={"4px"}
                        p={".5rem"}
                        gap={"1rem"}
                        alignItems={"center"}
                        boxSize={"50px"}
                      >
                        <Image
                          id={tech.id}
                          src={tech.imageUrl}
                          alt={tech.id}
                          width={200}
                          height={200}
                          mr={4}
                        />
                      </Box>
                      <Flex mx={3} direction={"column"}>
                        <Text
                          mb={0}
                          fontWeight={500}
                          fontSize={"14px"}
                          lineHeight={"20px"}
                          isTruncated
                        >
                          {tech.title}
                        </Text>
                        <Text
                          mb={0}
                          fontWeight={400}
                          fontSize={"14px"}
                          lineHeight={"20px"}
                          isTruncated
                          color={"gray.600"}
                        >
                          {tech.category}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </SimpleGrid>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
};

function OurTechnologiesPage() {
  return (
    <>
      <Head>
        <title>Teknolojiler • Appizsoft</title>
      </Head>

      <main>
        <OurTechnologiesCTA />
        <OurTechnologiesContent />
      </main>
    </>
  );
}

export default OurTechnologiesPage;
