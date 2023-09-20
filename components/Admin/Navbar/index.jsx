import { useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Button,
  HStack,
  VStack,
  Image,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  MenuDivider,
  useColorModeValue,
  Icon,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import ThemeSwitcher from ".././../ThemeSwitcher";
import LanguageSwitcher from ".././../LanguageSwitcher";

import {
  FiMinimize,
  FiMaximize,
  FiMoreHorizontal,
  FiMoreVertical,
} from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineSegment } from "react-icons/md";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximizeToggle = () => {
    setIsMaximized(!isMaximized);

    if (!isMaximized) {
      // Pencere tam ekran yapılabilir
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Tam ekranı kapat
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <Flex
      py="2"
      boxShadow="sm"
      border="0 solid #e5e7eb"
      position="fixed"
      top="0"
      bg={useColorModeValue("gray.100", "gray.700")}
      width="100%"
      zIndex="1"
    >
      <Flex px={4} gap={3} justifyContent={"space-between"}>
        <HStack>
          <HStack spacing={3}>
            <Icon cursor={"pointer"} as={HiMenuAlt2} boxSize={18} />
          </HStack>
          <HStack spacing={3} display={{ base: "initial", md: "none" }}>
            <Icon cursor={"pointer"} as={AiOutlineSearch} boxSize={18} />
          </HStack>
        </HStack>

        <HStack spacing={3} display={{ base: "initial", md: "none" }}>
          <Link href="/admin">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={180}
              height={50}
              style={{
                cursor: "pointer",
                objectFit: "contain",
              }}
              draggable={false}
              loading="lazy"
            />
          </Link>
        </HStack>

        <Box display={{ base: "none", md: "initial" }}>
          <NavItem
            isMaximized={isMaximized}
            handleMaximizeToggle={handleMaximizeToggle}
          />
        </Box>
        <HStack>
          <HStack display={{ base: "initial", md: "none" }}>
            <Icon cursor={"pointer"} as={FiMoreVertical} boxSize={18} />
          </HStack>
          <HStack>
            <Icon cursor={"pointer"} as={AiOutlineSetting} boxSize={18} />
          </HStack>
        </HStack>
      </Flex>
    </Flex>
  );
};

const NavItem = ({ isMaximized, handleMaximizeToggle }) => {
  return (
    <>
      <HStack spacing={5}>
        <LanguageSwitcher />
        <ThemeSwitcher />

        <Icon cursor={"pointer"} as={HiOutlineEnvelope} boxSize={18} />
        <Icon cursor={"pointer"} as={IoIosNotificationsOutline} boxSize={18} />
        <Icon
          cursor={"pointer"}
          as={isMaximized ? FiMinimize : FiMaximize}
          boxSize={15}
          onClick={handleMaximizeToggle}
        />
        <Icon cursor={"pointer"} as={MdOutlineSegment} boxSize={18} />

        <Menu isLazy>
          <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
            <Avatar size="sm" src={"/admin.jpg"} />
          </MenuButton>
          <MenuList
            zIndex={5}
            border="2px solid"
            borderColor={useColorModeValue("gray.700", "gray.100")}
            boxShadow="4px 4px 0"
          >
            <Link href="/admin/profile" passHref>
              <MenuItem>
                <VStack justify="start" alignItems="left">
                  <Text fontWeight="500">İlyas Bozdemir</Text>
                  <Text size="sm" color="gray.500" mt="0 !important">
                    @ilyasbozdemir
                  </Text>
                </VStack>
              </MenuItem>
            </Link>
            <MenuDivider />

            <MenuItem>
              <Text fontWeight="500">Settings</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem>
              <Text fontWeight="500">Sign Out</Text>
            </MenuItem>
          </MenuList>
        </Menu>
        
      </HStack>
    </>
  );
};

export default Navbar;
