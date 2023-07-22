import {
  Box,
  Flex,
  SimpleGrid,
  Divider,
  Heading,
  Center,
  Button,
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
      <Box mx={3} display="flex" alignItems="center">
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
        <Box flex="1" textAlign="center">
          <Heading
            fontFamily={"Montserrat"}
            as="h2"
            fontSize={{ base: "24px", md: "26px", lg: "28px", xl: "32px" }}
          >
            Referanslar
          </Heading>
        </Box>
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
      </Box>

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
                style={{ objectFit: "contain", filter: "grayscale(1)" }}
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
      <Center mt={5}>
        <Link href={"/tr/portfolio"} passHref>
          <Button variant={"outline"} color="primary.100" p={5}>
            Tüm Referanslar
          </Button>
        </Link>
      </Center>
    </Box>
  );
}
