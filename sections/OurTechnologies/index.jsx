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
    slidesToScroll: 2,
    centerPadding: "60px",
    initialSlide: 0,
    vertical: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <Box>
      <Flex direction={"column"} gap={5} justifyContent="center" px={"25px"}>
        <Box mx={3} display="flex" alignItems="center">
          <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
          <Box flex="1" textAlign="center">
            <Heading
              fontFamily={"Montserrat"}
              as="h2"
              fontSize={{ base: "24px", md: "26px", lg: "28px", xl: "32px" }}
            >
              Çalıştığımız Teknolojiler
            </Heading>
          </Box>
          <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
        </Box>

        <Slider {...settings}>
          {technologies.map((image, index) => (
            <React.Fragment key={index}>
              <Tooltip aria-label="A tooltip" label={image.title} hasArrow>
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  <Link href={`${lang}/technologies#${image.id}`} passHref legacyBehavior>
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
                        filter={"grayscale(95%)"}
                      />
                    </a>
                  </Link>
                </div>
              </Tooltip>
            </React.Fragment>
          ))}
        </Slider>

        <Center>
          <Text
            onClick={() => {
              router.push(`${lang}/technologies#${image.id}`);
            }}
            color={"#0066ff"}
            fontWeight={"semibold"}
            mt={3}
            cursor={"pointer"}
          >
            Tam hizmet teknolojilerimizi görüntüleyin →
          </Text>
        </Center>
      </Flex>
    </Box>
  );
}

export default OurTechnologies;
