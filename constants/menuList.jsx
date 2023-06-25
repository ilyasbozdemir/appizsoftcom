import { services } from "./services";
import { technologies } from "./technologies";

export const menuList = [
  {
    title: "Hizmetlerimiz",
    href: null,
    children: services,
  },
  {
    title: "Referanslarımız",
    href: "/referanslarimiz",
    children: [],
  },
  {
    title: "Teknolojilerimiz",
    href: null,
    children: technologies,
  },
  {
    title: "Hakkımızda",
    href: "/hakkimizda",
    children: [],
  },
  {
    title: "Blog",
    href: "/blog",
    children: [],
  },
  {
    title: "İletişim",
    href: "/iletisim",
    children: [],
  },
];
