import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  keyframes,
  Icon,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import Router, { useRouter } from "next/router";
import { FaCaretDown } from "react-icons/fa";

import { motion } from "framer-motion";

const rainbowAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 50% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

const RainbowText = ({ text }) => (
  <Box
    as="span"
    bgGradient="linear(to left, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff, #0099ff)"
    bgClip="text"
    color="transparent"
    animation={`${rainbowAnimation} 4s ease-out infinite`}
    bgSize="400% 100%"
    animationIterationCount="infinite"
    w="fit-content"
  >
    {text}
  </Box>
);

export default function CallToActionWithIllustration({ lang,targetId }) {
  const router = useRouter();
  return (
    <Box
      w="100vw" // Genişliği ekran genişliğine eşit
      h="100vh" // Yüksekliği ekran yüksekliğine eşit
      display="flex" // İçeriği yatay ve dikey olarak ortalamak için flex kullanıyoruz
      justifyContent="center" // Yatayda ortala
      alignItems="center" // Dikeyde ortala
   
     
    >
      <Container maxW={"5xl"} as="article">
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 14 }}
        >
          <Heading
            as={"h1"}
            fontWeight={600}
            fontSize={{ base: "30px", md: "50px" }}
            textTransform={"uppercase"}
            fontFamily={"Montserrat"}
            data-aos="fade-up"
          >
            Yaratıcılıkla <RainbowText text={"Teknolojiyi "} />
            birleştirerek Markanızı Öne Çıkarıyoruz.
          </Heading>
          <Text
            maxW={"3xl"}
            data-aos="fade-up"
            fontSize={{ base: "19px", md: "25px" }}
          >
            Müşterilerimize özel yaklaşımımızla yaratıcı çözümler sunarak
            hedeflerine ulaşmalarına yardımcı oluyoruz. Stratejik planlama ve
            araştırmalarımızla, müşterilerimizin sektöründe öne çıkarak rekabet
            avantajı elde etmelerini sağlıyoruz.
          </Text>
          <Stack spacing={6} direction={"column"}>
            <Button
              rounded={"full"}
              colorScheme={"white"}
              _hover={{
                boxShadow: "0 4px 8px rgba(110, 190, 194, 0.6)",
              }}
              fontFamily={"Verdana"}
              data-aos="zoom-in"
              p={7}
              fontSize={{ base: 14, md: 16, lg: 18 }}
              variant={"outline"}
              onClick={() => {
                Router.push(lang + "/get-a-quote");
              }}
            >
              Hemen Başlayalım!
            </Button>

            <Center>
              <Link to={targetId} smooth={true} duration={500} offset={-88}>
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: [0, -1, 0], // Animation sequence: move up, move down, move up
                    opacity: [1, 0.5, 1], // Animation sequence: fade in, fade out, fade in
                  }}
                  transition={{
                    repeat: Infinity, // Repeat animation indefinitely
                    repeatType: "reverse", // Reverse the animation sequence on each repeat
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                  }}
                >
                  <FaCaretDown
                    fontSize={80}
                    cursor="pointer"
                    color={useColorModeValue("black", "white")}
                  />
                </motion.div>
              </Link>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
