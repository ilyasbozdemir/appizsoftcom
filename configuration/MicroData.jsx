import React from 'react'

function MicroData({ data }) {
  return (
    <>
    <Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `
          <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "${data.type}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${data.url}"
            },
            "headline": "${data.title}",
            "image": [
              "${data.image}"
            ],
            "datePublished": "${data.datePublished}",
            "dateModified": "${data.dateModified}",
            "author": {
              "@type": "Person",
              "name": "${data.author}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "${data.publisher}",
              "logo": {
                "@type": "ImageObject",
                "url": "${data.logoUrl}",
                "width": "${data.logoWidth}",
                "height": "${data.logoHeight}"
              }
            },
            "description": "${data.description}"
          }
          </script>
        `,
      }}
    />
  </Head>
    </>
  )
}

export default MicroData