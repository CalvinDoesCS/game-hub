import {
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image boxSize="75px" src="src/assets/logo.webp" alt="logo" />
        <InputGroup>
          <InputLeftElement>
            <AiOutlineSearch />
          </InputLeftElement>
          <Input placeholder="Search games... " />
        </InputGroup>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
