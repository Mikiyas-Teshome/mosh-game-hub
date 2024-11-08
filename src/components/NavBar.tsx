import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} alt="logo" boxSize="60px" />
      
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
// 412804fed10f44ffa2d45089bb74a638 