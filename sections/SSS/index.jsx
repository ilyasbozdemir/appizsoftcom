import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [nameSurname, setNameSurname] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const toast = useToast()
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
      <Center>
        <Flex direction={"column"} justifyContent={"center"} gap={3}>
          <Heading
            as="h2"
            fontSize={{ base: 20, md: 22, lg: 24, xl: 26 }}
            pos="relative"
          >
            Sıkça Sorulan Sorular
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={30}
            color={useColorModeValue("gray.500", "gray.200")}
          >
            Soru ve cevap
          </Text>
          <Text
            textAlign={"center"}
            fontSize={20}
            color={useColorModeValue("gray.500", "gray.200")}
            cursor={"pointer"}
            onClick={onOpen}
            _hover={{
              textDecoration: "underline",
            }}
          >
            Soru sor
          </Text>
        </Flex>
      </Center>

      <Flex align={"center"} justify={"center"} my={18}>
        <Container maxW={"7xl"}>
          <Accordion
            width="100%"
            maxW="full"
            rounded="lg"
            allowToggle
            fontSize={25}
          >
            {sss.map((s, index) => (
              <AccordionItem key={index} fontSize="18px">
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
            ))}
          </Accordion>
        </Container>
      </Flex>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bağlantıda Kalalım</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="small">
              Appizsoft ile ilgili tüm sorularınız için bizlere ulaşabilirsiniz.
              Bu sayfadaki soru cevap kısmını incelemenizi de öneririz. Sizden
              haber bekliyoruz!
            </Text>
            <FormControl my={5}>
              <InputGroup>
                <Input
                  type={"text"}
                  value={nameSurname}
                  onChange={(e) => {
                    setNameSurname(e.target.value);
                  }}
                  ref={initialRef}
                  placeholder="İsim Soyisim :"
                />
              </InputGroup>
            </FormControl>
            <FormControl my={5}>
              <InputGroup>
                <Input
                  type={"text"}
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  placeholder="Email Adresiniz"
                />
              </InputGroup>
            </FormControl>
            <FormControl my={5}>
              <InputGroup>
                <Input
                  type={"text"}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Mesajınız"
                />
              </InputGroup>
            </FormControl>
            <Flex justify={"center"}>
              <Button bg={'primary.100'} color={'white'} w={'full'}
              onClick={() =>
                toast({
                  title: 'Meajınız Başarıyla Alındı!',
                  description: "En kısa sürede dönüş yapacağız",
                  status: 'success',
                  position:'top',
                  duration: 2500,
                  isClosable: true,
                })
              }
              >Gönder</Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SSS;
