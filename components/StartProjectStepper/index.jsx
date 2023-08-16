import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Icon,
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
import { BsFillCameraFill, BsFillRocketTakeoffFill } from "react-icons/bs";
import {
  MdWeb,
  MdOutlineProductionQuantityLimits,
  MdDesignServices,
} from "react-icons/md";
import { TfiMobile } from "react-icons/tfi";
import { SiPytest } from "react-icons/si";
import FileUpload from "./components/FileUpload";
import UrlInput from "./components/UrlInput";
import RadioCard from "./components/RadioCard";
import ServiceSelectionRadioCard from "./components/ServiceSelectionRadioCard";
import CheckboxCard from "./components/CheckboxCard";

import { FaBullhorn } from "react-icons/fa";

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
  const [selectedOption, setSelectedOption] = useState("new-website");

  const [projectType, setProjectType] = useState("individual");
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

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

  const filteredModules = modules.filter((module) =>
    module.support.includes(projectType)
  );

  const options = [
    {
      value: "new-website",
      title: "Yeni bir web sitesi istiyorum",
    },
    {
      value: "restore-website",
      title: "Bir web sitem var, yenilemek istiyorum",
    },
  ];

  const optionsProjectTypes = [
    {
      value: "individual",
      title: "Bireysel - Portfolyo",
    },
    {
      value: "institutional",
      title: "Kurumsal - Şirket",
    },
    {
      value: "e-commerce",
      title: "E-ticaret , Pazaryeri",
    },
    {
      value: "other",
      title: "Diğer",
    },
  ];

  const optionsCheckedItems = [
    {
      value: "individual",
      title: "Bireysel - Portfolyo",
    },
    {
      value: "institutional",
      title: "Kurumsal - Şirket",
    },
    {
      value: "e-commerce",
      title: "E-ticaret , Pazaryeri",
    },
    {
      value: "other",
      title: "Bir web sitem var, yenilemek istiyorum",
    },
  ];

  return (
    <Flex direction={"column"} gap={4} p={5}>
      <FormControl isRequired>
        <FormLabel>İhtiyacınızı hangisi karşılıyor?</FormLabel>

        <ServiceSelectionRadioCard
          name="websiteServices"
          options={options}
          setSelectedOption={setSelectedOption}
        />
      </FormControl>
      {selectedOption === "new-website" && (
        <>
          <FormControl isRequired>
            <FormLabel>
              Websitesi için hangisi sizin ihtiyacınızı karşılıyor
            </FormLabel>
            <ServiceSelectionRadioCard
              name="setProjectTypeServices"
              options={optionsProjectTypes}
              setSelectedOption={setProjectType}
            />
          </FormControl>

          <FormControl>
            <FormLabel>
              Eğer varsa yeni web sitenizde modül ihityaçlarınız nelerdir?
            </FormLabel>

            <CheckboxCard
              options={filteredModules}
              setCheckedItems={setCheckedItems}
            />
          </FormControl>

          <FileUpload
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        </>
      )}
      {selectedOption === "restore-website" && (
        <>
          <UrlInput />

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
  const options = [
    {
      value: "ios-platfrom",
      title: "App Store (iOS",
    },
    {
      value: "android-platfrom",
      title: "Google Play Store (Android)",
    },
    {
      value: "all-platform",
      title: "Tümü",
    },
  ];
  return (
    <Flex direction={"column"} gap={4}>
      <FormControl isRequired>
        <FormLabel>
          Projenizin hangi platformlarda yer almasını istiyorsunuz?
        </FormLabel>

        <ServiceSelectionRadioCard
          name="SelectPlatform"
          options={options}
          setSelectedOption={setPlatform}
        />
      </FormControl>
    </Flex>
  );
};

const StartupSolutionsComponent = () => {
  const [value, setValue] = React.useState("");
  const [services, setServices] = React.useState([
    {
      val: "business-idea-validation",
      title: "İş Fikri Doğrulama",
    },
    {
      val: "market-research-analysis",
      title: "Pazar Araştırması ve Analizi",
    },
    {
      val: "product-prototype-development",
      title: "Ürün Prototip Geliştirme",
    },
    {
      val: "minimum-viable-product",
      title: "Minimum Olası Ürün (MVP) Geliştirme",
    },
    {
      val: "user-interface-design",
      title: "Kullanıcı Arayüzü Tasarımı",
    },
    {
      val: "web-mobile-development",
      title: "Web ve Mobil Uygulama Geliştirme",
    },
    {
      val: "cloud-infrastructure-setup",
      title: "Bulut Altyapı Kurulumu",
    },
    {
      val: "user-feedback-analytics",
      title: "Kullanıcı Geri Bildirimleri ve Analitiği",
    },
    {
      val: "marketing-strategy",
      title: "Pazarlama Stratejisi ve Planlaması",
    },
    {
      val: "sales-funnel-optimization",
      title: "Satış Hunisi Optimizasyonu",
    },
    {
      val: "growth-hacking",
      title: "Büyüme Odaklı Pazarlama (Growth Hacking)",
    },
    {
      val: "funding-assistance",
      title: "Finansman Destek ve Danışmanlık",
    },
    {
      val: "legal-compliance",
      title: "Yasal Uyumluluk ve Danışmanlık",
    },
    {
      val: "human-resources-solutions",
      title: "İnsan Kaynakları Çözümleri",
    },
    {
      val: "scaling-strategy",
      title: "Ölçeklendirme Stratejisi",
    },
    { val: "other", title: "Diğer" },
  ]);
  return (
    <Flex justifyContent={"center"} direction={"column"}>
      <FormControl isRequired>
        <FormLabel>İhtiyacınızı hangisi karşılıyor?</FormLabel>
        <CheckboxCard options={services} setCheckedItems={setValue} />
      </FormControl>
    </Flex>
  );
};

const ProductionComponent = () => {
  const [value, setValue] = React.useState("");
  const [services, setServices] = React.useState([
    {
      val: "digital-ad-production",
      title: "Dijital Reklam Prodüksiyonu",
    },
    {
      val: "promo-video-animation",
      title: "Tanıtım Videoları ve Animasyonlar",
    },
    {
      val: "corporate-video-production",
      title: "Kurumsal Videolar ve Şirket Tanıtımları",
    },
    {
      val: "educational-video-production",
      title: "Eğitim Videoları ve E-Öğrenme İçerikleri",
    },
    {
      val: "live-event-production",
      title: "Canlı Yayın ve Etkinlik Prodüksiyonu",
    },
    {
      val: "music-video-production",
      title: "Sanatsal Müzik Videoları ve Görsel Efektler",
    },
    {
      val: "radio-ad-production",
      title: "Radyo ve Sesli Reklam Prodüksiyonu",
    },
    {
      val: "podcast-production",
      title: "Podcast Prodüksiyon ve Ses Düzenlemesi",
    },
    {
      val: "3d-modeling-visualization",
      title: "3D Modelleme ve Görselleştirme Hizmetleri",
    },
    {
      val: "tv-web-series-production",
      title: "TV ve Online Dizi Prodüksiyonu",
    },
    {
      val: "digital-marketing-content",
      title: "Dijital Pazarlama Kampanyaları için Görsel İçerikler",
    },
    {
      val: "stage-design-visuals",
      title: "Sahne Tasarımı ve Görsel Şovlar",
    },
    {
      val: "product-presentation-videos",
      title: "Ürün Tanıtım Videoları ve Tanıtım Filmleri",
    },
    {
      val: "documentary-production",
      title: "Belgesel Yapım ve Belgesel İçerik Üretimi",
    },
    {
      val: "character-animation",
      title: "Karakter Tasarımı ve Animasyonları",
    },
    { val: "other", title: "Diğer" },
  ]);

  return (
    <Flex justifyContent={"center"} direction={"column"}>
      <FormControl isRequired>
        <FormLabel>İhtiyacınızı hangisi karşılıyor?</FormLabel>
        <CheckboxCard options={services} setCheckedItems={setValue} />
      </FormControl>
    </Flex>
  );
};
const CorporateIdentityStudyComponent = () => {
  const [value, setValue] = React.useState("");
  const [services, setServices] = React.useState([
    { val: "logo-design", title: "Logo Tasarımı" },
    { val: "business-card", title: "Kartvizit" },
    { val: "letterhead", title: "Antetli Kağıt" },
    { val: "envelope", title: "Diplomat Zarf" },
    { val: "company-folder", title: "Şirket Dosyalığı" },
    { val: "email-signature", title: "E-posta İmza" },
    { val: "invoice", title: "Fatura & İrsaliye" },
    { val: "table-flag", title: "Masa & Şirket Bayrağı" },
    { val: "watermark", title: "Filigran" },
    { val: "paper-bag", title: "Karton Çanta" },
    { val: "notebook-pad", title: "Bloknot & Küpnot" },
    { val: "cd-cover", title: "CD & Kapak" },
    { val: "usb-flash-drive", title: "USB Flash Bellek" },
    { val: "keychain", title: "Anahtarlık & Kokuluk" },
    { val: "badge", title: "Rozet & Arma" },
    { val: "pen-pencil", title: "Dolma & Kurşun Kalem" },
    { val: "agenda", title: "Ajanda" },
    { val: "mug-cup", title: "Fincan & Kupa Bardak" },
    { val: "napkin-wet-wipe", title: "Peçete & Islak Mendil" },
    { val: "shirt", title: "Gömlek & Tişört" },
    { val: "name-tag", title: "Yaka Kartı" },
    { val: "vehicle-design", title: "Araç Tasarımı" },
    { val: "wall-clock", title: "Duvar Saati" },
    { val: "indoor-signs", title: "Şirket içi Levhalar" },
    { val: "a4-box", title: "A4 Kutusu" },
    { val: "magazine-design", title: "Dergi Tasarımı" },
    { val: "catalog-brochure-design", title: "Katalog & Broşür Tasarımı" },
    { val: "ad-banner-design", title: "Reklam & Banner Tasarımı" },
    { val: "app-interface", title: "Uygulama Arayüz Tasarımı" },
    { val: "video-game-design", title: "Video Oyun Tasarımı" },
    { val: "packaging-label-design", title: "Ambalaj Etiket Tasarımı" },
    { val: "popup-store-design", title: "Popup Mağaza Tasarımı" },
    { val: "restaurant-menu-design", title: "Restoran Menü Tasarımı" },
    { val: "event-invitation-design", title: "Etkinlik Davetiye Tasarımı" },
    { val: "educational-app-design", title: "Eğitim Uygulama Tasarımı" },
    { val: "other", title: "Diğer" },
  ]);
  return (
    <Flex justifyContent={"center"} direction={"column"}>
      <FormControl isRequired>
        <FormLabel>İhtiyacınızı hangisi karşılıyor?</FormLabel>
        <CheckboxCard options={services} setCheckedItems={setValue} />
      </FormControl>
    </Flex>
  );
};
const TestOtomationComponent = () => {
  const [value, setValue] = React.useState("");
  const [services, setServices] = React.useState([
    {
      val: "test-strategy",
      title: "Test Stratejisi Geliştirme",
    },
    {
      val: "test-case-design",
      title: "Test Senaryo Tasarımı",
    },
    {
      val: "test-automation-framework",
      title: "Test Otomasyon Çerçevesi",
    },
    {
      val: "automated-testing-scripts",
      title: "Otomatik Test Scriptleri",
    },
    {
      val: "continuous-integration",
      title: "Sürekli Entegrasyon",
    },
    {
      val: "performance-testing",
      title: "Performans Testleri",
    },
    {
      val: "security-testing",
      title: "Güvenlik Testleri",
    },
    {
      val: "load-testing",
      title: "Yük Testleri",
    },
    {
      val: "mobile-app-testing",
      title: "Mobil Uygulama Testleri",
    },
    {
      val: "cross-browser-testing",
      title: "Çapraz Tarayıcı Testleri",
    },
    {
      val: "test-data-management",
      title: "Test Verisi Yönetimi",
    },
    {
      val: "test-environment-setup",
      title: "Test Ortamı Kurulumu",
    },
    {
      val: "defect-tracking",
      title: "Hata İzleme ve Takibi",
    },
    {
      val: "test-reporting",
      title: "Test Raporlama",
    },
    {
      val: "test-automation-tools",
      title: "Test Otomasyon Araçları",
    },
    { val: "other", title: "Diğer" },
  ]);
  return (
    <Flex justifyContent={"center"} direction={"column"}>
      <FormControl isRequired>
        <FormLabel>İhtiyacınızı hangisi karşılıyor?</FormLabel>
        <CheckboxCard options={services} setCheckedItems={setValue} />
      </FormControl>
    </Flex>
  );
};

const DigitalMarketingComponent = () => {
  const [value, setValue] = React.useState("");
  const [services, setServices] = React.useState([
    {
      val: "digital-marketing-strategy",
      title: "Dijital Pazarlama Stratejisi",
    },
    {
      val: "search-engine-optimization",
      title: "Arama Motoru Optimizasyonu (SEO)",
    },
    {
      val: "pay-per-click-advertising",
      title: "Tıklama Başına Ödeme Reklamcılığı (PPC)",
    },
    {
      val: "content-marketing",
      title: "İçerik Pazarlama",
    },
    {
      val: "social-media-marketing",
      title: "Sosyal Medya Pazarlama",
    },
    {
      val: "email-marketing",
      title: "E-posta Pazarlama",
    },
    {
      val: "influencer-marketing",
      title: "Etkileyici Pazarlama",
    },
    {
      val: "affiliate-marketing",
      title: "Satış Ortaklığı Pazarlama",
    },
    {
      val: "online-advertising",
      title: "Online Reklamcılık",
    },
    {
      val: "video-marketing",
      title: "Video Pazarlama",
    },
    {
      val: "web-analytics",
      title: "Web Analitiği",
    },
    {
      val: "conversion-rate-optimization",
      title: "Dönüşüm Oranı Optimizasyonu (CRO)",
    },
    {
      val: "marketing-automation",
      title: "Pazarlama Otomasyonu",
    },
    {
      val: "mobile-marketing",
      title: "Mobil Pazarlama",
    },
    {
      val: "customer-relationship-management",
      title: "Müşteri İlişkileri Yönetimi (CRM)",
    },
    { val: "other", title: "Diğer" },
  ]);
  return (
    <Flex justifyContent={"center"} direction={"column"}>
      <FormControl isRequired>
        <FormLabel>İhtiyacınızı hangisi karşılıyor?</FormLabel>
        <CheckboxCard options={services} setCheckedItems={setValue} />
      </FormControl>
    </Flex>
  );
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
      icon: BsFillCameraFill,
      dependenciesComponent: [ProductionComponent],
    },
    {
      id: 5,
      title: "UI / UX Tasarım Geliştirme",
      bg: "yellow",
      icon: MdDesignServices,
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
      icon: FaBullhorn,
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
      Component: SecondStep,
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
        <step.Component ref={ref} />
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
