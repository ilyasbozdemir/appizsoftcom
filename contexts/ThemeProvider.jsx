import { useTheme } from "@emotion/react";
import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const chakraTheme = useTheme();

  return (
    <ThemeContext.Provider value={{ chakraTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useContext };
