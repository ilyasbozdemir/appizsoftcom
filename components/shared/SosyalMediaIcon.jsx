import {
  ButtonGroup,
  IconButton,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { site } from "../../constants/site";
import Link from "next/link";

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

const LinkWrapper = (props) => {
  const { children, href, ...rest } = props;

  return (
    <Link
      href={href}
      passHref
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </Link>
  );
};

function SosyalMediaIcon() {
  return (
    <>
      <ButtonGroup
        itemscope="itemscope"
        itemtype="https://schema.org/Organization"
      >
        <LinkWrapper
          href={
            site.sosyalMediaLinks.find((item) => item.label === "instagram")
              .link
          }
          itemprop="sameAs"
        >
          <IconButton
            as="i"
            cursor={"pointer"}
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.25rem" />}
            bg={"transparent"}
            color={useColorModeValue("", "white")}
          />
          <VisuallyHidden aria-label="Instagram">Instagram</VisuallyHidden>
        </LinkWrapper>

        <LinkWrapper
          href={
            site.sosyalMediaLinks.find((item) => item.label === "facebook").link
          }
          itemprop="sameAs"
        >
          <IconButton
            as="i"
            cursor={"pointer"}
            aria-label="Facebook"
            icon={<FaFacebook fontSize="1.25rem" />}
            bg={"transparent"}
            children={<VisuallyHidden>Facebook</VisuallyHidden>}
            color={useColorModeValue("", "white")}
          />
        </LinkWrapper>

        <LinkWrapper
          href={
            site.sosyalMediaLinks.find((item) => item.label === "twitter").link
          }
          itemprop="sameAs"
        >
          <IconButton
            as="i"
            aria-label="FaTwitter"
            cursor={"pointer"}
            icon={<FaTwitter fontSize="1.25rem" />}
            bg={"transparent"}
            children={<VisuallyHidden>Twitter</VisuallyHidden>}
            color={useColorModeValue("", "white")}
          />
        </LinkWrapper>

        <LinkWrapper
          href={
            site.sosyalMediaLinks.find((item) => item.label === "youtube").link
          }
          itemprop="sameAs"
        >
          <IconButton
            as="i"
            aria-label="Linkedin"
            cursor={"pointer"}
            icon={<FaYoutube fontSize="1.25rem" />}
            bg={"transparent"}
            children={<VisuallyHidden>Youtube</VisuallyHidden>}
            color={useColorModeValue("", "white")}
          />
        </LinkWrapper>

        <LinkWrapper
          href={
            site.sosyalMediaLinks.find((item) => item.label === "linkedin").link
          }
          itemprop="sameAs"
        >
          <IconButton
            as="i"
            aria-label="Linkedin"
            cursor={"pointer"}
            icon={<FaLinkedin fontSize="1.25rem" />}
            bg={"transparent"}
            children={<VisuallyHidden>Linkedin</VisuallyHidden>}
            color={useColorModeValue("", "white")}
          />
        </LinkWrapper>
      </ButtonGroup>
    </>
  );
}

export default SosyalMediaIcon;
