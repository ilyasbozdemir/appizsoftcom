import React, { useEffect, useState } from "react";
import { services } from "../../../constants/services";
import MetaHead from "../../../configuration/MetaHead";
import Head from "next/head";
import { Center, Flex, Text } from "@chakra-ui/react";
import PagesBreadcrumb from "../../../components/shared/PagesBreadcrumb";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
const DOurServiceDetailCTA = ({ currentService }) => {
  const router = useRouter();

  let serviceType = services.find(
    (service) => service.id === currentService.id
  ).serviceCategory;

  const category = serviceType;

  serviceType =
    serviceType === "software"
      ? "Yazılım Hizmetleri"
      : "Dijital Pazarlama Hizmetleri";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // İlk renderda ekran boyutuna göre kontrol yapılır
    handleWindowSize();

    // Ekran boyutu değiştiğinde kontrol yapılır
    window.addEventListener("resize", handleWindowSize);

    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  const handleWindowSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  return (
    <>
      {isMobile && (
        <>
          <Flex
            as="section"
            h={180}
            bgGradient="linear(to-l, #667eea, #54BEC3)"
            w="100%"
            color="white"
            justify={"center"}
          >
            <Center>
              <Flex direction={"column"}>
                <Text fontSize={29}>{currentService.title}</Text>
                <Center>
                  <PagesBreadcrumb currentPage={currentService.title} isServiceDetail={true} />
                </Center>
              </Flex>
            </Center>
          </Flex>
        </>
      )}
      {!isMobile && (
        <>
          <Flex
            as="section"
            h={"350px"}
            bgGradient="linear(to-l, #667eea, #54BEC3)"
            w="100%"
            color="white"
            justify={"center"}
          >
            <Center>
              <Flex direction={"column"}>
                <Center>
                  <Text fontSize={65} fontWeight={"bold"}>
                    {currentService.title}
                  </Text>
                </Center>

                <Center>
                  <Breadcrumb
                    separator="•"
                    fontSize={20}
                    itemscope
                    itemtype="https://schema.org/BreadcrumbList"
                  >
                    <BreadcrumbItem
                      itemprop="itemListElement"
                      itemscope=""
                      itemtype="http://schema.org/ListItem"
                    >
                      <Link
                        href="/tr?ref=services-detail-page"
                        passHref
                        legacyBehavior
                      >
                        <a rel="home" itemprop="item">
                          Ana Sayfa
                        </a>
                      </Link>

                      <meta itemprop="position" content="1" />
                    </BreadcrumbItem>

                    <BreadcrumbItem
                      itemprop="itemListElement"
                      itemscope=""
                      itemtype="http://schema.org/ListItem"
                    >
                      <Link
                        href={"/tr/services?category=" + category}
                        passHref
                        legacyBehavior
                      >
                        <a
                          itemprop="itemListElement"
                          itemscope=""
                          itemtype="http://schema.org/ListItem"
                        >
                          Hizmetler
                        </a>
                      </Link>

                      <meta itemprop="position" content="2" />
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                      <Link href={"#"} passHref legacyBehavior>
                        <a
                          itemprop="itemListElement"
                          itemscope=""
                          itemtype="http://schema.org/ListItem"
                        >
                          <>{currentService.title}</>
                        </a>
                      </Link>

                      <meta itemprop="position" content="3" />
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Center>
              </Flex>
            </Center>
          </Flex>
        </>
      )}
    </>
  );
};
const DOurServiceDetailContent = () => {
  return <>DOurServiceDetailContent</>;
};

function OurServiceDetailPage({ service }) {
  let serviceType = services.find((s) => s.id === service.id).serviceCategory;

  const category = serviceType;

  serviceType =
    serviceType === "software"
      ? "Yazılım Hizmetleri"
      : "Dijital Pazarlama Hizmetleri";

  return (
    <>
      <Head>
        <title>
          {service.title} | {serviceType} • Appizsoft
        </title>
      </Head>

      <main>
        <DOurServiceDetailCTA currentService={service} />
        <DOurServiceDetailContent />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = services.map((service) => {
    return {
      params: {
        id: service.href,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const service = services.find((service) => service.href === id);

  return {
    props: {
      service: service,
    },
  };
}

export default OurServiceDetailPage;
