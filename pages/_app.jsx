import { ChakraProvider } from "@chakra-ui/react";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";

import theme from "../src/theme";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
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
      {pageProps.statusCode ? (
        <>{/* <Page404 statusCode={pageProps.statusCode} /> */}</>
      ) : (
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      )}
    </>
  );
}

export default MyApp;
