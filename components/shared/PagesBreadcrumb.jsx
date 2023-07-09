import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function PagesBreadcrumb({ currentPage }) {
  const router = useRouter();
  return (
    <>
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
          <Link href="/" passHref legacyBehavior>
            <a rel="home" itemprop="item">
              Ana Sayfa
            </a>
          </Link>

          <meta itemprop="position" content="1" />
        </BreadcrumbItem>

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
