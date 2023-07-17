import { services } from "./services";
import { technologies } from "./technologies";

export const menuList = [
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
        href: "/about-appizsoft",
        children: null,
      },
      {
        title: "Kariyer",
        href: "/careers",
        children: null,
      },
      {
        title: "Teknolojilerimiz",
        href: "/technologies",
        children: null,
      },
    ],
  },
  {
    title: "Hizmetler",
    href: "services",
    children: null,
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
