import React from "react";
import {
  Box,
  Center,
  Text,
  Image as ChakraImage,
  Tooltip,
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
    slidesToShow: 6,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {technologies.map((image, index) => (
        <div key={index} style={{}}>
          <Tooltip aria-label="A tooltip" label={image.title} hasArrow>
            <ChakraImage
              id={image.id}
              src={image.imageUrl}
              alt={`${image.title}`}
              width={50}
              height={50}
              cursor={"pointer"}
              onClick={() => {
                router.push(`${lang}/teknolojilerimiz#${image.id}`);
              }}
            />
          </Tooltip>
        </div>
      ))}
    </Slider>
  );
};

//
function OurTechnologies() {
  return (
    <Box bg={"#eee"}>
      <Center>
        <Text
          as={"h2"}
          fontFamily={"Manrope"}
          _light={{ color: "gray.500" }}
          _dark={{ color: "#000" }}
        >
          ÇALIŞTIĞIMIZ TEKNOLOJİLER
        </Text>
      </Center>
      <Box mt={3} p={3}>
        <Carousel />
      </Box>
    </Box>
  );
}

export default OurTechnologies;
