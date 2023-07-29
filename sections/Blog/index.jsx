import {
  chakra,
  Box,
  Divider,
  Heading,
  Flex,
  Text,
  Button,
  Center,
  useColorModeValue,
  useBreakpointValue,
  Icon,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import { Router, useRouter } from "next/router";

const baseImagePath = "https://appizsoft-static-api.vercel.app";

const dataList = [
  {
    id: 1,
    title:
      "Yazılım Geliştirme Süreçlerinde DevOps Yaklaşımı: İş Birliği ve Süreç Otomasyonu",
    authorName: "ilyas",
    content: `Bu blog yazısında, yazılım geliştirme süreçlerinde DevOps yaklaşımının önemi ve getirdiği faydalar ele alınmaktadır. Yazılım geliştirme ve işletme ekipleri arasındaki iş birliğinin artırılması, süreç otomasyonunun uygulanması ve sürekli entegrasyon/dağıtım (CI/CD) prensiplerinin benimsenmesi, yazılım projelerinin daha hızlı, güvenilir ve sürekli bir şekilde teslim edilmesine yardımcı olmaktadır. Bu makalede, DevOps'un temel prensipleri, en iyi uygulamalar ve popüler araçlar hakkında bilgi bulabilirsiniz`,
    imageUrl: "/images/blog/blog.webp",
  },
  {
    id: 2,
    title: "Geleceğin Yazılım Geliştirme Trendleri",
    authorName: "murat",
    content: `Bu blog yazısı, yazılım geliştirme dünyasında hızla yayılan yapay zeka ve blokzincir teknolojilerinin gelecekteki rolüne odaklanmaktadır. Yapay zekanın, yazılım süreçlerini otomatikleştirmek, veri analizi ve öngörü yeteneklerini artırmak için nasıl kullanıldığını öğreneceksiniz. Aynı şekilde, blokzincirin verilerin güvenliği, şeffaflığı ve merkezi olmayan uygulamaların geliştirilmesi üzerindeki etkisi incelenecektir. Bu yazıda, geleceğin yazılım geliştirme trendlerini anlayarak, teknoloji dünyasında bir adım önde olmanız için bilgi edineceksiniz.`,
    imageUrl: "/images/blog/blog-2.webp",
  },
];

function Blog() {
  return (
    <>
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading
            as="h2"
            fontSize={{ base: 20, md: 22, lg: 24, xl: 26 }}
            pos="relative"
          >
            Teknoloji ve İş Dünyasıyla İlgili Güncel Haberler
          </Heading>
        </Flex>
      </Center>

      <>
        <BlogCards />
      </>
    </>
  );
}

const BlogCards = () => {
  const router = useRouter();
  return (
    <Box mt={25} cursor={"grab"}>
      <Swiper
        spaceBetween={30}
        slidesPerView={useBreakpointValue({
          base: 1,
          md: 1,
          lg: 2,
          xl: 3,
        })}
      >
        {dataList.map((blog) => {
          return (
            <SwiperSlide key={blog.id}>
              <Flex
                p={5}
                w="full"
                alignItems="center"
                justifyContent="center"
                direction={"column"}
              >
                <Flex>
                  <Image
                    src={blog.imageUrl}
                    alt="Blog Image"
                    height={350}
                    width={450}
                    style={{
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    loader={({ src, width, quality }) => {
                      return `${baseImagePath}${src}?w=${width}&q=${
                        quality || 75
                      }`;
                    }}
                  />
                </Flex>
                <Flex
                  mt={15}
                  fontFamily={"Montserrat"}
                  direction={"column"}
                  cursor={"pointer"}
                >
                  <Text fontWeight={"extrabold"} fontSize={20}>
                    {blog.title}
                  </Text>
                  <Text mt={15}>{blog.content}</Text>
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <HStack fontFamily={"fantasy"} mt={15}>
        <Icon as={HiMiniArrowLongRight} boxSize={35} />
        <Link href={"/tr/blog"}>
          <Text fontSize={25} cursor={"pointer"}>
            Daha Fazla
          </Text>
        </Link>
      </HStack>
    </Box>
  );
};

export default Blog;
