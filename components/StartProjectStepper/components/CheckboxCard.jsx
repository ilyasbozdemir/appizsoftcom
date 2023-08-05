import {
  Box,
  chakra,
  Flex,
  Stack,
  Text,
  useCheckbox,
  useCheckboxGroup,
} from "@chakra-ui/react";

function CustomCheckbox(props) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      bg="teal.50"
      border="1px solid"
      borderColor="primary.100"
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="primary.100"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="primary.100" />}
      </Flex>
      <Text color="gray.700" {...getLabelProps()}>
        {props.value}
      </Text>
    </chakra.label>
  );
}

function CheckboxCard({ options, checkedItems, setCheckedItems }) {
 const handleCheckboxChange = () => {
    setCheckedItems(value)
  };
 
  const { value, getCheckboxProps } = useCheckboxGroup({
    onChange: handleCheckboxChange,
  });

  



  return (
    <Flex direction={"column"} gap={5}>
      {value.length === 1 && (
        <>
          <Text>Seçilen Modül: {value.sort().join("")}</Text>
        </>
      )}
      {value.length >= 2 && (
        <>
          <Text>Seçilen Modüller: {value.sort().join(", ")}</Text>
        </>
      )}

      <Flex
        direction={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        justify={{ base: "center", md: "start" }}
        gap={5}
      >
        {options.map((option) => {
          return (
            <>
              <CustomCheckbox
                key={option.val}
                {...getCheckboxProps({ value: option.title })}
              />
            </>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default CheckboxCard;
