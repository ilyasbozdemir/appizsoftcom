import { services } from "./services";
import { technologies } from "./technologies";


export const menuList = [
  {
    title: "Anasayfa",
    href: "/?ref=home-link",
    children: null,
  },
  {
    title: "Hizmetler",
    href: null,
    children: services,
  },
  {
    title: "Kurumsal",
    href: null,
    children: [
      {
        title: "Teknolojilerimiz",
        href: null,
        children: null,
      },
      {
        title: "Ürünlerimiz",
        href: "/urunlerimiz",
        children: null,
      },
      {
        title: "Hakkımızda",
        href: "/appizsoft-hakkinda",
        children: null,
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    children: null,
  },
  {
    title: "Bize Ulaşın",
    href: "/contact",
    children: null,
  },
];
