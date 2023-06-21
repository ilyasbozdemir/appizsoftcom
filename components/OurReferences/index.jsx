import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const references = [
  { id: 1, logo: "/images/references/test-reference.png", w: 250, h: 100 },
  { id: 2, logo: "/images/references/test-reference.png", w: 250, h: 100 },
  { id: 3, logo: "/images/references/test-reference.png", w: 250, h: 100 },
  { id: 4, logo: "/images/references/test-reference.png", w: 250, h: 100 },
];

const defaultWidth = 175;
const defaultHeight = 75;

export default function OurReferences() {
  const [slideIndex, setSlideIndex] = useState(0);

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
      <Flex overflow="hidden" bg={"#eee"} p={5}>
        <motion.div
          style={{
            display: "flex",
            width: `${references.length * 100}%`,
            transition: "transform 0.2s",
            transform: `translateX(-${
              slideIndex * (100 / references.length)
            }%)`,
          }}
        >
          {references.map((ref) => (
            <motion.div
              key={ref.id}
              style={{
                width: `${100 / references.length}%`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={ref.logo}
                alt={`Reference ${ref.id}`}
                width={defaultWidth}
                height={defaultHeight}
                mx={2}
                opacity={0.7}
                objectFit="contain"
                sx={{
                  "@media (min-width: 768px)": {
                    width: `${ref.w}px`,
                    height: `${ref.h}px`,
                  },
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </Flex>
    </Box>
  );
}
