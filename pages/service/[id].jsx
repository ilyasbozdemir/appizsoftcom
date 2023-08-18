import React, { useEffect, useState } from "react";
import { services } from "../../constants/services";
import MetaHead from "../../configuration/MetaHead";
import Head from "next/head";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import PagesBreadcrumb from "../../components/shared/PagesBreadcrumb";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { site } from "../../constants/site";

//sections
import WebDesignHero from "../../sections/serviceDetail/WebDesignPage";
import ECommerceSolutionsPage from "../../sections/serviceDetail/ECommerceSolutionsPage";
import StartupSolutions from "../../sections/serviceDetail/StartupSolutionsPage";
import MobileAppDevelopment from "../../sections/serviceDetail/MobileAppDevelopmentPage";
import GameDesign from "../../sections/serviceDetail/GameDesignPage";
import TestAutomation from "../../sections/serviceDetail/TestAutomationPage";
import Production from "../../sections/serviceDetail/ProductionPage";

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
                  <PagesBreadcrumb
                    currentPage={currentService.title}
                    isServiceDetail={true}
                  />
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

const RenderComponent = (props) => {
  const { loc } = props;

  switch (loc) {
    case "web-design-development":
      return <WebDesignHero />;
    case "e-commerce-solutions":
      return <ECommerceSolutionsPage />;
    case "startup-solutions":
      return <StartupSolutions />;
    case "mobile-app-development":
      return <MobileAppDevelopment />;
    case "game-design":
      return <GameDesign />;
    case "test-automation":
      return <TestAutomation />;
      case "production":
        return <Production />;
      
    default:
      return null;
  }
};

function OurServiceDetailPage({ service }) {
  let serviceType = services.find((s) => s.id === service.id).serviceCategory;

  const category = serviceType;

  serviceType =
    serviceType === "software"
      ? "Yazılım Hizmetleri"
      : "Dijital Pazarlama Hizmetleri";

  const publisher = `AppizSoft`;
  const title = `${service.title} | ${serviceType} • Appizsoft`;
  const desc = services.find((s) => s.id === service.id).metaDesc;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="alternate"
          hreflang="x-default"
          href={`${site.baseUrl}`}
        />

        <link rel="alternate" hreflang="tr" href={`${site.baseUrl}/${service.href}`} />
        <link rel="alternate" hreflang="en" href={`${site.baseUrl}/en/${service.href}`} />

        <link rel="canonical" href={`${site.baseUrl}/${service.href}`} />

        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={site.twImage} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${site.baseUrl}/services`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={site.ogImage} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />
      </Head>

      <Box>
        <DOurServiceDetailCTA currentService={service} />

        <RenderComponent loc={service.href} />
      </Box>
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
