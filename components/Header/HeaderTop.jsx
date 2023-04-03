import React from 'react'
import { Flex, HStack, Stack, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'


import { RiWechat2Line } from "react-icons/ri";

function HeaderTop() {
  return (
    <>
      <Flex justifyContent={"space-between"} my={2}>
        <HStack>
          <Stack fontWeight={"semibold"} fontSize={12}>
            <Link href="/iletisim" passHref>
              <HStack  spacing={1} direction={"row"}>
                <Icon as={RiWechat2Line} />
                <Text>Canlı Destek</Text>
              </HStack>
            </Link>
          </Stack>

          <Stack fontWeight={"semibold"} fontSize={12}>
            <Link href="/hakkimizda" passHref>
              <HStack spacing={1} direction={"row"}>
                <Text>Hakkımızda</Text>
              </HStack>
            </Link>
          </Stack>

          <Stack fontWeight={"semibold"} fontSize={12}>
            <Link href="/yardim" passHref>
              <HStack  spacing={1} direction={"row"}>
                <Text>Yardım</Text>
              </HStack>
            </Link>
          </Stack>
        </HStack>
        <HStack>
          <Stack fontWeight={"semibold"} fontSize={12}>
            <Link href="/siparis-takibi" passHref>
              <HStack spacing={1} direction={"row"}>
                <Text>Sipariş Takibi</Text>
              </HStack>
            </Link>
          </Stack>
          <Stack fontWeight={"semibold"} fontSize={12}>
            <Link href="/siparislerim" passHref>
              <HStack  spacing={1} direction={"row"}>
                <Text>Siparişlerim</Text>
              </HStack>
            </Link>
          </Stack>
          <Stack fontWeight={"semibold"} fontSize={12}>
            <Link href="/kampanyalar" passHref>
              <HStack  spacing={1} direction={"row"}>
                <Text>Kampanyalar</Text>
              </HStack>
            </Link>
          </Stack>
        </HStack>
      </Flex>
    </>
  )
}

export default HeaderTop