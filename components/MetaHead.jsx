import Head from 'next/head';
import React from 'react';
function Meta({ pageTitle, description, keywords, author, publisher }) {

    return (
        <Head>
            <title>{pageTitle}</title>

            <meta charSet="utf-8" />
            <meta itemprop="name" content={pageTitle} />
            <meta itemprop="description" content={description} />
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="Turkish" />
            <meta name="revisit-after" content="3 days" />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author || `ilyas Bozdemir,bozdemir.ib70@gmail.com`} />
            <meta name="publisher" content={publisher || `ilyas Bozdemir`} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content="@Ilyasbzdmr70" />

            <meta name="og:title" content={pageTitle} />
            <meta name="og:description" content={description} />
            <meta name="og:type" content="website" />

        </Head>
    );
}

export default Meta;
