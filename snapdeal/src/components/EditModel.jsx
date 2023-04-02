import {
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFn } from "../redux/productReducer/action";
import { Link, useNavigate } from "react-router-dom";
const EditModel = ({ id, change }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const product = useSelector((state) => {
    return state.productReducer.product;
  });
  const handleDelete = () => {
    dispatch(deleteProductFn(id));
    change((prev) => !prev);
  };

  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    console.log(data);
    setData(data);
    console.log(id);
  }, []);
  let navigate = useNavigate();
  const changeEdit = () => {
    console.log(id);
    let path = `/editproduct/${id}`;
    navigate(path);
  };
  return (
    <Box>
      <IconButton
        bg="#3F3F3F"
        color="white"
        aria-label="edit Product"
        size="xs"
        icon={<EditIcon />}
        w={9}
        onClick={changeEdit}
      />
      <IconButton
        bg="#3F3F3F"
        color="white"
        aria-label="delete Product"
        size="xs"
        icon={<DeleteIcon />}
        w={9}
        onClick={handleDelete}
      />
      {/*  */}
    </Box>
  );
};

export default EditModel;
