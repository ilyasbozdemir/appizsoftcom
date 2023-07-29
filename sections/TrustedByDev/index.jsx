import * as React from "react";
import {
  Text,
  SimpleGrid,
  Box,
  Flex,
  Icon,
  useMediaQuery,
  useBreakpointValue,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
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
    label: "Mutlu Müşteriler",
    score: "100",
    icon: FaSmile,
    color: "yellow",
  },
  {
    id: 3,
    label: "Biten Proje",
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
  const [isSmallerThan550] = useMediaQuery("(max-width: 550px)");
  const [isLargerThan550] = useMediaQuery("(min-width: 550px)");

  const gridColumns = useBreakpointValue({ base: 1, md: 3 });
  const isMobile = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction={"column"}
      gap={10}
    >
      {isMobile && (
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            spacing={{ base: 0, sm: 10 }}
          >
            {statData.map((data) => (
              <Flex
                key={data.id}
                direction={"row"}
                bg={`${data.color}.400`}
                color={"white"}
                p={10}
              >
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
                  align={"center"}
                  justify={"center"}
                  p={{ base: 2, sm: 5 }}
                  justifyContent={"center"}
                  direction={"column"}
                >
                  <Flex>
                    <Box fontWeight="extrabold" fontSize="xx-large">
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
                    </Box>
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
        </>
      )}
      {!isMobile && (
        <>
          <Wrap spacing={5}>
            {statData.map((data) => (
              <WrapItem key={data.id} h="120px" w={"full"}>
                <Flex
                  bg={`${data.color}.400`}
                  color={"white"}
                  align={"center"}
                  justify={"center"}
                  w={"full"}
               
                >
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
                    align={"center"}
                    justify={"center"}
                    p={{ base: 2, sm: 5 }}
                    justifyContent={"center"}
                    direction={"column"}
                  >
                    <Flex>
                      <Box fontWeight="extrabold" fontSize="xx-large">
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
                      </Box>
                    </Flex>
                    <Flex>
                      <Text fontSize="sm" justifyContent={"start"}>
                        {data.label}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </WrapItem>
            ))}
          </Wrap>
        </>
      )}
    </Flex>
  );
};

export default BrandStats;
