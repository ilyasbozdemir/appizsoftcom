import React, { useEffect, useState } from "react";


function WindowTitleChanger() {
  const titles = [
    "Appizsoft • Özel Yazılım Geliştirme",
    "Appizsoft • Dijital Pazarlama",
    "Appizsoft • E-ticaret Çözümleri",
    "Appizsoft • Prodüksiyon & Tasarım",
    "Appizsoft • Oyun Tasarım",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.title = titles[currentIndex];
  }, [currentIndex]);
  return <></>;
}

export default WindowTitleChanger;
