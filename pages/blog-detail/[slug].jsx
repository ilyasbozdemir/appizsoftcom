import React from "react";
import { blogData } from "../../constants/blogData";
import { Center, Container } from "@chakra-ui/react";
import Head from "next/head";
import { site } from "../../constants/site";

function BlogDetailPage({ service }) {
  const publisher = `AppizSoft`;
  const title = service.title + ` • Appizsoft`;
  const desc = service.content.substring(0,125);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="publisher" content={publisher} />
        <meta name="robots" content={"index, follow"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:site" content="@appizsoftcom" />
        <meta name="twitter:creator" content="@appizsoftcom" />
        <meta name="twitter:image" content={service.imageUrl} />
        <meta name="twitter:image:alt" content={site.title} />

        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${site.baseUrl}/portfolio`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={site.title} />
        <meta property="og:image" content={service.imageUrl} />
        <meta property="og:image:alt" content={site.title} />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:locale" content="tr_TR" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${site.baseUrl}/${blogData.slug}`,
              },
              headline: blogData.title,
              description: blogData.desc,
              image: {
                "@type": "ImageObject",
                url: blogData.imageUrl,
                width: 1012,
                height: 506,
              },
              datePublished: blogData.publishDate,
              dateModified: blogData.modifyDate,
              author: {
                "@type": "Person",
                name: blogData.authorName,
              },
              publisher: {
                "@type": "Organization",
                name: site.title,
                logo: {
                  "@type": "ImageObject",
                  url: site.logoUrl,
                  width: 600,
                  height: 60,
                },
              },
            }),
          }}
        />
      </Head>

      <Center my={10}>
        <Container maxW="container.lg"  >
          Blog Detail Page (Coming Soon)
        </Container>
      </Center>
    </>
  );
}

export async function getStaticPaths() {
  const paths = blogData.map((data) => {
    return {
      params: {
        slug: data.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const service = blogData.find((service) => service.slug === slug);
  return {
    props: {
      service,
    },
  };
}

export default BlogDetailPage;