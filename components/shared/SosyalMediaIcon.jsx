import { ButtonGroup, IconButton, VisuallyHidden } from "@chakra-ui/react";
import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { site } from "../../constants/site";

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      rounded={"full"}
      w={15}
      h={15}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

function SosyalMediaIcon() {


  const socialLogo = site.sosyalMediaLinks.map((s) => s);
  return (
    <>
      <ButtonGroup>
        <IconButton
          as="i"
          cursor={"pointer"}
          aria-label="Instagram"
          icon={<FaInstagram fontSize="1.25rem" />}
          _hover={{ bg: "#657786", color: " white" }}
          bg={"transparent"}
          children={<VisuallyHidden>Instagram</VisuallyHidden>}
        />
        <IconButton
          as="i"
          cursor={"pointer"}
          aria-label="Facebook"
          icon={<FaFacebook fontSize="1.25rem" />}
          _hover={{ bg: "#657786", color: " white" }}
          bg={"transparent"}
          children={<VisuallyHidden>Facebook</VisuallyHidden>}
        />

        <IconButton
          as="i"
          aria-label="FaTwitter"
          cursor={"pointer"}
          icon={<FaTwitter fontSize="1.25rem" />}
          _hover={{ bg: "#657786", color: " white" }}
          bg={"transparent"}
          children={<VisuallyHidden>Twitter</VisuallyHidden>}
        />
          <IconButton
          as="i"
          aria-label="Linkedin"
          cursor={"pointer"}
          icon={<FaYoutube fontSize="1.25rem" />}
          _hover={{ bg: "#657786", color: " white" }}
          bg={"transparent"}
          children={<VisuallyHidden>Youtube</VisuallyHidden>}
        />
        
        <IconButton
          as="i"
          aria-label="Linkedin"
          cursor={"pointer"}
          icon={<FaLinkedin fontSize="1.25rem" />}
          _hover={{ bg: "#657786", color: " white" }}
          bg={"transparent"}
          children={<VisuallyHidden>Linkedin</VisuallyHidden>}
        />
      </ButtonGroup>
    </>
  );
}

export default SosyalMediaIcon;
