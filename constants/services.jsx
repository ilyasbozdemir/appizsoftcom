/*

    id: number,
    href: string, //[id].jsx urlsi için
    title: string, //ortak
    img: string-image-path, //services componenti için
    desc: string,////[id].jsx urlsi için detaylı açıklama
    content: string, //services componenti için
    serviceCategory: string,
    isServicesComponentDisplay: boolean,

    
*/
export const services = [
  {
    id: 7001,
    href: "web-design-development", //[id].jsx
    title: "Web Tasarımı ve Geliştirme", //ortak
    img: "/images/special_software_development.png", //services componenti için
    content: `Bireysel, kurumsal ve e-ticaret gibi farklı alanlarda ihtiyaç duyduğunuz
    özel yazılımları geliştiriyoruz.Size özel çözümler sunarak
    işletmenizi dijital dünyada öne çıkarmanıza yardımcı oluyoruz.`, //services componenti için
    serviceCategory: "software",
    isServicesComponentDisplay: true,
  },

  {
    id: 7002,
    href: "e-commerce-solutions",
    title: "E-ticaret Çözümleri",
    img: "/images/e_commerce.png",
    content: `İnternet mağazanızın yazılım ve dijital pazarlama ihtiyaçları için
    tecrübeli ekibimizle yanınızdayız. E-ticaretteki rekabet ve sorunları
    aşmanız için uzman kadromuz iş başında.`,
    serviceCategory: "software",
    isServicesComponentDisplay: true,
  },

  {
    id: 7003,
    href: "startup-solutions",
    title: "Start-Up Çözümleri",
    img: "/images/start_up.png",
    content: `Start-up dünyasının zorluklarını anlıyoruz ve size özel çözümler sunarak rekabet avantajı elde etmenize yardımcı oluyoruz. Deneyimli ekibimiz, projenizin her aşamasında yanınızda yer alarak başarıya ulaşmanızı destekliyoruz.`,
    serviceCategory: "software",
    isServicesComponentDisplay: true,
  },
  {
    id: 7004,
    href: "mobile-app-development",
    title: "Mobil Uygulama Geliştirme",
    img: `/images/mobile__app.png`,
    content: `Mobil cihazların popülaritesi hızla artarken, müşterilerinize kaliteli ve kullanıcı dostu mobil uygulamalar sunmak, işletmenizin dijital varlığını güçlendirmenin temel unsurlarından biridir.`,
    serviceCategory: "software",
    isServicesComponentDisplay: true,
  },
  {
    id: 7005,
    href: "game-design",
    title: "Oyun Tasarımı",
    img: "/images/game_design.png",
    content: `Oyun tasarımı konusunda uzman ekibimizle birlikte yazılım hizmetleri
    sunuyoruz. Yaratıcı fikirlerimiz ve oyun geliştirme konusundaki
    tecrübemizle sizin için en iyi oyun yazılımlarını tasarlıyoruz. `,
    serviceCategory: "software",
    isServicesComponentDisplay: true,
  },

  {
    id: 7006,
    href: "test-otomation", //[id].jsx
    title: "Test Otomasyonu",
    img: "/images/test_automation.png", //services componenti için
    content:
      "Selenium ve Appium, günümüzde en popüler test otomasyon araçları arasında yer almaktadır. Web ve mobil uygulamalarınızın uyumluluğunu ve performansını etkili bir şekilde test etmek için özel olarak tasarlanmış bu çözümlerle iş süreçlerinizi optimize edin",
    serviceCategory: "software",
    isServicesComponentDisplay: true,
  },

  {
    id: 7008,
    href: "production",
    title: "Prodüksiyon",
    img: "/images/production.png",
    content: `Markalaşma yolculuğunuzda logo, kurumsal kimlik, tanıtım filmi gibi tüm
    işlerinizi sektörünüzdeki enerji ve vizyonla çözüme kavuşturuyoruz. Size
    özel tasarımlar ve yaratıcı fikirlerle markanızı öne çıkarıyoruz.`,
    serviceCategory: "graphic-design",
    isServicesComponentDisplay: true,
  },
  {
    id: 1008,
    href: "web-banner-design",
    title: "Web Banner Tasarımı",
    img: "",
    content:
      "Çekici ve etkileyici web banner tasarımlarıyla online varlığınızı güçlendirin. Web sitenizde veya dijital reklam kampanyalarınızda kullanabileceğiniz bannerlar oluşturuyoruz.",
    serviceCategory: "graphic-design",
    isServicesComponentDisplay: true,
  },
  {
    id: 1007,
    href: "business-card-design",
    title: "Kartvizit Tasarımı",
    img: "",
    content:
      "Profesyonel ve dikkat çekici kartvizitlerle kalıcı bir izlenim bırakın. Kurumsal kimliğinizi yansıtan kartvizit tasarımları sunuyoruz.",
    serviceCategory: "graphic-design",
    isServicesComponentDisplay: true,
  },
  {
    id: 1003,
    href: "poster-design",
    title: "Poster Tasarımı",
    img: "",
    content:
      "Etkileyici ve dikkat çekici posterlerle etkinliklerinizi duyurun. Özel tasarlanmış posterler ile hedef kitlenizin ilgisini çekin.",
    serviceCategory: "graphic-design",
    isServicesComponentDisplay: true,
  },
  {
    id: 1002,
    href: "branding",
    title: "Kurumsal Kimlik Tasarımı",
    img: "",
    content: "Markanızın karakterini yansıtan kurumsal kimlik tasarımlarıyla öne çıkın. Kartvizitlerden zarflara, broşürlerden dijital materyallere kadar geniş bir yelpazede hizmet sunuyoruz.",
    serviceCategory: "graphic-design",
    isServicesComponentDisplay: true,
  },
  {
    id: 1001,
    href: "logo-design",
    title: "Logo Tasarımı",
    img: "",
    content:
      "Markanızı yansıtan özgün ve etkileyici logo tasarımlarıyla tanışın. Kurumsal kimliğinizi en iyi şekilde temsil edecek logoları sizin için oluşturuyoruz.",
    serviceCategory: "graphic-design",
    isServicesComponentDisplay: true,
  },
  {
    id: 7009,
    href: "social-media-management",
    title: "Sosyal Medya Yönetimi",
    img: "",
    content:
      "Hedef kitlenizle etkileşim kurmak için sosyal medya platformlarını etkili bir şekilde yönetiyoruz. Stratejik içerik oluşturma, paylaşımların zamanlaması, etkileşim analizi ve büyüme hedeflerinize ulaşma konularında size yardımcı oluyoruz.",
    serviceCategory: "digital marketing",
    isServicesComponentDisplay: true,
  },
  {
    id: 7010,
    href: "seo",
    title: "Arama Motoru Optimizasyonu (SEO)",
    img: "",
    content:
      "Web sitenizin organik arama sonuçlarında üst sıralarda görünmesini sağlamak için SEO hizmetleri sunuyoruz. Anahtar kelime analizi, teknik optimizasyon, içerik stratejileri ve bağlantı kurma gibi adımlarla çevrimiçi görünürlüğünüzü artırıyoruz.",
    serviceCategory: "digital marketing",
    isServicesComponentDisplay: true,
  },
  {
    id: 7011,
    href: "google-ads",
    title: "Google Reklamları Yönetimi (SEM)",
    img: "",
    content:
      "Google Ads platformunu kullanarak hedeflenen reklamlar oluşturuyoruz. İlgili anahtar kelimelere dayalı reklam kampanyaları yöneterek, potansiyel müşterilerinizi çekmeyi ve dönüşümleri artırmayı hedefliyoruz.",
    serviceCategory: "digital marketing",
    isServicesComponentDisplay: true,
  },
  {
    id: 7012,
    href: "email-marketing",
    title: "E-Posta Pazarlama Kampanyaları",
    img: "",
    content:
      "Etkili e-posta pazarlama kampanyaları oluşturarak, müşterilere özel içerikler, promosyonlar ve güncellemeler sunuyoruz. Hedef kitlenizle kişisel bağlar kurmanıza yardımcı olarak, sadık müşteri tabanı oluşturmanızı sağlıyoruz.",
    serviceCategory: "digital marketing",
    isServicesComponentDisplay: true,
  },
  {
    id: 7013,
    href: "content-marketing",
    title: "İçerik Üretimi ve Pazarlama",
    img: "",
    content:
      "İlgilendiğiniz sektöre özgü nitelikli içerikler üreterek, hedef kitlenizi bilgilendiriyor ve etkili bir şekilde etkileşim kurmanızı sağlıyoruz. Blog yazıları, infografikler, videolar ve daha fazlasıyla markanızı güçlendiriyoruz.",
    serviceCategory: "digital marketing",
    isServicesComponentDisplay: true,
  },
];
