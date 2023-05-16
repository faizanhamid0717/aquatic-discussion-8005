import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Box,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartFn, getCartFn } from "../redux/cartReducer/action";
import { Link,useNavigate } from "react-router-dom";
const Cart = () => {
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState(false);
  const { isAuth } = useSelector((store) => store.authReducer);
  const navigate=useNavigate()

  const state = useSelector((state) => {
    return state.cartReducer.data;
  });
  // console.log(state);

  // const total = state.reduce((total, item) => {
  //   return total + item.price * item.qty;
  // }, 0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartFn());
  }, []);

  let total = 0;
  state?.map((el) => {
    total += el.price;
  });

  const handleDelete=(id)=>{
    dispatch(deleteCartFn(id))
    .then(()=>dispatch(getCartFn()))
  }

  if(!isAuth)
  {
    navigate("/login")
  }

  // console.log(isAuth)
  // console.log("cart state", state);
  return total==0 ? (
    <Heading>Your Cart is Empty </Heading>
  ) : error ? (
    ""
  ) : (
    <Box display= "grid" gridTemplateColumns={{sm:"repeat(1,1fr)",lg:"repeat(2,1fr)"}} >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1,1fr)",
          gap: "50px",
          // width: "800px",
        }}
      >
        {state&&state?.map((item) => (
          <Center py={3} key={item.id}>
            <Stack
              // border={"2px solid black"}
              borderWidth="1px"
              borderRadius="lg"
              w={{base:"70%", sm: "70%", md: "70%" }}
              // height={{ sm: "476px", md: "20rem" }}
              direction={{ base: "column", md: "row" }}
              // bg={useColorModeValue('white', 'gray.900')}
              boxShadow={"l"}
              padding={4}
            >
              <Flex flex={1} >
                <Image
                margin={"auto"}
                  // objectFit="cover"
                  // boxSize="70%"
                  width={"90%"}
                  // src={
                  //   'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                  // }
                  src={item.image}
                />
              </Flex>
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}
              >
                <Heading fontSize={20} fontFamily={"body"}>
                  {item.title}
                </Heading>
                <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                  {item.category}
                </Text>
                <Text
                  textAlign={"center"}
                  // color={useColorModeValue('gray.700', 'gray.400')}
                  fontFamily={"body"}
                  px={7}
                >
                  Price : ₹ {item.price}
                  {/* <Link href={'#'} color={'blue.400'}>
                  #tag
                </Link>
                me in your posts */}
                </Text>
                <Stack
                  align={"center"}
                  justify={"center"}
                  direction={"row"}
                  mt={6}
                >
                  <Badge
                    px={2}
                    py={1}
                    // bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={"400"}
                  >
                    #art
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    // bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={"400"}
                  >
                    #photography
                  </Badge>
                  <Badge
                    px={2}
                    py={1}
                    // bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={"400"}
                  >
                    #music
                  </Badge>
                </Stack>
                <Stack
                  width={"100%"}
                  mt={"2rem"}
                  direction={"row"}
                  padding={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  {/* <Button
                    flex={1}
                    size="sm"
                    colorScheme="teal"
                    variant="outline"
                    w={"10px"}
                    fontSize={"3xl"}
                    rounded={"5px"}
                    _focus={{
                      bg: "gray.200",
                    }}
                    // disabled={count == 1}
                    // onClick={() => handelCount(-1, ele.id)}
                    // onClick={() => {
                    //   if (item.quantity > 1) {
                    //     dispatch({ type: "DECREASE", payload: item });
                    //   }
                    // }}
                  >
                    -
                  </Button>
                  <Button
                    flex={1}
                    size="sm"
                    fontSize={"xl"}
                    rounded={"full"}
                    _focus={{
                      bg: "gray.200",
                    }}
                  >
                    {item.qty}
                  </Button> */}
                  {/* <Button
                    flex={1}
                    size="sm"
                    colorScheme="teal"
                    variant="outline"
                    fontSize={"2xl"}
                    rounded={"5px"}
                    _focus={{
                      bg: "gray.200",
                    }}
                    // onClick={()=>handelCount(1,ele.id)}
                    // onClick={() =>
                    //   dispatch({ type: "INCREASE", payload: item })
                    // }
                  >
                    +
                  </Button> */}
                  <Button
                    flex={1}
                    fontSize={"sm"}
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    boxShadow={
                      "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                    }
                    _hover={{
                      bg: "blue.500",
                    }}
                    _focus={{
                      bg: "blue.500",
                    }}
                    // onClick={() => dispatch({ type: "REMOVE", payload: item })}
                    onClick={() => handleDelete(item.id)}
                    bgColor={"#EF5350"}
                  >
                    Remove
                  </Button>
                </Stack>
                <Heading fontSize={"xl"} fontFamily={"body"}>
                  {/* Total : ₹ {item.quantity * item.price} */}
                </Heading>
              </Stack>
            </Stack>
          </Center>
        ))}
      </div>
      <Box border={"1px solid black"} margin="auto"  width="80%" marginTop="25px" >
        <Text fontSize={"4xl"}>#FASHION-INSIDER</Text>
        <Text fontSize={"2xl"} color={"#FFA726 "}>
          Bag Summary
        </Text>
        <Text>Free Standard Shipping on orders of ₹ 1100 or more</Text>
        <TableContainer>
          <Table variant="simple">
            <TableCaption fontWeight={"bold"} fontSize={"xl"}>
              Total Amount : ₹ {total}
            </TableCaption>
            <Thead>
              <Tr>
                <Th></Th>
                <Th> </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Merchandise Subtotal</Td>
                <Td fontWeight={"bold"} fontSize={"xl"}>
                  {" "}
                  ₹ {total}
                </Td>
              </Tr>
              <Tr>
                <Td>Shipping</Td>
                <Td>FREE</Td>
              </Tr>
              <Tr>
                <Td>Estimated Tax</Td>
                <Td> ₹ 0.00</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Link to="/address">
          <Button
            border="1px solid black"
            w="300px"
            // onClick={handleCheck}
            bg={"#FBC02D"}
          >
            Check-Out
          </Button>
        </Link>
        {/* {redirectToPayment && <Navigate to="/checkout" />} */}
      </Box>
    </Box>
  );
};

export default Cart;
