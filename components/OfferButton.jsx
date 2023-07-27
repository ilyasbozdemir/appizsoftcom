import { Button, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

function OfferButton({ lang = `tr`, platform }) {
  const router = useRouter();

  return (
    <>
      <Button
        variant={'unstyled'}
        color="black"
        _hover={{ color: "blackAlpha.900" }}
        size="md"
        onClick={() => {
          router.push(`/${lang}/get-a-quote`);
        }}
        fontFamily={"Poppins"}
        p={{ md: 4, lg: 6 }}
        fontSize={{ md: "13px", lg: "17px" }}
        zIndex={11}
        rightIcon={<Icon as={BiChevronRight} boxSize={15} />}
      >
        Proje Başlat
      </Button>
    </>
  );
}

export default OfferButton;
