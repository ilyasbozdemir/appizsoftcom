import { useEffect } from "react";
import { useRouter } from "next/router";
import { detectBrowserLanguage } from "../lib/detectBrowserLanguage";

import en from "../locales/en";
import tr from "../locales/tr";
export default function HomePage() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  
  useEffect(() => {
    // Tarayıcı dilini al
    const browserLanguage = detectBrowserLanguage(["en", "tr"]);
    if (browserLanguage.startsWith("tr")) {
      router.push(`/tr/`);
    }
    if (browserLanguage.startsWith("en")) {
      router.push(`/en/`);
    }

  }, []);



}
