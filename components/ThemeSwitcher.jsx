import { Icon, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [darkIcon, setDarkIcon] = useState(BsMoon);
  const [lightIcon, setLightIcon] = useState(BsSun);

  const [icon, setIcon] = useState(colorMode === "dark" ? lightIcon : darkIcon);

  useEffect(() => {
    const channel = new BroadcastChannel("themeChannel");
    setIcon(colorMode === "dark" ? lightIcon : darkIcon);

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
  const iconAnimation = {
    scale: [1, 0.8, 1.2, 1],
    transition: {
      duration: 0.3,
    },
  };

  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={iconAnimation} whileTap={iconAnimation}
      >
        <Icon
          as={icon === darkIcon ? BsMoon : BsSun}
          onClick={handleToggleColorMode}
          cursor="pointer"
          fontSize="lg"
        />
      </motion.div>
    </>
  );
}

export default ThemeSwitcher;
