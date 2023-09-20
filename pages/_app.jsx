import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const UserLayout = dynamic(() => import("../layouts/UserLayout"));
const AdminLayout = dynamic(() => import("../layouts/AdminLayout"));
const ErrorLayout = dynamic(() => import("../layouts/ErrorLayout"));
const EmptyLayout = dynamic(() => import("../layouts/EmptyLayout"));

import theme from "../src/theme";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps, session, statusCode }) {
  const data = {};
  let Layout;
  const router = useRouter();
  if (router.pathname === "/") {
    Layout = UserLayout;
  } else if (router.pathname.startsWith("/admin")) {
    Layout = AdminLayout;
  } else if (router.pathname === "/login") {
    Layout = EmptyLayout;
  } else {
    Layout = UserLayout;
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-back",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <>
        {[401, 403, 404, 500, 501].includes(statusCode) ? (
          <>
            <ErrorLayout statusCode={statusCode} />
          </>
        ) : (
          <>
            <ChakraProvider theme={theme} resetCSS>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ChakraProvider>
          </>
        )}
      </>

      <></>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { Component, ctx } = appContext;
  let pageProps = {};
  let session = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
    session = await Component.getInitialProps(ctx);
  }

  const { res, err } = ctx;
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;

  return { pageProps, session, statusCode };
};

export default MyApp;
