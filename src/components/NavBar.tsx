import {
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput.tsx";
const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image boxSize="75px" src="src/assets/logo.webp" alt="logo" />
        <SearchInput></SearchInput>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
