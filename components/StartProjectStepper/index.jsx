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
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdWeb, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { PiBasket } from "react-icons/pi";
import { TfiMobile } from "react-icons/tfi";
import { SiPytest } from "react-icons/si";
import { FaPenNib } from "react-icons/fa";
import axios from "axios";

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
  const [url, setUrl] = React.useState("");
  const [urlErrorMessage, setUrlErrorMessage] = useState(false);
  const [isUrlValid, setIsUrlValid] = useState(false);
  const isError = url === "";

  const [modules, setModules] = React.useState([
    {
      val: "user-management",
      title: "Kullanıcı Yönetimi",
      support: ["individual", "institutional"],
    },
    {
      val: "email-subscription",
      title: "E-posta Abonelik",
      support: ["individual"],
    },
    {
      val: "image-gallery",
      title: "Resim Galerisi",
      support: ["individual", "porpolyo"],
    },
    {
      val: "comments-feedback",
      title: "Yorum ve Geribildirim",
      support: ["individual", "institutional"],
    },
    {
      val: "search-functionality",
      title: "Arama Fonksiyonu",
      support: ["individual", "institutional"],
    },
    {
      val: "social-media-sharing",
      title: "Sosyal Medya Paylaşım",
      support: ["individual", "institutional"],
    },
    {
      val: "google-analytics",
      title: "Google Analytics Entegrasyonu",
      support: ["individual", "institutional"],
    },
    {
      val: "seo-optimization",
      title: "SEO Optimizasyonu",
      support: ["individual", "institutional", "porpolyo"],
    },
    {
      val: "contact-form",
      title: "İletişim Formu",
      support: ["individual", "institutional", "porpolyo"],
    },
    {
      val: "about-us-page",
      title: "Hakkımızda Sayfası",
      support: ["individual", "institutional"],
    },
    {
      val: "blog-module",
      title: "Blog Modülü",
      support: ["individual", "institutional", "porpolyo"],
    },
    {
      val: "faq-module",
      title: "Sıkça Sorulan Sorular (FAQ) Modülü",
      support: ["individual", "institutional"],
    },
    {
      val: "meeting-module",
      title: "Randevu Modülü",
      support: ["individual", "institutional"],
    },
    {
      val: "language-support",
      title: "Dil Desteği",
      support: ["individual", "institutional", "porpolyo"],
    },
    {
      val: "security-module",
      title: "Güvenlik Modülü",
      support: ["individual", "institutional", "porpolyo"],
    },
    {
      val: "newsletter-subscription",
      title: "Bülten Aboneliği",
      support: ["individual", "institutional", "porpolyo"],
    },
    {
      val: "event-calendar",
      title: "Etkinlik Takvimi",
      support: ["individual", "porpolyo"],
    },
    {
      val: "video-player",
      title: "Video Oynatıcı",
      support: ["individual", "porpolyo"],
    },
    {
      val: "photo-editor",
      title: "Fotoğraf Editörü",
      support: ["individual", "porpolyo"],
    },
    {
      val: "file-upload",
      title: "Dosya Yükleme",
      support: ["individual", "porpolyo"],
    },
    {
      val: "basket-pay-manager",
      title: "Sepet ve Ödeme Yönetimi",
      support: ["e-commerce"],
    },
    {
      val: "product-list-filter",
      title: "Ürün Listeleme ve Filtreleme",
      support: ["e-commerce"],
    },
    {
      val: "category-manager",
      title: "Kategori Yönetimi",
      support: ["e-commerce"],
    },
  ]);

  const [projectType, setProjectType] = useState("individual");
  const filteredModules = modules.filter((module) =>
    module.support.includes(projectType)
  );
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
  };

  return (
    <Flex direction={"column"} gap={4}>
      <FormControl isRequired>
        <FormLabel>İhtiyacınızı hangisi karşılıyor?</FormLabel>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction={{ base: "column", md: "row" }}>
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
              <Flex
                justifyContent={"space-between"}
                direction={{ base: "column", md: "row" }}
              >
                <Radio value="individual">Bireysel - Portfolyo </Radio>
                <Radio value="institutional">Kurumsal - Şirket</Radio>
                <Radio value="e-commerce">E-ticaret , Pazaryeri</Radio>
                <Radio value="other">Diğer</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>
              Eğer varsa yeni web sitenizde modül ihityaçlarınız nelerdir?
            </FormLabel>

            <CheckboxGroup>
              <Stack
                justifyContent={"space-between"}
                spacing={[1, 5]}
                direction={["column", "row"]}
                flexWrap={"wrap"}
              >
                {filteredModules.map((module) => (
                  <Checkbox key={module.val} value={module.val}>
                    {module.title}
                  </Checkbox>
                ))}

                <Checkbox value="other">Diğer</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Projenize ait dosya varsa ekleyiniz.</FormLabel>

            <Flex
              direction="column"
              align="center"
              justify="center"
              p="6"
              border="2px dashed #ccc"
              borderRadius="8px"
              cursor="pointer"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <FormLabel htmlFor="fileInput">
                <Text fontSize="lg">
                  Projenize ait dosya varsa ekleyiniz veya sürükleyip bırakınız.
                </Text>
              </FormLabel>
              <Input
                id="fileInput"
                type="file"
                display={"none"}
                onChange={handleFileChange}
              />
            </Flex>

            {selectedFile ? (
              <Flex
                justifyContent={"flex-start"}
                gap={5}
                mt={10}
                direction="column"
                p="6"
              >
                <Flex direction={"column"}>
                  <Text fontSize="lg" fontWeight="bold">
                    Seçili dosya
                  </Text>

                  <Text fontSize="lg" fontWeight="bold">
                    • {selectedFile.name}
                  </Text>
                </Flex>
                <Box>
                  <Button colorScheme="red" onClick={handleRemoveClick}>
                    Kaldır
                  </Button>
                </Box>
              </Flex>
            ) : (
              <></>
            )}
          </FormControl>
        </>
      )}
      {value === "restore-website" && (
        <>
          <FormControl w={{ base: "full", md: "450px" }} isInvalid={isError}>
            <FormLabel>Mevcut web sitenizin adresi nedir?</FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon children="https://" />
              <Input
                placeholder="example: appizsoft.com"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
            </InputGroup>
            <FormErrorMessage>{urlErrorMessage}</FormErrorMessage>
          </FormControl>
          <FormControl w={{ base: "full", md: "450px" }}>
            <FormLabel>
              Mevcut web sitenizde memnun olmadığınız noktalar:
            </FormLabel>
            <Input as="textarea" maxH={100} h={100} />
          </FormControl>
          <FormControl w={{ base: "full", md: "450px" }}>
            <FormLabel>
              Mevcut sitenize ek olarak olmasını istediğiniz özellikler:
            </FormLabel>
            <Input as="textarea" maxH={100} h={100} />
          </FormControl>
        </>
      )}
    </Flex>
  );
};

const MobileAppComponent = () => {
  const [platform, setPlatform] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
  };

  return (
    <Flex direction={"column"} gap={4}>
      <FormControl isRequired>
        <FormLabel>
          Projenizin hangi platformlarda yer almasını istiyorsunuz?
        </FormLabel>
        <RadioGroup onChange={setPlatform} value={platform}>
          <Flex
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
          >
            <Radio value="ios-platfrom">App Store (iOS)</Radio>
            <Radio value="android-platfrom">Google Play Store (Android)</Radio>
            <Radio value="all-platform">E-ticaret , Pazaryeri</Radio>
          </Flex>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Projenize ait dosya varsa ekleyiniz.</FormLabel>

        <Flex
          direction="column"
          align="center"
          justify="center"
          p="6"
          border="2px dashed #ccc"
          borderRadius="8px"
          cursor="pointer"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <FormLabel htmlFor="fileInput">
            <Text fontSize="lg">
              Projenize ait dosya varsa ekleyiniz veya sürükleyip bırakınız.
            </Text>
          </FormLabel>
          <Input
            id="fileInput"
            type="file"
            display={"none"}
            onChange={handleFileChange}
          />
        </Flex>

        {selectedFile ? (
          <Flex
            justifyContent={"flex-start"}
            gap={5}
            mt={10}
            direction="column"
            p="6"
          >
            <Flex direction={"column"}>
              <Text fontSize="lg" fontWeight="bold">
                Seçili dosya
              </Text>

              <Text fontSize="lg" fontWeight="bold">
                • {selectedFile.name}
              </Text>
            </Flex>
            <Box>
              <Button colorScheme="red" onClick={handleRemoveClick}>
                Kaldır
              </Button>
            </Box>
          </Flex>
        ) : (
          <></>
        )}
      </FormControl>
    </Flex>
  );
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

        <Flex
          mt={15}
          direction={"column"}
          id={"service-desc-content"}
          gap={5}
          justify={"center"}
          justifyContent={"center"}
        >
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
