import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

function RadioServiceCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const { service } = props;
  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w="full" h={"auto"}>
      <input {...input} />
      <Flex
        {...checkbox}
        userSelect={"none"}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        borderColor={`${service.bg}.500`}
        _checked={{
          bg: `${service.bg}.500`,
          color: "white",
          borderColor: `${service.bg}.500`,
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

const FirstStep = () => {
  const services = [
    {
      id: 1,
      title: "Web",
      bg: "red",
      icon: "",
    },
    {
      id: 2,
      title: "Mobil Uygulama",
      bg: "gray",
      icon: "",
    },
    {
      id: 9,
      title: "Startup  Çözümleri",
      bg: "blue",
      icon: BsFillRocketTakeoffFill,
    },
    {
      id: 3,
      title: "E Ticaret",
      bg: "green",
      icon: "",
    },
    {
      id: 4,
      title: "Prodüksiyon",
      bg: "purple",
      icon: "",
    },
    {
      id: 5,
      title: "Kurumsal Kimlik Çalışması",
      bg: "yellow",
      icon: "",
    },
    {
      id: 6,
      title: "Test Otomasyon",
      bg: "blue",
      icon: "",
    },
    {
      id: 7,
      title: "Logo Çalışması",
      bg: "pink",
      icon: "",
    },
    {
      id: 8,
      title: "Dijital Pazarlama",
      bg: "red",
      icon: "",
    },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Services",
    defaultValue: services[0],
    onChange: console.log,
  });

  const group = getRootProps();

  const handleScrollToElement = () => {
    scroll.scrollTo("#next-prev-button-component", {
      duration: 500,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <Center>
      <Wrap {...group} p={5}>
        {services.map((service) => {
          const radio = getRadioProps({ value: service.title });
          return (
            <WrapItem
              key={service.id}
              w={{ base: "100%", md: 300 }}
              //onClick={handleScrollToElement}
            >
              <RadioServiceCard {...radio} service={service}>
                {service.title}
              </RadioServiceCard>
            </WrapItem>
          );
        })}
      </Wrap>
    </Center>
  );
};

const SecondStep = () => {
  const [messages, setMessages] = useState('');
  return (
    <>
      <FormControl p={5}>
        <FormLabel>
          Bize projenizden / ihtiyaçlarınızdan bahseder misiniz?
        </FormLabel>
        <Input as="textarea" value={messages} onChange={(e)=>{setMessages(e.target.value)}} h={150}/>
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
  const steps = [
    {
      id: 1,
      title: "Hizmet Seçimi",
      description: "Size sunulan hizmetler arasından tercih yapın.",
      component: <FirstStep />,
    },
    {
      id: 2,
      title: "Proje Açıklaması",
      description: "Projeleriniz hakkında bize daha fazla bilgi verin.",
      component: <SecondStep />,
    },
    {
      id: 3,
      title: "İletişim Bilgileri",
      description: "İletişime geçebileceğimiz bilgilerinizi bize iletin.",
      component: <ThirdStep />,
    },
    /* {
      id: 4,
      title: "Teşekkürler!",
      description:
        "Başvurunuz başarıyla alındı. Size en kısa sürede dönüş yapacağız..",
      component: <FourthStep />,
    },*/
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
    <Box>
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
              <Step key={index + "asfasdf"}>
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
      <Flex
        direction={"column"}
        m={4}
        border={"1px solid #ded"}
        borderRadius={"15px"}
        justify={"center"}
        align={"center"}
        justifyContent={"center"}
      >
        {step?.component}
      </Flex>
      <ButtonGroup p={3} m={3} id={"next-prev-button-component"}>
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
