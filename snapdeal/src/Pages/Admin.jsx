import React from "react";
import { Box, Flex, HStack,  Input, Text } from "@chakra-ui/react";
import AddLoginForm from "../components/AddLoginForm";

const Admin = () => {
  return (
    <Box>
      <Flex border="1px solid black" p="12px 20px" align="center">
        <Text p="12px 20px">Admin Navbar</Text>
        <Input type="search" placeholder="Search Product.." size="md" w="40%" />
        {/* <IconButton aria-label="Search database" icon={<SearchIcon />} /> */}
      </Flex>

      <HStack>
        <Flex w="25%" border="1px solid black" height="70vh">
          <Text>Side Panel</Text>
          <AddLoginForm />
        </Flex>
        <Flex w="75%" border="1px solid black" height="70vh">
          <Text>Main Box</Text>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Admin;
