import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function PagesBreadcrumb({ currentPage, isServiceDetail = false }) {
  const router = useRouter();
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
      <Breadcrumb
        separator={<ChevronRightIcon />}
        fontSize={{ base: 15, md: 20 }}
        itemscope
        itemtype="https://schema.org/BreadcrumbList"
      >
        <BreadcrumbItem
          itemprop="itemListElement"
          itemscope=""
          itemtype="http://schema.org/ListItem"
        >
          <Link href="/" passHref legacyBehavior>
            <a rel="home" itemprop="item">
              Ana Sayfa
            </a>
          </Link>

          <meta itemprop="position" content="1" />
        </BreadcrumbItem>

        {isServiceDetail && (
          <BreadcrumbItem
            itemprop="itemListElement"
            itemscope=""
            itemtype="http://schema.org/ListItem"
          >
            <Link href="/tr/services" passHref legacyBehavior>
              <a rel="home" itemprop="item">
                Hizmetler
              </a>
            </Link>

            <meta itemprop="position" content="1" />
          </BreadcrumbItem>
        )}

        <BreadcrumbItem isCurrentPage>
          <Link href="#" passHref legacyBehavior>
            <a
              href="#"
              itemprop="itemListElement"
              itemscope=""
              itemtype="http://schema.org/ListItem"
            >
              {currentPage}
            </a>
          </Link>

          <meta itemprop="position" content="2" />
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default PagesBreadcrumb;
