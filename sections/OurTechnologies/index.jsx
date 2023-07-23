import React, { useState } from "react";
import {
  Box,
  Text,
  Image as ChakraImage,
  Heading,
  Flex,
  Divider,
  Center,
  SimpleGrid,
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
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          draggable: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 4,
          draggable: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          draggable: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <>
      <Flex
        id="services-top"
        direction={"row"}
        justifyContent={"space-between"}
        px={{ base: 10, md: 20 }}
      >
        <Flex direction={"column"} justify={"center"} gap={3}>
          <Heading
            as="h2"
            fontSize={24}
            pos="relative"
            _before={{
              content: `""`,
              borderRadius: "50px",
              position: "absolute",
              backgroundColor: "#000",
              width: "4px",
              height: "100%",
              left: "-10px",
            }}
          >
            Teknolojiler
          </Heading>
        </Flex>
      </Flex>

      <Center>
        <SimpleGrid
          columns={{
            base: 2,
            sm: 4,
            md: 6,
            lg: 7,
          }}
          spacingX={{
            base: 16,
            lg: 24,
          }}
          spacingY={20}
          mt={6}
        >
          {technologies.map((image, index) => (
            <React.Fragment key={index}>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <Link href={`${lang}/technologies#${image.id}`} passHref>
                  <Flex direction={"column"}>
                    <ChakraImage
                      id={image.id}
                      src={image.imageUrl}
                      alt={`${image.title}`}
                      width={50}
                      height={50}
                      filter={"saturate(.2)"}
                      _hover={{
                        filter: "none",
                      }}
                    />
                  </Flex>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}

export default OurTechnologies;
