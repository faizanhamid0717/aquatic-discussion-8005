import React, { useEffect, useState } from "react";
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
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AddLoginForm from "../components/AddLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { getProductFn } from "../redux/productReducer/action";
import { Search2Icon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import Product from "./Product";
import EditModel from "../components/EditModel";

const Admin = () => {

  const [change, setChange] = useState(false);
  const { isLoading, isError, product } = useSelector((state) => {
    return state.productReducer;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    // const data = product.find((el) => el.id === +id);
    
    dispatch(getProductFn());
    //  console.log(change);
  }, [change]);
  //  console.log(state);
  if (isLoading) {
    console.log(isLoading);
    //  return <Spinner size="xl" />;
  }
  return (
    <Box>
      <Flex border="1px solid black" p="12px 20px" align="center">
        <Text p="12px 20px">Admin Navbar</Text>
        <Input type="search" placeholder="Search Product.." size="md" w="40%" />

        <IconButton
          bg="#3F3F3F"
          color="white"
          aria-label="Search database"
          icon={<Search2Icon />}
        />
      </Flex>

      <HStack>
        <Flex w="25%" height="78vh">
          <AddLoginForm />
        </Flex>
        <Box
          w="75%"
          m="auto"
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
          <SimpleGrid
            columns={5}
            spacing={3}
            w="100%"
            align="center"
            justify={"center"}
            mt={10}
          >
            {product.length > 0 &&
              product.map((el) => {
                return (
                  <Box border="1px solid grey" p={2} key={el.id}>
                    <Image src={el.image} alt={el.title} w="100%" h="300px" />
                    <Text isTruncated>{el.title}</Text>
                    <HStack p={2} align={"center"} justify={"center"}>
                      <EditModel id={el.id} change={setChange}/>
                     
                    </HStack>
                  </Box>
                );
              })}
          </SimpleGrid>
        </Box>
      </HStack>
    </Box>
  );
};

export default Admin;
