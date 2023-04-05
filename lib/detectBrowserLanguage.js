export const detectBrowserLanguage = (supportedLanguages) => {
    const navLanguage = navigator.language || navigator.userLanguage;
  
    // Dil kodunu ilk iki karakterini al
    const languageCode = navLanguage.substr(0, 2);
  
    // Desteklenen diller arasında mı kontrol et
    if (supportedLanguages.includes(languageCode)) {
      return languageCode;
    }
  
    // Desteklenen diller arasında değilse varsayılan dil kodunu döndür
    return supportedLanguages[0];
  };
  