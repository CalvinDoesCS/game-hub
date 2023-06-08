import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Image,
  InputLeftElement,
  Spacer,
  Switch,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  return (
    <>
      <Flex alignItems="flex-start" minWidth="max-content">
        <Box boxSize="sm" flexGrow={1}>
          <Image boxSize="75px" src="src/assets/logo.webp" alt="logo" />
        </Box>
        <Spacer />
        <InputGroup flexGrow={5}>
          <InputLeftElement>
            <AiOutlineSearch />
          </InputLeftElement>
          <Input placeholder="Search games... " />
        </InputGroup>
        <FormControl display="flex" alignItems="center" flexGrow={1}>
          <Switch id="dark-mode" />
          <FormLabel htmlFor="dark-mode" mb="0">
            Dark Mode
          </FormLabel>
        </FormControl>
      </Flex>
    </>
  );
};

export default NavBar;
