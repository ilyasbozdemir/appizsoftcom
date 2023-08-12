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

import dynamic from "next/dynamic";
import { trustedByDevFeatures } from "../../constants/TrustedByDevFeatures";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const BrandStats = () => {
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
            spacing={{ base: 0, md: 10 }}
          >
            {trustedByDevFeatures.map((data) => (
              <Flex
                key={data.id}
                direction={"row"}
                bg={`${data.color}.400`}
                color={"white"}
                p={10}
                shadow={"lg"}
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
            {trustedByDevFeatures.map((data) => (
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
