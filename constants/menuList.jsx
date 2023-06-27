import { services } from "./services";
import { technologies } from "./technologies";

export const menuList = [
  {
    title: "Anasayfa",
    href: '/',
    children: null,
  },
  {
    title: "Hizmetlerimiz",
    href: null,
    children: services,
  },
  {
    title: "Projelerimiz",
    href: "/projelerimiz",
    children: null,
  },
  {
    title: "Teknolojilerimiz",
    href: null,
    children: technologies,
  },
  {
    title: "Hakkımızda",
    href: "/hakkimizda",
    children: technologies,
  },
  {
    title: "Blog",
    href: "/blog",
    children: null,
  },
  {
    title: "İletişim",
    href: "/iletisim",
    children: null,
  },
];
