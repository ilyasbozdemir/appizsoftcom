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
    speed: 50,
    slidesToShow: 9,
    slidesToScroll: 1,
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
    <>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={{  md: 5, lg: 10 }}
        w="100vw" h="auto"
      >
        <Box
          px={8}
          py={20}
          mx="auto"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
        >

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos iure facere distinctio autem id consectetur! Soluta alias necessitatibus voluptatibus, iusto, ullam tempora nihil provident animi, quaerat consequatur quisquam vitae.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda harum iure nobis et a. Fuga recusandae officia voluptatem repellendus molestiae? Reprehenderit autem eligendi aspernatur explicabo pariatur excepturi iste eos?
      {

        /*

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
                          filter={"grayscale(95%)"}
                        />
                      </a>
                    </Link>
                  </div>
                </Tooltip>
              </React.Fragment>
            ))}
          </Slider>
         
         */
      }

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
        </Box>
      </Flex>
    </>
  );
}

export default OurTechnologies;
