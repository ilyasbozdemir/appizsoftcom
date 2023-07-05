import { services } from "./services";
import { technologies } from "./technologies";

export const menuList = [
  {
    title: "Anasayfa",
    href: "/?ref=home-link",
    children: null,
    lang: "tr",
  },
  {
    title: "Portfolyo",
    href: "/portfolyo",
    children: null,
    lang: "tr",
  },
  {
    title: "Ürünlerimiz",
    href: "/urunlerimiz",
    children: null,
    lang: "tr",
  },
  {
    title: "Hizmetlerimiz",
    href: null,
    children: services,
    lang: "tr",
  },
  
  {
    title: "Teknolojilerimiz",
    href: null,
    children: technologies,
    lang:'tr'
  },
  {
    title: "Hakkımızda",
    href: "/hakkimizda",
    children: technologies,
    lang: "tr",
  },
  {
    title: "Blog",
    href: "/blog",
    children: null,
    lang: "tr",
  },
  {
    title: "Bize Ulaşın",
    href: "/iletisim",
    children: null,
    lang: "tr",
  },
];
