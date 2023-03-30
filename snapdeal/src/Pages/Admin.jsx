import React from "react";
import { Box, Flex, HStack, Input, Text } from "@chakra-ui/react";

const Admin = () => {

  return (
    <Box>
      <Flex border="1px solid black" p="12px 20px" align="center">
        <Text p="12px 20px">Admin Navbar</Text>
        <Input type="search" placeholder="Search Product.." size="md" w="40%" />
      </Flex>
      
      <HStack>
        <Flex w="25%" border="1px solid black" height="80vh">
          Side Panel
        </Flex>
        <Flex w="75%" border="1px solid black" height="80vh">
          Main Box
        </Flex>
      </HStack>
    </Box>
  );

};

export default Admin;
