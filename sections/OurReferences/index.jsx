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
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "../../constants/projects";
import Link from "next/link";

const defaultWidth = 175;
const defaultHeight = 75;

export default function OurReferences() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [references, setReferences] = useState(projects);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === references.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
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
        <Flex display={{ base: "none", md: "initial" }}>
          <Link href={"/tr/services"} passHref>
            <Button variant={"outline"}>Tüm Referanslar</Button>
          </Link>
        </Flex>
      </Flex>

      <Center>
        <SimpleGrid
          columns={{
            base: 2,
            sm: 3,
            md: 4,
            lg: 6,
          }}
          spacingX={{
            base: 16,
            lg: 24,
          }}
          spacingY={20}
          mt={6}
        >
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
                sx={{
                  "@media (min-width: 768px)": {
                    width: `${ref.w}px`,
                    height: `${ref.h}px`,
                  },
                }}
              />
            </div>
          ))}
        </SimpleGrid>
      </Center>
      <Center>
        <Flex display={{ base: "initial", md: "none" }}>
          <Link href={"/tr/services"} passHref>
            <Button variant={"outline"}>Tüm Referanslar</Button>
          </Link>
        </Flex>
      </Center>
    </Box>
  );
}
