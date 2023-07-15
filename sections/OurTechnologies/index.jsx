import React from "react";
import {
  Box,
  Center,
  Text,
  Image as ChakraImage,
  Tooltip,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { technologies } from "../../constants/technologies";
import Slider from "react-slick";
import { useRouter } from "next/router";

const lang = `tr`;

const Carousel = () => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {technologies.map((image, index) => (
          <React.Fragment key={index}>
            <Tooltip aria-label="A tooltip" label={image.title} hasArrow>
              <ChakraImage
                id={image.id}
                src={image.imageUrl}
                alt={`${image.title}`}
                width={50}
                height={50}
                cursor={"pointer"}
                onClick={() => {
                  router.push(`${lang}/technologies#${image.id}`);
                }}
                filter ={'grayscale(95%)'}
              />
            </Tooltip>
          </React.Fragment>
        ))}
      </Slider>
    </>
  );
};

//
function OurTechnologies() {
  const router = useRouter();
  return (
    <Box>
      <Center>
        <Heading fontWeight={"semibold"} color={"#5c5c5c"}>
          Çalıştığımız Teknolojiler
        </Heading>{" "}
      </Center>
      <>
        <Box mt={3} p={3}>
          <Carousel />
        </Box>
        <Center>
          <Text
            onClick={() => {
              router.push(`${lang}/teknolojilerimiz#${image.id}`);
            }}
            color={'#0066ff'}
            fontWeight={'semibold'}
            mt={3}
          >
            Tam hizmet tekliflerimizi görüntüleyin →
          </Text>
        </Center>
      </>
    </Box>
  );
}

export default OurTechnologies;
