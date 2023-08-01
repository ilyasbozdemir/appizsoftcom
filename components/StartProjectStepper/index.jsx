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
} from "@chakra-ui/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { BsFillRocketTakeoffFill } from "react-icons/bs";

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

const FirstStep = forwardRef((props, ref) => {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      id: 1,
      title: "Web Sitesi",
      bg: "red",
      icon: "",
    },
    {
      id: 3,
      title: "E Ticaret",
      bg: "green",
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

  const handleClick = () => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Services",
    defaultValue: services[0],
    onChange: setSelectedService,
  });

  const group = getRootProps();

  return (
    <>
      <Flex direction={"column"}>
        <Wrap {...group} p={5}>
          {services.map((service) => {
            const radio = getRadioProps({ value: service.title });
            return (
              <WrapItem
                key={service.id}
                w={{ base: "100%", md: 250 }}
                my={3}
                mx={5}
                onClick={handleClick}
              >
                <RadioServiceCard {...radio} service={service}>
                  {service.title}
                </RadioServiceCard>
              </WrapItem>
            );
          })}
        </Wrap>

        <Flex direction={"column"}>
     
        </Flex>
      </Flex>
    </>
  );
});

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
        <step.Component ref={ref} />
      </Flex>
      <ButtonGroup p={3} m={3} ref={ref}>
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
