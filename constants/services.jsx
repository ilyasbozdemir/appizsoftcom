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
    desc: "Geliştirdiğimiz süreç yazılımları, müşteri yönetim yazılımları ve özel ERP yazılımları ile firmanıza ait tüm işleri tek bir yazılım ile kontrol altına alabilirsiniz",
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
    desc: "Herkes e-ticarette satış yapmak istiyor; ama kim daha iyi satış yapacak? Büyük oyuncular ve zorlu e-ticaret sürecinde uzman ekibimizle birlikte yanınızdayız",
    content: `İnternet mağazanızın yazılım ve dijital pazarlama ihtiyaçları için
    tecrübeli ekibimizle yanınızdayız. E-ticaretteki rekabet ve sorunları
    aşmanız için uzman kadromuz iş başında.`,
    serviceCategory: "software",
    isServicesComponentDisplay: false,
  },

  {
    id: 7003,
    href: "startup-solutions",
    title: "Start-Up Çözümleri",
    img: "/images/start_up.png",
    desc: ``,
    content: `Start-up dünyasının zorluklarını anlıyoruz ve size özel çözümler sunarak rekabet avantajı elde etmenize yardımcı oluyoruz. Deneyimli ekibimiz, projenizin her aşamasında yanınızda yer alarak başarıya ulaşmanızı destekliyoruz.`,
    serviceCategory: "software",
    isServicesComponentDisplay: false,
  },
  {
    id: 7004,
    href: "mobile-app-development",
    title: "Mobil Uygulama Geliştirme",
    img: `/images/mobile__app.png`,
    desc: ``,
    content: `Mobil cihazların popülaritesi hızla artarken, müşterilerinize kaliteli ve kullanıcı dostu mobil uygulamalar sunmak, işletmenizin dijital varlığını güçlendirmenin temel unsurlarından biridir.`,
    serviceCategory: "software",
    isServicesComponentDisplay: true,
  },
  {
    id: 7005,
    href: "game-design",
    title: "Oyun Tasarımı",
    img: "/images/game_design.png",
    desc: "",
    content: `Oyun tasarımı konusunda uzman ekibimizle birlikte yazılım hizmetleri
    sunuyoruz. Yaratıcı fikirlerimiz ve oyun geliştirme konusundaki
    tecrübemizle sizin için en iyi oyun yazılımlarını tasarlıyoruz. `,
    serviceCategory: "software",
    isServicesComponentDisplay: false,
  },

  {
    "id": 7006,
    "href": "test-otomasyonu", //[id].jsx
    "title": "Test Otomasyonu",
    "img": "/images/test_automation.png", //services componenti için
    "desc": "Müşteri memnuniyetini artırmak ve hataları en aza indirmek için test süreçlerini otomatikleştirmeye hazır mısınız? Selenium ve Appium test otomasyonu çözümlerimizle tüm uygulamalarınızı kapsamlı bir şekilde test edin.",
    "content": "Selenium ve Appium, günümüzde en popüler test otomasyon araçları arasında yer almaktadır. Web ve mobil uygulamalarınızın uyumluluğunu ve performansını etkili bir şekilde test etmek için özel olarak tasarlanmış bu çözümlerle iş süreçlerinizi optimize edin. Size özel test senaryoları oluşturarak güvenilir ve tekrarlanabilir testler gerçekleştirin.",
    "serviceCategory": "software",
    "isServicesComponentDisplay": true
  },
  {
    id: 7007,
    href: "production-design",
    title: "Prodüksiyon & Tasarım",
    img: "/images/production.png",
    desc: "İhtiyaçlarınızı dinliyor, firmanızı en iyi şekilde yansıtacak size özel, teknolojiye uyumunuzu hızlandıracak modern bir tasarım çıkarıyoruz",
    content: `Markalaşma yolculuğunuzda logo, kurumsal kimlik, tanıtım filmi gibi tüm
    işlerinizi sektörünüzdeki enerji ve vizyonla çözüme kavuşturuyoruz. Size
    özel tasarımlar ve yaratıcı fikirlerle markanızı öne çıkarıyoruz.`,
    serviceCategory: "digital marketing",
    isServicesComponentDisplay: true,
  },
  
  
];
