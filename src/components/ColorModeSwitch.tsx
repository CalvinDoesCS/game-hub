import { FormLabel, HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        id="dark-mode"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <FormLabel htmlFor="dark-mode" mb="0">
        Dark Mode
      </FormLabel>
    </HStack>
  );
};

export default ColorModeSwitch;
