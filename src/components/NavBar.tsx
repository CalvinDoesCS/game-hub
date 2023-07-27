import { Image, HStack } from "@chakra-ui/react";

interface Props {
  onSearch: (searchText: string) => void;
}

import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput.tsx";
const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding="10px">
        <Image boxSize="75px" src="src/assets/logo.webp" alt="logo" />
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
