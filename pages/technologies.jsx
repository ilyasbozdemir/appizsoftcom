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
import { site } from "../constants/site";

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

  return <Box h={"auto"} as={"article"} mt={100}></Box>;
};

function OurTechnologiesPage() {
  const publisher = `AppizSoft`;
  const title = `Teknolojiler • AppizSoft`;
  const desc = `İşimizde kullandığımız çeşitli teknolojileri keşfedin. Bulut bilişim, veritabanı yönetimi, konteyner teknolojileri gibi altyapı unsurlarının yanı sıra, geliştirme dilleri ve daha fazlası hakkında bilgi edinin. `;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}/technologies`}
        />

        <link
          rel="alternate"
          hreflang="tr"
          href={`${site.baseUrl}/technologies`}
        />
        <link
          rel="alternate"
          hreflang="en"
          href={`${site.baseUrl}/en/technologies`}
        />
        <link rel="canonical" href="https://appizsoft.com/technologies" />
        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${site.baseUrl}/technologies`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
      </Head>

      <main>
        <OurTechnologiesCTA />
        <OurTechnologiesContent />
      </main>
    </>
  );
}

export default OurTechnologiesPage;
