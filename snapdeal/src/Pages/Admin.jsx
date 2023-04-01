import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AddLoginForm from "../components/AddLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { getProductFn } from "../redux/productReducer/action";
import { Search2Icon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const state = useSelector((state) => {
    return state.productReducer.product;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductFn());
  }, [dispatch]);
  console.log(state);
  return (
    <Box>
      <Flex border="1px solid black" p="12px 20px" align="center">
        <Text p="12px 20px">Admin Navbar</Text>
        <Input type="search" placeholder="Search Product.." size="md" w="40%" />

        <IconButton aria-label="Search database" icon={<Search2Icon />} />
      </Flex>

      <HStack>
        <Flex w="25%" height="78vh">
          <Text>Side Panel</Text>
          <AddLoginForm />
        </Flex>
        <Box
          w="75%"
          m="auto"
          // border="1px solid black"
          height="78vh"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "24px",
            },
          }}
        >
          <Text>Main Box</Text>

          <SimpleGrid
            columns={5}
            spacing={3}
            w="100%"
            align="center"
            justify={"center"}
          >
            {state.length > 0 &&
              state.map((el) => {
                return (
                  <Box border="1px solid grey" p={2}>
                    <Image src={el.image} alt={el.title} w="100%" h="300px" />
                    <Text isTruncated>{el.title}</Text>
                    <HStack p={2} align={"center"} justify={"center"}>
                      <IconButton
                        colorScheme="blue"
                        aria-label="edit Product"
                        size="xs"
                        icon={<EditIcon />}
                        w={9}
                        onClick={onOpen}
                      />
                      <IconButton
                        colorScheme="red"
                        aria-label="delete Product"
                        size="xs"
                        icon={<DeleteIcon />}
                        w={9}
                      />
                    </HStack>
                  </Box>
                );
              })}
          </SimpleGrid>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Modla Body</Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </HStack>
    </Box>
  );
};

export default Admin;
