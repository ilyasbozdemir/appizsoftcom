import {
  chakra,
  Container,
  Heading,
  Stack,
  Icon,
  Text,
  Box,
  keyframes,
  useColorModeValue,
  useBreakpointValue,
  Center,
  Flex,
  Button,
  SimpleGrid,
  Image,
  HStack,
  Wrap,
  WrapItem,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";

import StartProjectButton from "../../components/StartProjectButton";
import ScrollToIdButton from "../../components/ScrollToIdButton ";
import JoinTeam from "../../components/JoinTeam";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import HeroSection from "../../components/HeroSection";

//import Image from "next/image";

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
  <>
    <Text
      as="span"
      bgGradient="linear(to left, #61A5C2, #00ff00, #61A5C2, #5874B7, #61A5C2, #5298AD)"
      //bgGradient="linear(to left, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff, #0099ff)"
      bgClip="text"
      color="transparent"
      bgSize="300% 100%"
      w="fit-content"
    >
      {text}
    </Text>
  </>
);

export default function CallToActionWithIllustration({ lang, targetId }) {
  const router = useRouter();

  return (
    <>
      <HeroSection />
    </>
  );
}
