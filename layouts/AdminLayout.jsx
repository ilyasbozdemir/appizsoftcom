import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

function AdminLayout({ children }) {
  return (
    <Box as="main">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Box>
  );
}

export default AdminLayout;
