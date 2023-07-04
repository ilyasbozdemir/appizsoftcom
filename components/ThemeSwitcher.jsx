import { Icon, useColorMode } from "@chakra-ui/react";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import React, { useEffect, useState } from "react";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [icon, setIcon] = useState(colorMode === "dark" ?  SunIcon : MoonIcon);

  useEffect(() => {
    setIcon(colorMode === "dark" ?  SunIcon : MoonIcon);
  }, [colorMode]);

  const handleOnClick = () => {
    toggleColorMode();
    setIcon(colorMode === "dark" ? SunIcon : MoonIcon);

  };

  return (
    <>
      <Icon
        as={icon}
        onClick={handleOnClick}
        cursor={"pointer"}
        fontSize={"lg"}
      />
    </>
  );
}

export default ThemeSwitcher;
