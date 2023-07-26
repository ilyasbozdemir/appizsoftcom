import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function OfferButton({ lang = `tr`, platform }) {
  const router = useRouter();

  return (
    <>
      {platform === "mobile" ? (
        <>
          <Button
            variant={"outline"}
            color="#fff"
            bg={"primary.100"}
            _hover={{
              bg: "primary.200",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
            }}
            size="md"
            onClick={() => {
              router.push(`/${lang}/get-a-quote`);
            }}
            fontSize={"2xl"}
            fontFamily={"Poppins"}
            w="90%"
            px={4}
            h={75}
          >
            Teklif Al
          </Button>
        </>
      ) : (
        <>
          <Button
            variant={"outline"}
            color="#fff"
            bg={"black"}
            _hover={{ bg: "blackAlpha.900" }}
            size="md"
            onClick={() => {
              router.push(`/${lang}/get-a-quote`);
            }}
            fontFamily={"Poppins"}
            p={{ md: 4, lg: 6 }}
            fontSize={{ md: "13px", lg: "17px" }}
            zIndex={11}
          >
            Teklif Al
          </Button>
        </>
      )}
    </>
  );
}

export default OfferButton;
