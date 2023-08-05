import React from "react";
import RadioCard from "./RadioCard";
import { Flex, useRadioGroup } from "@chakra-ui/react";

function ServiceSelectionRadioCard({name, options, setSelectedOption }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue: options[0],
    onChange: setSelectedOption,
  });
  const group = getRootProps();

  return (
    <>
      <Flex gap={5} {...group} direction={{ base: "column", md: "row" }}>
        {options.map((option) => {
          const radio = getRadioProps({ value: option.value });
          return (
            <RadioCard key={option.value} {...radio}>
              {option.title}
            </RadioCard>
          );
        })}
      </Flex>
    </>
  );
}

export default ServiceSelectionRadioCard;
