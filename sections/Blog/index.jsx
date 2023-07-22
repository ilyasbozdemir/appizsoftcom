import {
  chakra,
  Box,
  Divider,
  Heading,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";

import Link from "next/link";

const dataList = [
  {
    id: 1,
    title:
      "Yazılım Geliştirme Süreçlerinde DevOps Yaklaşımı: İş Birliği ve Süreç Otomasyonu",
    authorName: "ilyas",
    content: `Bu blog yazısında, yazılım geliştirme süreçlerinde DevOps yaklaşımının önemi ve getirdiği faydalar ele alınmaktadır. Yazılım geliştirme ve işletme ekipleri arasındaki iş birliğinin artırılması, süreç otomasyonunun uygulanması ve sürekli entegrasyon/dağıtım (CI/CD) prensiplerinin benimsenmesi, yazılım projelerinin daha hızlı, güvenilir ve sürekli bir şekilde teslim edilmesine yardımcı olmaktadır. Bu makalede, DevOps'un temel prensipleri, en iyi uygulamalar ve popüler araçlar hakkında bilgi bulabilirsiniz`,
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    title: "Geleceğin Yazılım Geliştirme Trendleri",
    authorName: "murat",
    content: `Bu blog yazısı, yazılım geliştirme dünyasında hızla yayılan yapay zeka ve blokzincir teknolojilerinin gelecekteki rolüne odaklanmaktadır. Yapay zekanın, yazılım süreçlerini otomatikleştirmek, veri analizi ve öngörü yeteneklerini artırmak için nasıl kullanıldığını öğreneceksiniz. Aynı şekilde, blokzincirin verilerin güvenliği, şeffaflığı ve merkezi olmayan uygulamaların geliştirilmesi üzerindeki etkisi incelenecektir. Bu yazıda, geleceğin yazılım geliştirme trendlerini anlayarak, teknoloji dünyasında bir adım önde olmanız için bilgi edineceksiniz.`,
    imageUrl:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

function Blog() {
  return (
    <>
      <Box mx={3} display="flex" alignItems="center" mb={5}>
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
        <Box flex="1" textAlign="center">
          <Heading
            fontFamily={"Montserrat"}
            as="h2"
            fontSize={{ base: "24px", md: "26px", lg: "28px", xl: "32px" }}
          >
            Blog
          </Heading>
        </Box>
        <Divider flex="1" borderWidth="1px" borderColor="gray.300" />
      </Box>

      <>
        <BlogCards />
      </>
    </>
  );
}

const BlogCards = () => {
  return (
    <>
      {dataList.map((blog) => {
        return (
          <>
            <Flex p={50} w="full" alignItems="center" justifyContent="center">
              <Box
                bg="white"
                _dark={{
                  bg: "gray.800",
                }}
                mx={{
                  lg: 8,
                }}
                display={{
                  lg: "flex",
                }}
                maxW={{
                  lg: "5xl",
                }}
                shadow={{
                  lg: "lg",
                }}
                rounded={{
                  lg: "lg",
                }}
              >
                <Box
                  w={{
                    lg: "50%",
                  }}
                >
                  <Box
                    h={{
                      base: 64,
                      lg: "full",
                    }}
                    rounded={{
                      lg: "lg",
                    }}
                    bgSize="cover"
                    style={{
                      backgroundImage: `url(${blog.imageUrl})`,
                    }}
                  ></Box>
                </Box>

                <Box
                  py={12}
                  px={6}
                  maxW={{
                    base: "xl",
                    lg: "5xl",
                  }}
                  w={{
                    lg: "50%",
                  }}
                >
                  <chakra.h2
                    fontSize={{
                      base: "2xl",
                      md: "3xl",
                    }}
                    color="gray.800"
                    _dark={{
                      color: "white",
                    }}
                    fontWeight="bold"
                  >
                    {blog.title}
                  </chakra.h2>
                  <chakra.p
                    mt={4}
                    color="gray.600"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    {blog.content.substring(0,150)}...
                  </chakra.p>

                  <Box mt={8}>
                    <Link href={"#"} passHref>
                      <Text
                        bg="gray.900"
                        color="gray.100"
                        px={5}
                        py={3}
                        fontWeight="semibold"
                        rounded="lg"
                        _hover={{
                          bg: "gray.800",
                        }}
                      >
                        Devamını Oku
                      </Text>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </>
        );
      })}
    </>
  );
};

export default Blog;
