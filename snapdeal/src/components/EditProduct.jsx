import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const init = {
  image: "",
  title: "",
  price: 0,
  rating: 0,
};
const EditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(init);
  const product = useSelector((state) => {
    return state.productReducer.product;
  });
  const handleEdit = () => {

  };
  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    console.log(data);
    setData(data);
    console.log(id);
  }, [id]);

  return (
    <Box>
      <HStack w="90%" m="auto">
        <Box w="70vh">
          <Image src={data.image} alt={data.title} />
        </Box>
        <Box border="1px solid grey" w="40%" m="auto" p={10} mt={10}>
          <Stack justify="center">
            <Heading>EDIT PRODUCT</Heading>
            <Input value={data.image} size="sm" onChange={()=>setData()}/>
            <Input value={data.title} size="sm" />
            <Input value={data.price} size="sm" />
            <Input value={data.rating} size="sm" />
            <Button onClick={handleEdit}>Edit</Button>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
};

export default EditProduct;
