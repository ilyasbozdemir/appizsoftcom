import React, { useEffect } from "react";
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

  return (
    <>
      <Flex
        as="section"
        h={"350px"}
        bg="primary"
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
  );
};
const DOurServiceDetailContent = () => {
  return <>DOurServiceDetailContent</>;
};

function OurServiceDetailPage({ service }) {

  let serviceType = services.find(
    (s) => s.id === service.id
  ).serviceCategory;

  const category = serviceType;

  serviceType =
    serviceType === "software"
      ? "Yazılım Hizmetleri"
      : "Dijital Pazarlama Hizmetleri";

  return (
    <>
      <Head>
        <title> {service.title} | {serviceType} • Appizsoft</title>
      </Head>

      <main>
        <DOurServiceDetailCTA currentService={service} />
        <DOurServiceDetailContent  />
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
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const service = services.find((service) => service.href === id);

  return {
    props: {
      service: service || null,
    },
  };
}

export default OurServiceDetailPage;
