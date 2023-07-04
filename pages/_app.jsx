import { ChakraProvider } from "@chakra-ui/react";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import ErrorLayout from "../layouts/ErrorLayout";

import theme from "../src/theme";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps, statusCode }) {
  const data = {};
  let Layout;
  const router = useRouter();
  if (router.pathname === "/") {
    Layout = UserLayout;
  } else if (router.pathname.startsWith("/admin")) {
    Layout = AdminLayout;
  } else {
    Layout = UserLayout;
  }

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-in-out",
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
          <ChakraProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        )}
      </>

      <></>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { Component, ctx } = appContext;
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const { res, err } = ctx;
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;

  return { pageProps, statusCode };
};

export default MyApp;
