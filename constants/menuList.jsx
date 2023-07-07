import { services } from "./services";
import { technologies } from "./technologies";

export const menuList = [
  {
    title: "Anasayfa",
    href: "/?ref=home-link",
    children: null,
  },
  {
    title: "Kurumsal",
    href: null,
    children: [
      {
        title: "Ürünler",
        href: "/products",
        children: null,
      },
      {
        title: "Hakkımızda",
        href: "/appizsoft-hakkinda",
        children: null,
      },
      {
        title: "Teknolojiler",
        href: null,
        children: null,
      },
    ],
  },
  {
    title: "Hizmetler",
    href: null,
    children: services,
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
