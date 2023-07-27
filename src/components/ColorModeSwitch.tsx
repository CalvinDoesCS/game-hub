import {
  Text,
  HStack,
  Switch,
  useColorMode,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        id="dark-mode"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap" mb="0">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
