import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import {
  GitHubIcon,
  GoogleIcon,
  TwitterIcon,
} from "./ProviderIcons";

const providers = [
  {
    name: "Google",
    icon: <GoogleIcon boxSize="5" />,
    _hover: {
      bg: "rgba(66, 133, 244, 0.2)", // Hafif mavi arka plan rengi
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // Hafif gölge efekti
      color: "#4285F4", // Mavi renkli metin
    },
  },
  {
    name: "Twitter",
    icon: <TwitterIcon boxSize="5" />,
    _hover: {
      bg: "rgba(29, 161, 242, 0.2)", // Hafif mavi arka plan rengi
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // Hafif gölge efekti
      color: "#1DA1F2", // Mavi renkli metin
    },
  },
  {
    name: "GitHub",
    icon: <GitHubIcon boxSize="5" />,
    _hover: {
      bg: "rgba(36, 41, 46, 0.2)", // Hafif gri arka plan rengi
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", // Hafif gölge efekti
      color: "#24292E", // Gri renkli metin
    },
  },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="tertiary" spacing="4" width="full">
    {providers.map(({ name, icon, _hover }) => (
      <Button key={name} width="full" _hover={_hover}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
