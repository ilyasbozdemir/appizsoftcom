import { Flex } from '@chakra-ui/react'
import React from 'react'
import { linkItems } from '../../constants/linkItems'
import Navbar from '../Navbar'

function HeaderBottom() {
  return (
      <Flex
        justifyContent={"center"}
        my={1}
        bg={"#865DFF"}
        color={"#fff"}
        px={2}
        borderRadius={15}
        w={"100%"}
      >
        {linkItems.map((link, i) => (
          <>
            a
          </>
        ))}
      </Flex>
  )
}

export default HeaderBottom