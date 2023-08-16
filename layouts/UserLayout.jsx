import React, { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  CloseButton,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Footer from "../components/shared/Footer";
import ScrollToTop from "../components/shared/ScrollToTop";
import Header from "../components/shared/Header";
import dynamic from "next/dynamic";
const LazyReactJoyride = dynamic(() => import("react-joyride"));
import { tourSteps } from "../components/TourSteps";
import TawkToChat from "../components/TawkToChat";

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
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [onOpen, onClose]);

  const [isMounted, setIsMounted] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(true);

  React.useEffect(() => {
    setIsMounted(true);

    const hasSeenTour = localStorage.getItem("hasSeenTour");

    if (hasSeenTour) {
      setIsTourOpen(hasSeenTour === "true" ? false : true);
    }
  }, []);

  const handleJoyrideCallback = (data) => {
    if (data.type === "tour:status") {
      localStorage.setItem("hasSeenTour", true);
    }
  };
  return (
    <Box as="main" scrollBehavior={"smooth"}>
      <Flex>
        <AlertDevMode />
      </Flex>

      <Box as={"header"}>
        <Header
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          onToggle={onToggle}
        />
      </Box>
      <Box>
        {/*
    {isMounted && (
          <LazyReactJoyride
            steps={tourSteps}
            run={isTourOpen}
            continuous={true}
            callback={handleJoyrideCallback}
            showProgress={true}
          />
        )}
  */}

        {children}
      </Box>
      <Box as="footer">
        <Footer />
      </Box>

      <TawkToChat />
    </Box>
  );
}

function AlertDevMode() {
  return (
    <Alert status="info">
      <AlertIcon />
      <Box>
        <AlertDescription>
          Sitemiz şu an yapım aşamasındadır. Güncellemeler devam ediyor.
          Son Güncelleme: <Text fontFamily={'verdana'}>16.08.2023</Text>
        </AlertDescription>
      </Box>
    </Alert>
  );
}

export default UserLayout;
