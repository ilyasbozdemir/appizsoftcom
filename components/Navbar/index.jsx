import React from "react";
import Link from "next/link";
import {
  useDisclosure,
  useColorModeValue,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Text,
  HStack,
  Icon,
} from "@chakra-ui/react";
export default function Navbar({ link }) {
  const { label, href, icon, childrens } = link;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <>
        <Menu isOpen={isOpen} pos={"relative"}>
          <MenuButton
            mx={1}
            py={[1, 2, 2]}
            px={4}
            ariaLabel={`${label}-button`}
            fontWeight="500"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            onClick={() => { }}
            textTransform="uppercase"
            className={"nav-item"}
          >
            <Text
              sx={{
                ".nav-item:hover &": {
                  color: "#ECF2FF",
                },
              }}
            >
              {label === "İndirim" ? (
                <Link href={href} legacyBehavior passHref>
                  <HStack spacing={2} >
                    <Icon as={icon} color={'red'} />
                    <a>{label}</a>
                  </HStack>
                </Link>
              ) : (
                <Link href={href} legacyBehavior passHref>

                  <a> {label}</a>
                </Link>
              )}
            </Text>
          </MenuButton>
          {childrens.length !== 0 ? (
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              {childrens.map((link, i) => (
                <Link href={link.href} key={i} legacyBehavior passHref>
                  <a>
                    <MenuItem
                      key={i}
                      link={link}
                      color={'#000'}
                      _hover={{
                        bg: useColorModeValue("gray.100", "gray.700"),
                        color: "#000",
                      }}
                      userSelect={"none"}
                      pr
                    >
                      <Text as={"span"}>{link.label}</Text>
                    </MenuItem>
                  </a>
                </Link>
              ))}
            </MenuList>
          ) : (
            ""
          )}
        </Menu>
      </>
    </>
  );
}
