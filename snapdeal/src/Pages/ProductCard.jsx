import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import "./HomePage.css"
import { Link, useParams } from "react-router-dom";

import { StarIcon } from "@chakra-ui/icons";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};



function ProductCart({ title, price, image, category, rating, id }) {
  return (
    <div id='proCard'>
      <Flex p={1} alignItems="center" justifyContent="center">
        <Link to={`/product/${id}`}>
          <Box
            bg={useColorModeValue("white", "gray.800")}
            w="200px"
            h={"350px"}
            // border=".5px solid #E7EEFF"
            rounded="3PX"
            p={"px"}
            //   shadow="sm"
          >
            {data.isNew && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}

            <Image
              w={"200px"}
              h={"180px"}
              pl={"0px"}
              pt={"10px"}
              src={image}
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
            />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                {data.isNew && (
                  <Badge
                    rounded="full"
                    px="5"
                    fontSize="0.8em"
                    colorScheme="#DDF2DC"
                    mb={"10px"}
                  >
                    {category}
                  </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="m"
                  color={useColorModeValue("gray.500", "gray.100")}
                  mb={"15px"}
                  fontWeight="semibold"
                  as="h3"
                  lineHeight="tight"
                  isTruncated
                >
                  {title}
                </Box>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                <Box
                  alignItems="center"
                  h={"25px"}
                  w={"90px"}
                  fontSize={"sm"}
                  borderRadius={"5px"}
                  marginRight={"5px"}
                  bgColor={"#D4EFDF"}
                  color={"black"}
                >
                  {rating}
                  <StarIcon height={"10px"} color={"#FBC02D"} />
                </Box>
                {/* <Rating rating={data.rating} numReviews={data.numReviews} rate={ProductCart.rat}/> */}
                <Box fontSize="l" color={useColorModeValue("black")}>
                  <Box as="span" color={"black"} fontSize="xl">
                    ₹
                  </Box>
                  {price}
                </Box>
                {/* <Link to={`/products/${id}`}>more info</Link> */}
                <Button
                  ml={"10px"}
                  bg="#AED6F1"
                  fontSize={"13px"}
                  height={"25px"}
                >
                  BuyNow
                </Button>
              </Flex>
            </Box>
          </Box>
        </Link>
      </Flex>
    </div>
  );
}

export default ProductCart;
