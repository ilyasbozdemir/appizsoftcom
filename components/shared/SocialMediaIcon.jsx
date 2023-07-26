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
    <ButtonGroup
      itemScope="itemscope"
      itemType="https://schema.org/Organization"
    >
      <LinkWrapper
        href={
          site.sosyalMediaLinks.find((item) => item.label === "instagram").link
        }
        itemProp="sameAs"
      >
        <IconButton
          cursor={"pointer"}
          aria-label="Instagram"
          icon={<FaInstagram fontSize="1.25rem" />}
          bg={"transparent"}
          color={useColorModeValue("white", "white")}
        />
        <VisuallyHidden aria-label="Instagram">Instagram</VisuallyHidden>
      </LinkWrapper>

      <LinkWrapper
        href={
          site.sosyalMediaLinks.find((item) => item.label === "facebook").link
        }
        itemProp="sameAs"
      >
        <IconButton
          cursor={"pointer"}
          aria-label="Facebook"
          icon={<FaFacebook fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Facebook</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
        />
      </LinkWrapper>

      <LinkWrapper
        href={
          site.sosyalMediaLinks.find((item) => item.label === "twitter").link
        }
        itemProp="sameAs"
      >
        <IconButton
          aria-label="FaTwitter"
          cursor={"pointer"}
          icon={<FaTwitter fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Twitter</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
        />
      </LinkWrapper>

      <LinkWrapper
        href={
          site.sosyalMediaLinks.find((item) => item.label === "youtube").link
        }
        itemProp="sameAs"
      >
        <IconButton
          aria-label="Linkedin"
          cursor={"pointer"}
          icon={<FaYoutube fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Youtube</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
        />
      </LinkWrapper>

      <LinkWrapper
        href={
          site.sosyalMediaLinks.find((item) => item.label === "linkedin").link
        }
        itemProp="sameAs"
      >
        <IconButton
          aria-label="Linkedin"
          cursor={"pointer"}
          icon={<FaLinkedin fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Linkedin</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
        />
      </LinkWrapper>
    </ButtonGroup>
  );
}

export default SosyalMediaIcon;
