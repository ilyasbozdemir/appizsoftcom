import React, { useEffect, useState } from "react";


function WindowTitleChanger() {
  const titles = [
    "Fake Company Name • Özel Yazılım Geliştirme",
    "Fake Company Name • Dijital Pazarlama",
    "Fake Company Name • E-ticaret Çözümleri",
    "Fake Company Name • Prodüksiyon & Tasarım",
    "Fake Company Name • Oyun Tasarım",
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
}

export default WindowTitleChanger;
