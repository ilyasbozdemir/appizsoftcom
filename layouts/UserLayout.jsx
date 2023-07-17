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
    <Box as="main" scrollBehavior={"smooth"}>
      <>
        <Box as={"header"} zIndex={1} position="sticky" top={0} right={0}>
          <Header
            onOpen={onOpen}
            isOpen={isOpen}
            onClose={onClose}
            onToggle={onToggle}
          />
        </Box>

        <Box as={"main"} zIndex={1}>
          {children}
        </Box>
        <Box zIndex={1} as="footer">
          <Footer />
        </Box>

        <ScrollToTop />
      </>
    </Box>
  );
}

export default UserLayout;
