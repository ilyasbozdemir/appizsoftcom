import {
  ButtonGroup,
  Flex,
  Icon,
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
  FaPinterest,
  FaDribbble,
  FaBehance,
  FaVimeoV,
} from "react-icons/fa";

import { PiDevToLogoFill } from "react-icons/pi";

import { site } from "../../constants/site";
import Link from "next/link";

const LinkWrapper = (props) => {
  const { children, href, ...rest } = props;

  return (
    <Link
      href={href}
      passHref
      target="_blank"
      rel="noopener noreferrer nofollow"
      {...rest}
    >
      {children}
    </Link>
  );
};

const xTwitter = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        fill="white"
      />
    </svg>
  );
};

function SosyalMediaIcon() {
  return (
    <ButtonGroup
      as={Flex}
      flexWrap={"wrap"}
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
          icon={<Icon as={FaInstagram} fontSize="1.25rem" />}
          bg={"transparent"}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
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
          icon={<Icon as={FaFacebook} fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Facebook</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
        />
      </LinkWrapper>

      <LinkWrapper
        href={
          site.sosyalMediaLinks.find((item) => item.label === "twitter").link
        }
        itemProp="sameAs"
      >
        <IconButton
          aria-label="X-Twitter"
          cursor={"pointer"}
          icon={<Icon as={xTwitter} fontSize="1.25rem" color={"white"} />}
          bg={"transparent"}
          children={<VisuallyHidden>X -Twitter</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
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
          icon={<Icon as={FaYoutube} fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Youtube</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
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
          icon={<Icon as={FaLinkedin} fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Linkedin</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
        />
      </LinkWrapper>
      <LinkWrapper
        href={
          site.sosyalMediaLinks.find((item) => item.label === "pinterest").link
        }
        itemProp="sameAs"
      >
        <IconButton
          aria-label="Pinterest"
          cursor={"pointer"}
          icon={<Icon as={FaPinterest} fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Pinterest</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
        />
      </LinkWrapper>
      <LinkWrapper
        href={
          site.sosyalMediaLinks.find((item) => item.label === "dribbble").link
        }
        itemProp="sameAs"
      >
        <IconButton
          aria-label="LinDribbblekedin"
          cursor={"pointer"}
          icon={<Icon as={FaDribbble} fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Dribbble</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
        />
      </LinkWrapper>
      <LinkWrapper
        href={
          site.sosyalMediaLinks.find((item) => item.label === "behance").link
        }
        itemProp="sameAs"
      >
        <IconButton
          aria-label="Linkedin"
          cursor={"pointer"}
          icon={<Icon as={FaBehance} fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Pinterest</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
        />
      </LinkWrapper>
      <LinkWrapper
        href={site.sosyalMediaLinks.find((item) => item.label === "vimeo").link}
        itemProp="sameAs"
      >
        <IconButton
          aria-label="Linkedin"
          cursor={"pointer"}
          icon={<Icon as={FaVimeoV} fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>Vimeo</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
        />
      </LinkWrapper>
      <LinkWrapper
        href={site.sosyalMediaLinks.find((item) => item.label === "devto").link}
        itemProp="sameAs"
      >
        <IconButton
          aria-label="DevTo"
          cursor={"pointer"}
          icon={<Icon as={PiDevToLogoFill} fontSize="1.25rem" />}
          bg={"transparent"}
          children={<VisuallyHidden>DevTo</VisuallyHidden>}
          color={useColorModeValue("white", "white")}
          colorScheme="blue"
        />
      </LinkWrapper>
    </ButtonGroup>
  );
}

export default SosyalMediaIcon;
