import {
  Box,
  Flex,
  SimpleGrid,
  Divider,
  Heading,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "../../constants/projects";
import Link from "next/link";
import Slider from "react-slick";

const defaultWidth = 175;
const defaultHeight = 75;

export default function OurReferences() {
  const [references, setReferences] = useState(projects);
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    easing: "easeOutElastic",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <Box>
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
              Referanslar
            </Heading>
          </Flex>
        </Flex>

        <Slider {...settings}>
          {references.map((ref) => (
            <div key={ref.id}>
              <Image
                src={ref.logo}
                alt={`Reference ${ref.id}`}
                width={defaultWidth}
                height={defaultHeight}
                mx={2}
                opacity={0.7}
                style={{ objectFit: "contain", filter: "saturate(2)" }}
              />
            </div>
          ))}
        </Slider>

        <Center>
          <Flex display={{ base: "initial", md: "none" }}>
            <Link href={"/tr/services"} passHref>
              <Button variant={"outline"}>Tüm Referanslar</Button>
            </Link>
          </Flex>
        </Center>
      </Box>

      <></>
    </>
  );
}
