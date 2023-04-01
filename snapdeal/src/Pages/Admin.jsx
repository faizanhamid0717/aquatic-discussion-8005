import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import AddLoginForm from "../components/AddLoginForm";
import { useDispatch, useSelector } from "react-redux";
import { getProductFn } from "../redux/productReducer/action";
import { Search2Icon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Admin = () => {
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
        <Flex w="25%" border="1px solid black" height="70vh">
          <Text>Side Panel</Text>
          <AddLoginForm />
        </Flex>
        <Box
          w="75%"
          m="auto"
          border="1px solid black"
          height="70vh"
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

          <SimpleGrid columns={5} spacing={3} w="100%" align="center">
            {state.length > 0 &&
              state.map((el) => {
                return (
                  <Box border="1px solid black" w="190px">
                    <Image src={el.image} />
                    <Text>{el.title}</Text>

                    <IconButton
                      colorScheme="blue"
                      aria-label="edit Product"
                      size="xs"
                      icon={<EditIcon />}
                      w={9}
                    />
                    <IconButton
                      colorScheme="red"
                      aria-label="delete Product"
                      size="xs"
                      icon={<DeleteIcon />}
                      w={9}
                    />
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
