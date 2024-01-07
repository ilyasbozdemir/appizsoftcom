import {
  Text,
  keyframes,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import HeroSection from "../../components/HeroSection";



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

export default function CallToActionWithIllustration({ targetId }) {
  const router = useRouter();

  return (
    <>
      <HeroSection />
    </>
  );
}
