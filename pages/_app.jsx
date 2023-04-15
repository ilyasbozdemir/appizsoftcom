import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layouts/UserLayout";
import theme from "../src/theme";
import App from "next/app";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    try {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
    } catch (err) {
      console.error(err);
      ctx.statusCode = err.statusCode || 500;
      pageProps.statusCode = ctx.statusCode;
    }

    return { pageProps };
  }

  componentDidMount() {
    AOS.init({
      duration: 500
      ,
      once: true,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }

  render() {
    const { Component, pageProps } = this.props;

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
}

export default MyApp;
