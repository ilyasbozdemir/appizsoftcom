import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  Button,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import SosyalMediaIcon from "../SosyalMediaIcon";

const FooterTopContent = () => {
  const router = useRouter();
  const isTeklifAlPage =
    router.asPath.endsWith("/teklif-al") ||
    router.pathname.endsWith("/teklif-al");

  return (
    <>
      {isTeklifAlPage ? (
        <></>
      ) : (
        <Center>
          <Stack
            as={Box}
            bg={"#D3E6FE"}
            color={"#fff"}
            p={"64px"}
            spacing={4}
            borderRadius={"15px"}
            w={"95%"}
          >
            <Flex direction={"column"}>
              <Text color={"#141b25"} fontSize={18} fontFamily={"Inter"}>
                Biz senin için buradayız
              </Text>
              <Text
                color={"#151b25"}
                fontSize={30}
                fontFamily={"Inter"}
                as={"h4"}
              >
                Fikir aşamasından tasarıma, koddan teslimata.
              </Text>

              <Text color={"#151b25"} w={{ base: "", md: 650 }} fontSize={18}>
                Her büyüklükteki ekip için kullanıcı merkezli uygulamalar
                geliştiren tam hizmet veren bir dijital ajansız.
                Teknolojilerimiz, ortaklarımız için heyecan verici yeni
                olanaklar yaratıyor.
              </Text>
            </Flex>
            <Box>
              <Button
                colorScheme="blue"
                variant="outline"
                fontSize={"md"}
                onClick={() => {
                  router.push(`${lang}/teklif-al`);
                }}
              >
                Bizimle bir proje başlatın 🚀
              </Button>
            </Box>
          </Stack>
        </Center>
      )}
    </>
  );
};

const FooterContent = () => {
  const router = useRouter();
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  let yearText;
  if (currentYear > startYear) {
    yearText = `${startYear}-${currentYear}`;
  } else {
    yearText = `${startYear}`;
  }

  const FooterData = () => {
    return <Text> {currentYear} Appizsoft &copy; Tüm Hakları Saklıdır</Text>;
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        as={Stack}
        p={8}
      >
     
          <FooterData />
          <SosyalMediaIcon />

          {/*
          
          coming soon :)
          */}
 
      </Box>
    </>
  );
};

const Footer = () => {
  return (
    <Flex direction={"column"}>
      <FooterTopContent />

      <FooterContent />
    </Flex>
  );
};

export default Footer;
