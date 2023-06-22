import {
  Flex,
  Text,
  Image,
  Heading,
  SimpleGrid,
  Box,
  Container,
} from "@chakra-ui/react";

import React from "react";

const servicesData = [
  {
    img: "/images/special_software_development.png",
    title: "Özel Yazılım Geliştirme",
    content: "İşletmenizin ihtiyaçlarına uygun özel yazılımlar geliştiriyoruz.",
  },
  {
    img: "/images/digital_marketing.png",
    title: "Dijital Pazarlama",
    content:
      "Sektörünüzde öne çıkmanızı sağlamak için dijital pazarlama araçları konusunda uzmanız.",
  },
  {
    img: "/images/e_commerce.png",
    title: "E-ticaret Çözümleri",
    content:
      "İnternet mağazanızın yazılım ve dijital pazarlama ihtiyaçları için tecrübeli ekibimizle yanınızdayız. E-ticaretteki rekabet ve sorunları aşmanız için uzman kadromuz iş başında",
  },
  {
    img: "/images/production.png",
    title: "Prodüksiyon & Tasarım",
    content:
      "Markalaşma yolculuğunuzda logo, kurumsal kimlik, tanıtım filmi gibi tüm işlerinizi sektörünüzdeki enerji ve vizyonla çözüme kavuşturuyoruz. Size özel tasarımlar ve yaratıcı fikirlerle markanızı öne çıkarıyoruz.",
  },
  {
    img: "/images/game_desing.png",
    title: "Oyun Tasarım",
    content:
      "Oyun tasarımı konusunda da uzman ekibimizle yaratıcı fikirlerimiz ve oyun geliştirme konusundaki tecrübemizle sizin için en iyi oyun deneyimini sunuyoruz.",
  },
];

const services = [
  {
    title: "Özel Yazılım Geliştirme",
    body: "İşletmenize özel yazılım çözümleri sunarak verimliliğinizi arttırın. ",
  },
  {
    title: "Start-Up Çözümleri",
    body: "Yenilikçi fikirlerinizi hayata geçirin ve başarıya ulaşmak için teknolojinin gücünden faydalanın.",
  },
  {
    title: "Mobil Uygulama Geliştirme",
    body: "Mobil cihazlar için kullanıcı dostu uygulamalar geliştirerek müşteri deneyimini iyileştirin.",
  },
  {
    title: "E-ticaret Yazılımı",
    body: "Güvenli ve kolay bir alışveriş deneyimi sunan özelleştirilebilir e-ticaret yazılımı ile online satışlarınızı arttırın.",
  },
];

const Services = ({ img, title, content }) => {
  return (
    <>
      <Flex
        direction={"column"}
        w={{ base: "100%", md: "100%" }}
        gap={5}
        mt={2}
        mx={5}
        userSelect={"none"}
      >
        <Flex justifyContent={"center"} data-aos={"zoom-out"}>
          <Image height={70} width={70} src={img} draggable={false} />
        </Flex>
        <Flex justifyContent={"center"}>
          <Heading
            as={"h2"}
            data-aos="zoom-in"
            textTransform={"uppercase"}
            fontSize={{ base: "15px", md: "16px" }}
          >
            {title}
          </Heading>
        </Flex>

        <Text
          _light={{ color: "gray.600" }}
          _dark={{ color: "#fff" }}
          data-aos="zoom-in-up"
          fontSize={{ base: "15px", md: "16px" }}
        >
          {content}
        </Text>
      </Flex>
    </>
  );
};

const ServiceCard = ({ title, body }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="6" mb="8">
      <Heading size="md" mb="2">
        {title}
      </Heading>
      <Text>{body}</Text>
    </Box>
  );
};

function OurServices() {
  return (
    <>
    
      <>
        <Box
          color={"#fff"}
          m={5}
          data-aos="fade-up"
          bg={"#111"}
          borderRadius={"15px"}
          display={'none'}
        >
          <Flex direction={"column"}>
            <Container maxW="container.xl" py="20">
              <Heading size="xl" textAlign="center" mb="12">
                Yazılım Hizmetlerimiz
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="12">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </SimpleGrid>
            </Container>
          </Flex>
        </Box>
      </>

      <>
      
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={3}
      >
        {servicesData.map((service, i) => (
          <Services
            img={service.img}
            title={service.title}
            content={service.content}
          />
        ))}
      </Flex>

      </>
    </>
  );
}

export default OurServices;
