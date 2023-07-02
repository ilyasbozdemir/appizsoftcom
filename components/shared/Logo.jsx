import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";

function Logo({ platform, lang, isLink = true, size = { h: 50, w: 150 } }) {
  const router = useRouter();
  const cursor = isLink === true ? "pointer" : "default";
  return (
    <>
      <Image
        src="/logo.png"
        alt="Logo"
        width={size.w}
        height={size.h}
        style={{
          cursor: cursor,
        }}
        onClick={() => {
          if (isLink) router.push(`/${lang}?ref=${platform}-logo`);
        }}
        draggable={false}
      />
    </>
  );
}

export default Logo;
