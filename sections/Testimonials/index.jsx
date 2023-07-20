import React, { Fragment } from "react";

import {
  Center,
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Divider,
  Container,
  chakra,
  VStack,
} from "@chakra-ui/react";

import { HStack, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

import { ImQuotesLeft } from "react-icons/im";

const Testimonial = ({ children }) => {
  return <Box w={"full"}>{children}</Box>;
};
const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};
const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};
const Rating = (props) => {
  const { defaultValue = 0, max = 5, size = "md", rootProps } = props;
  const color = useColorModeValue("gray.200", "gray.600");
  const activeColor = useColorModeValue("primary.100", "primary.200");
  return (
    <div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
      <HStack spacing="0.5" {...rootProps}>
        {Array.from({
          length: max,
        })
          .map((_, index) => index + 1)
          .map((index) => (
            <Icon
              key={index}
              as={FaStar}
              fontSize={size}
              color={index <= defaultValue ? activeColor : color}
            />
          ))}
      </HStack>
      <meta itemprop="ratingValue" content={defaultValue} />
    </div>
  );
};
const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
      itemprop="reviewBody"
    >
      {children}
    </Text>
  );
};
const TestimonialAvatar = ({ src, name, title, rating }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} itemprop="image" />
      <Stack
        spacing={-1}
        align={"center"}
        itemprop="author"
        itemscope
        itemtype="http://schema.org/Person"
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.800")}
          itemprop="name"
        >
          {name}
        </Text>
        <Text
          fontSize={"sm"}
          color={useColorModeValue("gray.600", "gray.800")}
          itemprop="jobTitle"
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

import { testimonialsData } from "../../constants/testimonialsData";
import { testimonialsData2 } from "../../constants/testimonialsData2";

function WithSpeechBubbles() {
  return (
    <Box>
      <Container maxW={"full"} py={16} as={Stack} spacing={12}>
        <Flex direction={"column"} w={"full"}>
          <Box mx={3} display="flex" alignItems="center">
            <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
            <Box flex="1" textAlign="center">
              <Heading
                fontFamily={"Montserrat"}
                as="h2"
                fontSize={{ base: "24px", md: "26px", lg: "28px", xl: "32px" }}
              >
                İnsanlar bizim hakkımızda ne diyor?
              </Heading>
            </Box>
            <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
          </Box>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {testimonialsData.map((testimonial) => (
            <React.Fragment key={testimonial.id}>
              <Testimonial itemscope itemtype="http://schema.org/Review">
                <TestimonialContent>
                  <Rating defaultValue={testimonial.rating} size="lg" />
                  <TestimonialHeading>
                    {testimonial.reviewTitle}
                  </TestimonialHeading>
                  <TestimonialText>{testimonial.review}</TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={testimonial.avatarUrl}
                  name={testimonial.author}
                  title={testimonial.jobTitle}
                />
              </Testimonial>
            </React.Fragment>
          ))}
        </Stack>
        <Center>
          <Text
            onClick={() => {}}
            color={"#0066ff"}
            fontWeight={"semibold"}
            mt={3}
          >
            Daha fazla yorum görüntüleyin →
          </Text>
        </Center>
      </Container>
    </Box>
  );
}

const TestimonialsSections = () => {
  return (
    <>
      <Container maxW="5xl" p={{ base: 5, md: 10 }}>
        <Flex justify="center" mb={8}>
          <chakra.h3 fontSize="3xl" fontWeight="bold" mb={3}>
            İnsanlar bizim hakkımızda ne diyor?
          </chakra.h3>
        </Flex>

        {testimonialsData2.map((obj, index) => (
          <Fragment key={index}>
            <VStack spacing={3} pt={1} justify="center">
              <Avatar
                size="xl"
                showBorder={true}
                borderColor="green.400"
                name="avatar"
                src={obj.image}
              />
               <Box textAlign="center" maxW="4xl">
                <Text fontSize="md" fontWeight="medium">
                  <Rating defaultValue={obj.rating} size="lg" />
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontWeight="bold" fontSize="lg">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="gray.400">
                  {obj.position}, {obj.company}
                </Text>
              </Box>
              <Box textAlign="center" maxW="4xl">
                <Text fontSize="md" fontWeight="medium">
                  {obj.content}
                </Text>
              </Box>
             
            </VStack>
            {testimonialsData2.length - 1 !== index && <Divider my={6} />}
          </Fragment>
        ))}
      </Container>
    </>
  );
};

const Testimonials = () => {
  return (
    <>
      <Center p={4}>
        {/*
            <WithSpeechBubbles />
        */}

        <TestimonialsSections />
      </Center>
    </>
  );
};

export default Testimonials;
