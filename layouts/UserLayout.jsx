import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import Footer from "../components/shared/Footer";
import ScrollToTop from "../components/shared/ScrollToTop";
import Header from "../components/shared/Header";

function UserLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        onClose();
      } else {
        setIsMobile(false);
        onOpen();
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // initial check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, [onOpen, onClose]);

  return (
    <Box
      maxW="1200px"
      margin="0 auto"
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      minHeight="100vh"
    >
      <Box w={isMobile ? "100%" : "250px"} zIndex="100">
        <Header />
      </Box>

      <Box flex="1">
        <Box>{children}</Box>
      </Box>

      <Box w={isMobile ? "100%" : "250px"} zIndex="100">
        <ScrollToTop />
        <Footer />
      </Box>
    </Box>
  );
}

export default UserLayout;
