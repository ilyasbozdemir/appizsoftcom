import React from "react";
import { technologies } from "../../constants/technologies";
import Head from "next/head";
import MetaHead from "../../components/shared/MetaHead";

const OurTechnologiesCTA = () => {
  return <>OurTechnologiesCTA</>;
};
const OurTechnologiesContent = () => {
  return <>OurTechnologiesContent</>;
};

function OurTechnologies() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://www.appizsoft.com"
      : "http://localhost:3000";

  const [site, setSite] = React.useState({
    title: `Teknolojilerimiz • Appizsoft`,
    publisher: `Appizsoft`,
    title: `Appizsoft • Özel Yazılım Geliştirme & Dijital Pazarlama `,
    url: baseUrl,
    image: baseUrl + "/logo.svg",
    imageAlt: "site-logo-png",
    description: `Müşterilerimize özel yaklaşımımızla yaratıcı çözümler sunarak hedeflerine ulaşmalarına yardımcı oluyoruz. Stratejik planlama ve araştırmalarımızla, müşterilerimizin sektöründe öne çıkarak rekabet avantajı elde etmelerini sağlıyoruz.`,
    name: ``,
    keywords: "",
    isRobotIndex: true,
  });

  return (
    <>
      <>
        <MetaHead
          pageTitle={site.title}
          description={site.description}
          keywords={site.keywords}
          author={site.author}
          publisher={site.publisher}
          isRobotIndex={site.isRobotIndex}
          image={site.image}
        />
      </>

      <OurTechnologiesCTA />
      <OurTechnologiesContent />
    </>
  );
}

export default OurTechnologies;
