import { ChevronRightIcon, Icon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
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
        separator={
          <Icon
            as={ChevronRightIcon}
            color={useBreakpointValue({ base: "black", md: "white" })}
            boxShadow={useBreakpointValue({ base: "sm", md: "md" })}
          />
        }
        fontSize={{ base: 15, md: 20 }}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        textShadow={useBreakpointValue({
          base: ``,
          md: `0 2px 1px #000, 
        -1px 3px 1px #000, 
        -2px 5px 1px #000;`,
        })}
      >
        <BreadcrumbItem
          itemProp="itemListElement"
          itemScope=""
          itemType="http://schema.org/ListItem"
        >
          <Link href="/" passHref legacyBehavior>
            <a rel="home" itemProp="item">
              Ana Sayfa
            </a>
          </Link>

          <meta itemProp="position" content="1" />
        </BreadcrumbItem>

        {isServiceDetail && (
          <BreadcrumbItem
            itemprop="itemListElement"
            itemScope=""
            itemType="http://schema.org/ListItem"
          >
            <Link href="/tr/services" passHref legacyBehavior>
              <a rel="home" itemProp="item">
                Hizmetler
              </a>
            </Link>

            <meta itemProp="position" content="1" />
          </BreadcrumbItem>
        )}

        <BreadcrumbItem isCurrentPage>
          <Link href="#" passHref legacyBehavior>
            <a
              href="#"
              itemProp="itemListElement"
              itemScope=""
              itemType="http://schema.org/ListItem"
            >
              {currentPage}
            </a>
          </Link>

          <meta itemProp="position" content="2" />
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
}

export default React.memo(PagesBreadcrumb);
