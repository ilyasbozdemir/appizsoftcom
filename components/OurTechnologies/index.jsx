import React from "react";
import {
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

const ServiceCard = ({ title, body }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="6" mb="8">
      <Heading
        size="md"
        mb="2"
      >
        {title}
      </Heading>
      <Text>{body}</Text>
    </Box>
  );
};
 
const services = [
  {
    title: "Özel Yazılım Geliştirme",
    body: "İşletmenize özel yazılım çözümleri sunarak verimliliğinizi arttırın.",
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

function OurTechnologies() {
  return (
    <Box
      color={"#fff"}
      m={5}
      data-aos="fade-up"
      bg={"#111"}
      borderRadius={"15px"}
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
  );
}

export default OurTechnologies;
