import {
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  Stack,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postProductFn } from "../redux/productReducer/action";

export default function AddLoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [star, setStar] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    let data = {
      id: Date.now(),
      title: name,
      image: image,
      price: price,
      discount: discount,
      category: category,
      description: description,
      rating: star,
    };
    dispatch(postProductFn(data));
    console.log(data);
  };
  return (
    <>
      <Button onClick={onOpen} w="80%" m="10px" bg="#3F3F3F" color="white">
        ADD PRODUCT
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ADD Product</DrawerHeader>
          <DrawerBody>
            {/* add Product from hare */}
            <Stack>
              <Input
                placeholder="Enter Product Name"
                size="md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Enter Product Imange URL"
                size="md"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Input
                placeholder="Enter Product Price"
                size="md"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <Input
                placeholder="Enter Product Discount"
                size="md"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
              <Input
                placeholder="Enter Product Star"
                size="md"
                value={star}
                onChange={(e) => setStar(e.target.value)}
              />
              <Input
                placeholder="Enter Product Description"
                size="md"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Select
                placeholder="Select Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="women's clothing">WOMEN</option>
                <option value="men's clothing">MEN</option>
                <option value="child">KID'S</option>
              </Select>
              <Button bg="#3F3F3F" color="white" onClick={handleSubmit}>
                ADD
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
