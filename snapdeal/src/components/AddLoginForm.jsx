import {
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  Stack,
  Input,
} from "@chakra-ui/react";
import React from "react";

export default function AddLoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} w="80%" m="10px" bg="#3F3F3F" color="white">
        ADD PRODUCT
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ADD Product</DrawerHeader>
          <DrawerBody>
            {/* add Product from hare */}
            <Stack>
              <Input placeholder="Enter Product Name" size="md" />
              <Input placeholder="Enter Product Imange URL" size="md" />
              <Input placeholder="Enter Product Price" size="md" />
              <Input placeholder="Enter Product Discount" size="md" />
              <Input placeholder="Enter Product Star" size="md" />
              <Input placeholder="Enter Product DisPrice" size="md" />
              <Button bg="#3F3F3F" color="white">
                ADD
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
