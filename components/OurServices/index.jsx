import { Flex, Text, Image, Heading } from "@chakra-ui/react";
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
            fontSize={"12px"}
            data-aos="zoom-in"
            textTransform={"uppercase"}
          >
            {title}
          </Heading>
        </Flex>

        <Text
          _light={{ color: "gray.600" }}
          _dark={{ color: "#fff" }}
          fontSize={"13px"}
          data-aos="zoom-in-up"
        >
          {content}
        </Text>
      </Flex>
    </>
  );
};

function OurServices() {
  return (
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
  );
}

export default OurServices;
