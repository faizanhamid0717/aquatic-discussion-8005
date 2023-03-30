import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function OrderCart() {
  return (
    <Box>
      <Box>
        <Image src="order.product.image" width="100%" />
      </Box>
      <Box w="100%" h="40px">
        Product
      </Box>
      <Flex gap={4}>
        <Box style={{ textDecoration: "line-through" }}>Rs:0</Box>
        <Box>Rs:0</Box>
        <Box border="1px solid " p="0 2px">
          10% OFF
        </Box>
      </Flex>
      <Box>
        <Text backgroundColor="green" w="40%">
          Quantity: 10
        </Text>
        <Text as="b">Total Rs: 0</Text>
      </Box>
    </Box>
  );
}

export default OrderCart;
