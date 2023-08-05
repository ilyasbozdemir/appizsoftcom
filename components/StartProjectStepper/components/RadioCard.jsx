import { Box, useColorModeValue, useRadio } from "@chakra-ui/react";

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
        /*
   bg={state.isChecked && "teal.50"}
      border={state.isChecked && "1px solid"}
      borderColor={state.isChecked && "primary.100"}

*/

        _checked={{
          bg: "teal.50",
          color: useColorModeValue("gray.700", "gray.900"),
          border: "1px solid",
          borderColor: "primary.100",
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
