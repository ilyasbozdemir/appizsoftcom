import React from "react";

import {
  Center,
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

import { HStack, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
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
  const activeColor = useColorModeValue("primary", "#1cb1b8");
  return (
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

const TestimonialAvatar = ({ src, name, title }) => {
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
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.800")} itemprop="jobTitle">
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

function WithSpeechBubbles() {
  const testimonialsData = [
    {
      id: 1,
      rating: 5,
      author: "John Doe",
      avatarUrl:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      jobTitle: "CEO at XYZ Company",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      reviewTitle: "Lorem ipsum dolor sit",
    },
  ];

  return (
    <Box bg={"gray.200"} >
      <Container maxW={"full"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading fontWeight={"semibold"} color={"#5c5c5c"}>
            Müşteri Yorumları
          </Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {testimonialsData.map((testimonial) => (
            <React.Fragment key={testimonial.id}>
              <Testimonial itemscope itemtype="http://schema.org/Review">
                <TestimonialContent>
                  <div
                    itemprop="reviewRating"
                    itemscope
                    itemtype="http://schema.org/Rating"
                  >
                    <Rating defaultValue={testimonial.rating} size="lg" />
                    <meta itemprop="ratingValue" content={testimonial.rating} />
                  </div>

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
      </Container>
    </Box>
  );
}

function TestimonialsSection() {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={3}
      >
        <Center>
          <WithSpeechBubbles testimonial />
        </Center>
      </Flex>
    </>
  );
}

export default TestimonialsSection;
