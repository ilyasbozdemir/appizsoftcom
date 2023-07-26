import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Center,
} from "@chakra-ui/react";

import React from "react";
import { BiAnalyse } from "react-icons/bi";
import { MdEvent } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { HiCode } from "react-icons/hi";
import { AiOutlineBug } from "react-icons/ai";
import { GrDeploy, GrIntegration } from "react-icons/gr";
import { SlDoc } from "react-icons/sl";
import { Link } from "react-scroll";

const OurWorkProcessFeature = () => {
  const Feature = (props) => {
    return (
      <Box>
        <Center>
          <Flex
            alignItems="center"
            justifyContent="center"
            w={8}
            h={8}
            mb={4}
            rounded="full"
            color={`${props.color}.600`}
            bg={`${props.color}.100`}
            _dark={{
              color: `${props.color}.200`,
              bg: `${props.color}.800`,
            }}
          >
            <Icon
              as={props.icon}
              boxSize={5}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
          </Flex>
        </Center>

        <Center>
          <Box
            as="h3"
            mb={2}
            fontWeight="semibold"
            lineHeight="shorter"
            _light={{
              color: "gray.900",
            }}
          >
            {props.title}
          </Box>
        </Center>

        <Box
          as="p"
          fontSize="sm"
          color="gray.500"
          _dark={{
            color: "gray.400",
          }}
        >
          {props.children}
        </Box>
      </Box>
    );
  };

  const features = [
    {
      color: "teal",
      title: "İhtiyaç Analizi",
      icon: BiAnalyse,
      content:
        " Müşteri veya proje gereksinimlerini anlamak için detaylı bir analiz yapılır. Projenin amacını ve müşterinin isteklerini belirlemek için toplantılar düzenlenir ve dokümantasyonlar incelenir.",
    },
    {
      color: "purple",
      title: "Planlama",
      icon: MdEvent,
      content:
        " Analiz sonuçlarına dayanarak projenin genel bir planı oluşturulur. Proje süresi, kaynak gereksinimleri ve öncelikler belirlenir. Projenin başarı kriterleri ve hedefleri belirlenir.",
    },
    {
      color: "red",
      title: "Tasarım",
      icon: SiMaterialdesignicons,
      content:
        "Bileşenin tasarımı oluşturulur. Kullanılacak teknolojiler seçilir, arayüzler ve veri yapıları tanımlanır. Bileşenin nasıl çalışacağına dair bir plan yapılır ve gerekli arayüzlerin prototipleri oluşturulur.",
    },
    {
      color: "blue",
      title: "Kodlama",
      icon: HiCode,
      content:
        "Bileşenin tasarımı oluşturulur. Kullanılacak teknolojiler seçilir, arayüzler ve veri yapıları tanımlanır. Bileşenin nasıl çalışacağına dair bir plan yapılır ve gerekli arayüzlerin prototipleri oluşturulur.",
    },
    {
      color: "yellow",
      title: "Birleştirme ve Entegrasyon",
      icon: GrIntegration,
      content:
        "Tasarıma dayalı olarak bileşenlerin kodlanması ve oluşturulması gerçekleştirilir.",
    },
    {
      color: "cyan",
      title: "Test ve Hata Ayıklama",
      icon: AiOutlineBug,
      content:
        "Bileşenin testi yapılır ve hata ayıklama süreci uygulanır. İşlevsel testler, birim testleri ve bütünleşik testler gibi farklı test aşamaları kullanılır. Hatalar tanımlanır, izlenir ve düzeltilir.",
    },
    {
      color: "orange",
      title: "Dökümantasyon",
      icon: SlDoc,
      content:
        "Bileşenin kullanımını ve kurulumunu anlatan detaylı bir kullanıcı kılavuzu ve geliştirici belgeleri oluşturulur. Bileşenin çalışma prensipleri ve gereksinimleri açıklanır. Kod dokümantasyonu da unutulmaz.",
    },
    {
      color: "teal",
      title: "Dağıtım ve Sürdürme",
      icon: GrDeploy,
      content:
        " Bileşen canlı ortama dağıtılır ve kullanıma hazır hale getirilir. Sürekli bakım ve güncelleme için bir sürdürme planı oluşturulur. Kullanıcı geri bildirimleri takip edilir ve sorunları gidermek için düzeltmeler yapılır.",
    },
  ];

  return (
    <Flex
      p={{ md: 5, lg: 10 }}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box px={8} py={20} mx="auto" borderRadius={"15px"}>
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <Center>
            <Flex direction={"column"} justifyContent={"center"} gap={3}>
              <Heading as="h2" fontSize={24} pos="relative">
                İş Sürecimiz
              </Heading>
            </Flex>
          </Center>

          <Box
            as="p"
            mt={4}
            maxW="3xl"
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            mx={{
              lg: "auto",
            }}
            color="gray.800"
            _dark={{
              color: "gray.200",
            }}
          >
            İş sürecimiz, projelerimizi başarılı bir şekilde tamamlamak için
            sekiz adımdan oluşmaktadır.
          </Box>
        </Box>

        <SimpleGrid
          columns={{
            base: 1,
            sm: 1,
            md: 2,
            lg: 4,
          }}
          spacingX={{
            base: 16,
            lg: 24,
          }}
          spacingY={20}
          mt={6}
        >
          {features.map((child) => (
            <div key={child.icon}>
              <Feature
                color={child.color}
                title={child.title}
                icon={child.icon}
              >
                {child.content}
              </Feature>
            </div>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

function OurWorkProcess() {
  return (
    <>
      <>
        <OurWorkProcessFeature />
      </>
    </>
  );
}

export default OurWorkProcess;
