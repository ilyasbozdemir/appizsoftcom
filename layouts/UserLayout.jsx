import React from 'react'
import { Box, useDisclosure } from '@chakra-ui/react'
import Footer from '../components/shared/Footer'
import ScrollToTop from '../components/shared/ScrollToTop'
import Header from '../components/shared/Header'

function UserLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true)
        onClose()
      } else {
        setIsMobile(false)
        onOpen()
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize() // initial check on mount

    return () => window.removeEventListener('resize', handleResize)
  }, [onOpen, onClose])

  return (
    <Box >
      <>
        <Header onOpen={onOpen} />
        <Box>{children}</Box>
        <ScrollToTop />
        <Footer />
      </>
    </Box>
  )
}

export default UserLayout
