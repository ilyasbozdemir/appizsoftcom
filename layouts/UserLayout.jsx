import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import Footer from "../components/shared/Footer";
import ScrollToTop from "../components/shared/ScrollToTop";
import Header from "../components/shared/Header";
import Head from "next/head";

function UserLayout({ children }) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        onClose();
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // initial check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, [onOpen, onClose]);

  return (
    <Box>
      <>
        <Header
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          onToggle={onToggle}
        />

        {isOpen === false && (
          <>
            <Box>{children}</Box>
            <ScrollToTop />
            <Footer />
          </>
        )}
        {isOpen === true && (
          <>
            <Head>
              <title>{"Appizsoft • Özel Yazılım Geliştirme"}</title>
            </Head>
          </>
        )}
      </>
    </Box>
  );
}

export default UserLayout;
