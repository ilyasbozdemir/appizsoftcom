import { Image, chakra } from "@chakra-ui/react";

export const Logo = (props) => (
  <>
    <Image
      src={"/favicon_black.png"}
      width={45}
      height={45}
      onClick={() => {
        router.push(`/${lang}?ref=desktop-logo`);
      }}
      style={{
        cursor: "pointer",
      }}
    />
  </>
);
