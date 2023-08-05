import { Box, useRadio } from "@chakra-ui/react";

// 1. Create a component that consumes the `useRadio` hook
function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "primary.100",
          color: "white",
          borderColor: "teal.600",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}





export default RadioCard;
