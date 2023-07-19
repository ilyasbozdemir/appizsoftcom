import React, { useState } from "react";
import {
  Box,
  Center,
  Text,
  Image as ChakraImage,
  Tooltip,
  Heading,
  Flex,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { technologies } from "../../constants/technologies";
import Slider from "react-slick";
import { useRouter } from "next/router";
import Link from "next/link";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const lang = `tr`;

//

function OurTechnologies() {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 4,
    focusOnSelect: true,
    draggable: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          draggable: true, 
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          draggable: true, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true, 
        },
      },
    ],
  };
  

  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Box mt={10}>
      <Box mx={3} display="flex" alignItems="center">
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
        <Box flex="1" textAlign="center">
          <Heading
            fontFamily={"Montserrat"}
            as="h2"
            fontSize={{ base: "24px", md: "26px", lg: "28px", xl: "32px" }}
          >
            Teknolojiler
          </Heading>
        </Box>
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
      </Box>

      <Box
        px={8}
        py={20}
        mx="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
      >
        <Slider {...settings}>
          {technologies.map((image, index) => (
            <React.Fragment key={index}>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <Link
                  href={`${lang}/technologies#${image.id}`}
                  passHref
                  legacyBehavior
                >
                  <a
                    style={{
                      pointerEvents: isDragging ? "none" : "auto",
                      cursor: isDragging ? "grabbing" : "pointer",
                    }}
                  >
                    <ChakraImage
                      id={image.id}
                      src={image.imageUrl}
                      alt={`${image.title}`}
                      width={50}
                      height={50}
                      filter={"grayscale(99%)"}
                    />
                  </a>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </Slider>
        <Flex mt={10} justify={"center"}>
          <Text
            onClick={() => {
              router.push(`${lang}/technologies`);
            }}
            color={"blue"}
            fontWeight={"semibold"}
            mt={3}
            cursor={"pointer"}
          >
            Tam hizmet teknolojilerimizi görüntüleyin →
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default OurTechnologies;
