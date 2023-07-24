import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";

function SSS() {
  const sss = [
    {
      Question:
        "Yazılım Hizmetleri için Paket Satın Aldıktan Sonra İade Süreciniz Var mı?",
      Answer:
        "Evet, müşteri memnuniyetini önemsiyoruz ve satın alınan yazılım hizmetleri için iade sürecimiz mevcuttur. Eğer satın aldığınız paketle ilgili herhangi bir nedenle memnun kalmazsanız, hizmetinizi alış tarihinden itibaren belirli bir süre içinde (örneğin 30 gün) iade edebilirsiniz. İade politikamız ve şartlar hakkında daha fazla bilgi için lütfen müşteri destek ekibimizle iletişime geçin.",
    },
    {
      Question: "Yazılım Projeleri için Ödeme Yöntemleri Nelerdir?",
      Answer:
        "Ödeme yöntemlerimiz çeşitlilik gösterir ve müşterilerimize kolaylık sağlamak amacıyla farklı seçenekler sunuyoruz. Kredi kartı, banka havalesi, PayPal gibi yaygın ödeme yöntemleriyle ödeme kabul ediyoruz. Ayrıca büyük projeler için taksitli ödeme seçenekleri de sunabiliyoruz. Ödeme süreci ve detayları için lütfen satış ekibimizle iletişime geçin.",
    },
    {
      Question: "Yazılım Geliştirme Süreci Ne Kadar Sürer?",
      Answer:
        "Yazılım geliştirme süreci projenin karmaşıklığına, özelliklere ve müşteri gereksinimlerine bağlı olarak değişebilir. Küçük ölçekli projeler birkaç hafta içinde tamamlanabilirken, daha büyük ve kapsamlı projeler aylar hatta yıllar sürebilir. Çevik metodoloji kullanarak süreci hızlandırmaya ve müşterilere düzenli güncellemeler sunmaya çalışıyoruz. Detaylı bir zaman çizelgesi için lütfen projenizi ve ihtiyaçlarınızı bize bildirin, size en uygun çözümü sunalım.",
    },
    {
      Question: "Yazılım Projelerinde Gizlilik ve Güvenlik Nasıl Sağlanıyor?",
      Answer:
        "Müşteri bilgilerini ve projeleri gizli tutma konusuna büyük önem veriyoruz. Tüm projelerimizde gizlilik sözleşmeleri imzalanır ve müşteri verileri güvenli bir şekilde korunur. Ayrıca, projelerimizde güvenlik önlemleri alarak veri sızıntılarına ve kötü amaçlı saldırılara karşı koruma sağlarız. Yazılım projelerinin tamamlanmasıyla birlikte müşteriye ait olan tüm kaynak kodları ve dosyalar teslim edilir ve firmamızda depolanmaz. Gizlilik ve güvenlik konusundaki detaylı politikalarımız hakkında daha fazla bilgi almak için lütfen bizimle iletişime geçin.",
    },
  ];

  return (
    <Box my={10}>
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: sss.map((item) => ({
                "@type": "Question",
                name: item.Question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.Answer,
                },
              })),
            }),
          }}
        />
      </Head>
      <Flex
        id="services-top"
        direction={"row"}
        justifyContent={"space-between"}
        px={{ base: 10, md: 20 }}
      >
        <Flex direction={"column"} justify={"center"} gap={3}>
          <Text>Sıkça Sorulan Sorular</Text>
          <Heading
            as="h2"
            pos="relative"
            _before={{
              content: `""`,
              borderRadius: "50px",
              position: "absolute",
              backgroundColor: "#000",
              width: "4px",
              height: "100%",
              left: "-10px",
            }}
          >
            SSS
          </Heading>
        </Flex>
      </Flex>

      <Flex align={"center"} justify={"center"} my={18}>
        <Container maxW={"7xl"}>
          <Accordion
            defaultIndex={[0]}
            width="100%"
            maxW="full"
            rounded="lg"
            allowToggle
            fontSize={25}
          >
            {sss.map((s, index) => (
              <>
                <AccordionItem fontSize={25}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            {s.Question}
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}> {s.Answer}</AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </>
            ))}
          </Accordion>
        </Container>
      </Flex>
    </Box>
  );
}

export default SSS;
