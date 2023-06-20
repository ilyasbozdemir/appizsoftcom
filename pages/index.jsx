import React from "react";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { detectBrowserLanguage } from "../lib/detectBrowserLanguage";

export default function HomePage() {
  const router = useRouter();

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

  return <></>;
}
