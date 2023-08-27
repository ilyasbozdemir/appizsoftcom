import { Image, chakra } from "@chakra-ui/react";

export const Logo = (props) => (
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
      objectFit={'contain'}
    />
  </>
);
