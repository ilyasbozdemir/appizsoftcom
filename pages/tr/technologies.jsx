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
} from "@chakra-ui/react";
import Image from "next/image";
import Head from "next/head";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import axios from "axios";

const OurTechnologiesCTA = () => {
  return (
    <>
    
    </>
  );
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
    <Box w="100vw" h={"auto"} as={"article"}>
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
          <Select onChange={handleCategoryChange} w={"85%"}>
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

      <Popover isLazy>
        <PopoverTrigger>
          <Button>test</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Popover placement</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <Wrap maxH="100vh" justify="center" align="center">
        {filteredTechnologies.map((tech) => (
          <Flex key={tech.id}>
            <WrapItem p={5} cursor={"pointer"}>
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
