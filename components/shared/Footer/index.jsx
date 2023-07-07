import {
  Box,
  Center,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import SosyalMediaIcon from "../SosyalMediaIcon";

import Logo from "../Logo";
import { site } from "../../../constants/site";

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
        <Flex p={20} gap={15} direction={{ base: "column", md: "row" }}>
          <Center
            as={Flex}
            direction={"column"}
            itemScope
            itemType="http://schema.org/Organization"
          >
            <Logo isLink={false} s={{ h: 125, w: 250 }} />
            <Box pt={".5rem"}>
              <Text
                fontSize={15}
                fontFamily={"montserrat-extra-bold"}
                color={useColorModeValue("gray.500", "gray.500")}
              >
                Dijital Başarı İçin Appizsoft
              </Text>
            </Box>

            <Box
              mt={5}
              pt={".5rem"}
              itemScope
              itemType="http://schema.org/ContactPoint"
            >
              <Text
                fontSize={15}
                fontFamily={"montserrat-extra-bold"}
                color={useColorModeValue("gray.500", "gray.500")}
                itemProp="telephone"
              >
                <a itemProp="email" href={`mailto:${site.telephone}`}>
                  {site.telephone}
                </a>
              </Text>
            </Box>
            <Box pt={".5rem"}>
              <Text
                fontSize={15}
                fontFamily={"montserrat-extra-bold"}
                color={useColorModeValue("gray.500", "gray.500")}
                itemScope
                itemType="http://schema.org/ContactPoint"
              >
                <a itemProp="email" href={`mailto:${site.mailAddress}`}>
                  {site.mailAddress}
                </a>
              </Text>
            </Box>

            <Box
              as={Flex}
              pt={".5rem"}
              itemScope
              itemType="https://schema.org/PostalAddress"
              fontSize={15}
              fontFamily={"montserrat-extra-bold"}
              color={useColorModeValue("gray.500", "gray.500")}
              gap={3}
            >
              <Text as={"span"} itemProp="streetAddress">
                {site.address.streetAddress}
              </Text>
              <Text as={"span"} itemProp="addressLocality">
                {site.address.addressLocality}
              </Text>
              <Text as={"span"} itemProp="addressRegion">
                {site.address.addressRegion}
              </Text>
              <Text as={"span"} itemProp="postalCode">
                {site.address.postalCode}
              </Text>
              <Text as={"span"} itemProp="addressCountry">
                {site.address.addressCountry}
              </Text>
            </Box>
          </Center>

          <Center
            as={Flex}
            direction={"column"}
            itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement"
          >



          </Center>
          
        </Flex>

        <Center>
          <FooterData />
        </Center>
      </Box>
    </>
  );
};

const Footer = () => {
  return (
    <Flex direction={"column"} as='footer'>
      <FooterTopContent />
      <FooterContent />
    </Flex>
  );
};

export default Footer;
