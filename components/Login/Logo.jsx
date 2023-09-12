import { Image, chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";

import React from "react";

function Logo() {
  const router = useRouter();
  return (
    <>
      <Image
        src={"/logo.png"}
        width={150}
        height={45}
        onClick={() => {
          router.push(`/`);
        }}
        style={{
          cursor: "pointer",
        }}
        objectFit={"contain"}
      />
    </>
  );
}

export default Logo;
