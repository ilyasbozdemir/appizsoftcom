import { Icon, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [icon, setIcon] = useState(colorMode === "dark" ? SunIcon : MoonIcon);

  useEffect(() => {
    const channel = new BroadcastChannel("themeChannel");
    setIcon(colorMode === "dark" ? SunIcon : MoonIcon);

    const handleChannelMessage = (event) => {
      const { colorMode: newColorMode } = event.data;
      if (newColorMode !== colorMode) {
        toggleColorMode(newColorMode);
      }
    };

    channel.addEventListener("message", handleChannelMessage);

    return () => {
      channel.removeEventListener("message", handleChannelMessage);
    };
  }, [colorMode]);

  const channelBroadcast = () => {
    const channel = new BroadcastChannel("themeChannel");
    const newColorMode = colorMode === "light" ? "dark" : "light";
    channel.postMessage({ colorMode: newColorMode });
  };

  const handleToggleColorMode = () => {
    toggleColorMode();
    channelBroadcast();
  };

  return (
    <>
      <Icon
        as={icon}
        onClick={handleToggleColorMode}
        cursor="pointer"
        fontSize="lg"
      />
    </>
  );
}

export default ThemeSwitcher;
