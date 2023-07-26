import * as React from "react";
import { Text, SimpleGrid, Box, Flex, Icon } from "@chakra-ui/react";
import { FaSmile } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const statData = [
  {
    id: 1,
    label: "Yıllık Tecrübe",
    score: "10",
    icon: IoDiamondSharp,
    color: "teal",
  },
  {
    id: 2,
    label: "Mutlu Müşteri",
    score: "100",
    icon: FaSmile,
    color: "yellow",
  },
  {
    id: 3,
    label: "Proje",
    score: "99",
    icon: AiFillCheckCircle,
    color: "green",
  },

  {
    id: 4,
    label: "Uzman Çalışan",
    score: "10",
    icon: IoMdPeople,
    color: "gray",
  },
];

const BrandStats = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={{ base: 2, sm: 5 }}>
        {statData.map((data) => (
          <Flex key={data.id} direction={"row"}>
            <Flex align={"center"} justify={"center"}>
              <Icon
                as={data.icon}
                w={58}
                h={58}
                aria-hidden="true"
                color={`${data.color}.300`}
              />
            </Flex>
            <Flex
              p={{ base: 2, sm: 5 }}
              justifyContent={"center"}
              direction={"column"}
            >
              <Flex>
                <Text fontWeight="extrabold" fontSize="xx-large">
                  <AnimatedNumbers
                    animateToNumber={data.score}
                    fontStyle={{ fontSize: 32 }}
                    configs={(number, index) => {
                      return {
                        mass: 1,
                        tension: 230 * (index + 1),
                        friction: 140,
                      };
                    }}
                  />
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="sm" justifyContent={"start"}>
                  {data.label}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default BrandStats;
