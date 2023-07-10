import React, { useEffect, useState } from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ButtonGroup,
  Button,
  Center,
  Divider,
  Flex,
  Text,
  Wrap,
  WrapItem,
  Select,
} from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import axios from "axios";

const OurTechnologiesCTA = () => {
  return (
    <>
      <Flex
        as="section"
        h={"350px"}
        bg="primary"
        w="100%"
        color="white"
        justify={"center"}
      >
        <Center>
          <Flex direction={"column"}>
            <Text fontSize={65}>Teknolojiler</Text>
            <Center>
              <PagesBreadcrumb currentPage={"Teknolojiler"} />
            </Center>
          </Flex>
        </Center>
      </Flex>
    </>
  );
};

const OurTechnologiesContent = () => {
  const [technologies, setTechnologies] = useState([]);
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/technologies-list`);
        setTechnologies(response.data);
        setFilteredTechnologies(technologies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getUniqueCategories = (data) => {
    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    return uniqueCategories;
  };

  const uniqueCategories = getUniqueCategories(technologies);

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
    <Box h="100vh" w="100vw">
      {!isMobile && (
        <>
          <Center my={5}>
            <Wrap maxH="100vh">
              <WrapItem>
                <Button onClick={() => handleCategoryAll()}>Tümü</Button>
              </WrapItem>
              {uniqueCategories.map((category) => (
                <WrapItem key={category}>
                  <Button onClick={() => handleCategoryFilter(category)}>
                    {category}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </Center>
        </>
      )}

      {isMobile && (
        <Center my={10}>
          <Select onChange={handleCategoryChange} w={'90%'}>
            <option value="all">Tümü</option>
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

      <Wrap maxH="100vh">
        {filteredTechnologies.map((tech) => (
          <Flex direction={{ base: "column", md: "row" }} key={tech.id}>
            <WrapItem>
              <Flex direction={"row"}>
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
                    width={150}
                    height={150}
                    mr={4}
                  />
                </Box>
                <Box mx={3}>
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
                  >
                    {tech.category}
                  </Text>
                </Box>
              </Flex>
            </WrapItem>
          </Flex>
        ))}
      </Wrap>
    </Box>
  );
};

function OurTechnologiesPage() {
  return (
    <>
      <Head></Head>

      <OurTechnologiesCTA />
      <OurTechnologiesContent />
    </>
  );
}

export default OurTechnologiesPage;
