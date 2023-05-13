
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
                    src="data:image/jpeg;base64,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"
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



