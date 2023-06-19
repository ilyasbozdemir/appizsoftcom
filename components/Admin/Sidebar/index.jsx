import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import Image from "next/image";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <>
      <IconButton
        icon={<FiMenu />}
        aria-label="Toggle Sidebar"
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <Image
                src={"/logo.svg"}
                width={150}
                height={30}
                onClick={() => {
                  router.push(`/${lang}?ref=desktop-logo`);
                }}
                style={{
                  cursor: "pointer",
                }}
              />
            </DrawerHeader>

            <DrawerBody>sidebar content</DrawerBody>

            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
