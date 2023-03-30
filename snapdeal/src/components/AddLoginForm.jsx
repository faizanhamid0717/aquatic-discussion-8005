import {
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import React from "react";

export default function AddLoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} m={4}>
        ADD PRODUCT
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ADD PRODUCT</DrawerHeader>
          <DrawerBody>{/* add Product from hare */}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
