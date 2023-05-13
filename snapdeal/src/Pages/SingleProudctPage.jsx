
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { postCartFn } from "../redux/cartReducer/action";
const SingleProudctPage = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [isCart, setIsCart] = useState(false);
  const product = useSelector((state) => {
    return state.productReducer.product;
  });
  const dispatch = useDispatch();
  const handelCart = () => {
    // console.log("hello");
    setIsCart(true);
    dispatch(postCartFn(data));
  };
  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    // console.log(data);
    setData(data);
    // console.log(id);
  }, [id]);

  return (
    <div>
      <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              border={"1px solid gray"}
              p={"40px"}
              rounded={"md"}
              alt={"product image"}
              // src={
              //   'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
              // }
              src={data.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"80%"}
              // h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "1xl", sm: "2xl", lg: "1xl" }}
              >
                {/* Automatic Watch */}
                {data.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"5xl"}
              >
                Price : ₹ {data.price}
              </Text>
            </Box>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"1xl"}
                  fontWeight={"300"}
                >
                  {data.description}
                </Text>
              </VStack>
              <Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <Image
                    h={"200px"}
                    w={"1500px"}
                    src="https://thumbs.dreamstime.com/b/have-moved-announcement-icon-change-address-location-truck-moving-to-another-house-navigation-pin-shop-office-204484329.jpg"
                  />
                </SimpleGrid>
              </Box>
            </Stack>
            {isCart ? (
              <Link to="/cart">
                <Button
                  rounded={"none"}
                  bg={"#FBC02D"}
                  color={"black"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  onClick={handelCart}
                  // onClick={() => dispatch({ type: "ADD", payload: data})}
                >
                  GO TO CART
                </Button>
              </Link>
            ) : (
              <Button
                rounded={"none"}
                bg={"#FBC02D"}
                color={"black"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={handelCart}
                // onClick={() => dispatch({ type: "ADD", payload: data})}
              >
                Add To Cart
              </Button>
            )}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
        {/* <Fotter /> */}
      </Container>
    </div>
  );
};

export default SingleProudctPage; 


