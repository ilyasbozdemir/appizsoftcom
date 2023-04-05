import { useEffect, useState } from "react";
import { detectBrowserLanguage } from "../lib/detectBrowserLanguage";

export const useLanguage = () => {
  const [lang, setLang] = useState("");

  useEffect(() => {
    const browserLanguage = detectBrowserLanguage(["en", "tr"]);
    if (browserLanguage.startsWith("tr")) {
      setLang("tr");
    }
    if (browserLanguage.startsWith("en")) {
      setLang("en");
    }
  }, []);

  return lang;
};
