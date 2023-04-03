
import React from 'react'
import Logo from '../Logo'
import { Flex, HStack, Icon, Button } from '@chakra-ui/react'
import SearchBox from './SearchBox'
import { SlBasket, SlBasketLoaded } from "react-icons/sl";
import { AiOutlineUser } from 'react-icons/ai'

function HeaderBody() {
    const [basketItemCount, setBasketItemCount] = React.useState(0);
    return (
        <>
            <Flex justifyContent={"space-between"} my={2}>
                <HStack>
                    <Logo />
                </HStack>
                <HStack>{<SearchBox />}</HStack>

                <HStack gap={2}>
                    <Button bg={"#ECF2FF"} color={"#7b61ff"} borderRadius={15}>
                        <HStack gap={2}>
                            <Icon as={AiOutlineUser} />
                            <>Giriş Yap</>
                        </HStack>
                    </Button>
                    <Button bg={"#ECF2FF"} color={"#7b61ff"} borderRadius={15}>
                        <HStack gap={2}>
                            <Icon
                                as={basketItemCount === 0 ? SlBasket : SlBasketLoaded}
                            />
                            <>{basketItemCount}</>
                        </HStack>
                    </Button>
                </HStack>
            </Flex>
        </>
    )
}

export default HeaderBody