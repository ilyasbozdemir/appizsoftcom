import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  SimpleGrid,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Wrap,
  WrapItem,
  useRadio,
  useRadioGroup,
  useSteps,
  Input,
  useColorModeValue,
  chakra,
  useColorMode,
  RadioGroup,
  Stack,
  Radio,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdWeb, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { PiBasket } from "react-icons/pi";
import { TfiMobile } from "react-icons/tfi";
import { SiPytest } from "react-icons/si";
import { FaPenNib } from "react-icons/fa";

function RadioServiceCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const { service } = props;
  const input = getInputProps();
  const checkbox = getRadioProps();
  const { colorMode, toggleColorMode } = useColorMode();

  const [boxShadow, setBoxShadow] = useState("");

  useEffect(() => {
    if (colorMode === "dark") {
      setBoxShadow(
        "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
      );
    } else if (colorMode === "light") {
      setBoxShadow(
        "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px;"
      );
    }
  }, [colorMode]);

  return (
    <Box as="label" w="full" h={"auto"} onClick={null}>
      <input {...input} />

      <Flex
        {...checkbox}
        userSelect={"none"}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        //borderColor={`${service.bg}.500`}
        _checked={{
          bg: `${service.bg}.500`,
          color: "white",
          boxShadow: { boxShadow },
        }}
        direction={"column"}
        justifyContent={"center"}
        align={"center"}
        p={5}
        w="full"
      >
        <Icon as={service.icon} boxSize={20} />

        {props.children}
      </Flex>
    </Box>
  );
}

const WebSiteComponent = () => {
  const [value, setValue] = React.useState("");
  const [projectType, setProjectType] = React.useState("");

  const [modules, setModules] = React.useState([
    { val: "user-management", title: "Kullanıcı Yönetimi" },
    { val: "email-subscription", title: "E-posta Abonelik" },
    { val: "image-gallery", title: "Resim Galerisi" },
    { val: "comments-feedback", title: "Yorum ve Geribildirim" },
    { val: "search-functionality", title: "Arama Fonksiyonu" },
    { val: "social-media-sharing", title: "Sosyal Medya Paylaşım" },
    { val: "e-commerce", title: "E-ticaret" },
    { val: "google-analytics", title: "Google Analytics Entegrasyonu" },
    { val: "seo-optimization", title: "SEO Optimizasyonu" },
    { val: "contact-form", title: "İletişim Formu" },
    { val: "about-us-page", title: "Hakkımızda Sayfası" },
    { val: "blog-module", title: "Blog Modülü" },
    { val: "faq-module", title: "Sıkça Sorulan Sorular (FAQ) Modülü" },
    { val: "language-support", title: "Dil Desteği" },
    { val: "security-module", title: "Güvenlik Modülü" },
  ]);
  
  return (
    <Flex direction={"column"} gap={4}>
      <FormControl isRequired>
        <FormLabel>İhtiyacınızı hangisi karşılıyor?</FormLabel>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="new-website">Yeni bir web sitesi istiyorum</Radio>
            <Radio value="restore-website">
              Bir web sitem var, yenilemek istiyorum
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {value === "new-website" && (
        <>
          <FormControl isRequired>
            <FormLabel>
              Websitesi için hangisi sizin ihtiyacınızı karşılıyor
            </FormLabel>
            <RadioGroup onChange={setProjectType} value={projectType}>
              <Stack direction="row">
                <Radio value="individual">Bireysel - Portfolyo </Radio>
                <Radio value="institutional">Kurumsal - Şirket</Radio>
                <Radio value="e-commerce">E-ticaret , Pazaryeri</Radio>
                <Radio value="other">Diğer</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>
              Projenizde olmasını istediğiniz dil seçenekleri nelerdir?
            </FormLabel>

            <CheckboxGroup>
              <Stack spacing={[1, 5]} direction={["column", "row"]}>
                <Checkbox value="tr">Türkçe</Checkbox>
                <Checkbox value="de">Almanca</Checkbox>
                <Checkbox value="en">İngilizce</Checkbox>
                <Checkbox value="fr">Fransızca</Checkbox>
                <Checkbox value="es">İspanyolca</Checkbox>

                <Checkbox value="other">Diğer</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
          <FormControl>
            <FormLabel>
              Eğer varsa yeni web sitenizde modül ihityaçlarınız nelerdir?
            </FormLabel>

            <CheckboxGroup>
              <Stack
                spacing={[1, 5]}
                direction={["column", "row"]}
                flexWrap={"wrap"}
              >
                {modules.map((module) => (
                  <>
                    <Checkbox value={module.val}>{module.title}</Checkbox>
                  </>
                ))}

                <Checkbox value="other">Diğer</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>
        </>
      )}
      {value === "restore-website" && <>---</>}
    </Flex>
  );
};

const MobileAppComponent = () => {
  return <Box>MobileApp</Box>;
};

const StartupSolutionsComponent = () => {
  return <Box>StartupSolutions</Box>;
};
const ProductionComponent = () => {
  return <Box>ProductionComponent</Box>;
};
const CorporateIdentityStudyComponent = () => {
  return <Box>CorporateIdentityStudyComponent</Box>;
};
const TestOtomationComponent = () => {
  return <Box>TestOtomationComponent</Box>;
};

const LogoStudyComponent = () => {
  return <Box>LogoStudyComponent</Box>;
};
const DigitalMarketingComponent = () => {
  return <Box>DigitalMarketingComponent</Box>;
};

const FirstStep = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [service, setService] = useState(null);

  useEffect(() => {
    const service = services.find((s) => s.title === selectedService);
    setService(service);

    console.table(service);
  }, [selectedService]);

  const services = [
    {
      id: 1,
      title: "Web Sitesi",
      bg: "red",
      icon: MdWeb,
      dependenciesComponent: [WebSiteComponent],
    },
    {
      id: 2,
      title: "Mobil Uygulama",
      bg: "gray",
      icon: TfiMobile,
      dependenciesComponent: [MobileAppComponent],
    },
    {
      id: 9,
      title: "Startup  Çözümleri",
      bg: "blue",
      icon: BsFillRocketTakeoffFill,
      dependenciesComponent: [StartupSolutionsComponent],
    },

    {
      id: 4,
      title: "Prodüksiyon",
      bg: "purple",
      icon: MdOutlineProductionQuantityLimits,
      dependenciesComponent: [ProductionComponent],
    },
    {
      id: 5,
      title: "Kurumsal Kimlik Çalışması",
      bg: "yellow",
      icon: "",
      dependenciesComponent: [CorporateIdentityStudyComponent],
    },
    {
      id: 6,
      title: "Test Otomasyon",
      bg: "green",
      icon: SiPytest,
      dependenciesComponent: [TestOtomationComponent],
    },
    {
      id: 7,
      title: "Logo Çalışması",
      bg: "pink",
      icon: FaPenNib,
      dependenciesComponent: [LogoStudyComponent],
    },
    {
      id: 8,
      title: "Dijital Pazarlama",
      bg: "red",
      icon: "",
      dependenciesComponent: [DigitalMarketingComponent],
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Services",
    defaultValue: services[0],
    onChange: setSelectedService,
  });

  const group = getRootProps();

  return (
    <>
      <Flex direction={"column"}>
        <Wrap {...group} p={5} id={"start-project-services-list"}>
          {services.map((service) => {
            const radio = getRadioProps({ value: service.title });
            return (
              <WrapItem
                key={service.id}
                w={{ base: "100%", md: 250 }}
                my={3}
                mx={5}
              >
                <RadioServiceCard {...radio} service={service}>
                  {service.title}
                </RadioServiceCard>
              </WrapItem>
            );
          })}
        </Wrap>

        <Flex mt={15} direction={"column"} id={"service-desc-content"} gap={5}>
          {service &&
            service.dependenciesComponent.map((Component) => (
              <React.Fragment key={Component}>
                <Component />
              </React.Fragment>
            ))}
        </Flex>
      </Flex>
    </>
  );
};

const SecondStep = () => {
  const [messages, setMessages] = useState("");
  return (
    <>
      <FormControl p={7}>
        <FormLabel>
          Bize projenizden / ihtiyaçlarınızdan bahseder misiniz?
        </FormLabel>
        <Input
          as="textarea"
          value={messages}
          onChange={(e) => {
            setMessages(e.target.value);
          }}
          h={150}
        />
      </FormControl>
    </>
  );
};

const ThirdStep = () => {
  return <>ThirdStep</>;
};
const FourthStep = () => {
  return <>FourthStep</>;
};

function StartProjectStepper() {
  const ref = useRef(null);

  const steps = [
    {
      id: 1,
      title: "Hizmet Seçimi",
      description: "Hangi alanda hizmet almak istiyorsunuz",
      Component: FirstStep,
    },

    {
      id: 2,
      title: "İletişim Bilgileri",
      description: "İletişime geçebileceğimiz bilgilerinizi bize iletin.",
      Component: ThirdStep,
    },
    {
      id: 3,
      title: "Teşekkürler!",
      description:
        "Başvurunuz başarıyla alındı. Size en kısa sürede dönüş yapacağız..",
      Component: FourthStep,
    },
  ];

  const {
    activeStep,
    goToNext,
    goToPrevious,
    getStatus,
    isCompleteStep,
    isIncompleteStep,
    isActiveStep,
  } = useSteps({
    index: 1,
    count: steps.length,
  });

  const step = steps.find((s) => activeStep === s.id) || null;

  return (
    <Box textAlign={"center"}>
      <Box border={"1px solid #ded"} borderRadius={"15px"} p={6} m={3} gap={3}>
        <Flex
          direction={"column"}
          justify={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          p={3}
        >
          <Text fontWeight={"bold"}>{step?.title}</Text>
          <Text>{step?.description}</Text>

          <Stepper index={activeStep} mt={4}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Flex>
      </Box>
      <Flex w={"full"} direction={"column"} m={4} borderRadius={"15px"}>
        <step.Component /*ref={ref} */ />
      </Flex>
      <ButtonGroup p={3} m={3}>
        <Button
          p={6}
          colorScheme="gray"
          onClick={() => {
            goToPrevious();
          }}
          isDisabled={activeStep === 1}
        >
          Geri
        </Button>
        <Button
          p={6}
          colorScheme="blue"
          onClick={() => {
            goToNext();
          }}
          isDisabled={activeStep === steps.length}
        >
          İleri
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default StartProjectStepper;
