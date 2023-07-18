import { ChakraProvider } from "@chakra-ui/react";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import ErrorLayout from "../layouts/ErrorLayout";

import theme from "../src/theme";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      duration: 1000,
      once: true,
      easing: "ease-out-back",
    });
    AOS.refresh();
  }, []);


  const [scrollPositions, setScrollPositions] = useState({});

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      // Sayfa değiştiğinde scroll konumunu kaydetmek
      setScrollPositions((prevPositions) => ({
        ...prevPositions,
        [url]: window.scrollY,
      }));
    };

    const handleRouteChangeComplete = () => {
      // Scroll konumunu geri yükleme
      const scrollPosition = scrollPositions[router.pathname];
      if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
      } else {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [scrollPositions]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Sayfa yeniden yüklendiğinde veya kapatıldığında scroll konumunu kaydetmek
      const currentPath = router.pathname;
      const currentScrollPosition = window.scrollY;
      setScrollPositions((prevPositions) => ({
        ...prevPositions,
        [currentPath]: currentScrollPosition,
      }));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  

  return (
    <>
      <>
        {[401, 403, 404, 500, 501].includes(statusCode) ? (
          <>
            <ErrorLayout statusCode={statusCode} />
          </>
        ) : (
          <ChakraProvider theme={theme} resetCSS>
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
