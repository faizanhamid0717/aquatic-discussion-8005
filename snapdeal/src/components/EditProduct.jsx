import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const product = useSelector((state) => {
    return state.productReducer.product;
  });

  useEffect(() => {
    const data = product.find((el) => el.id === +id);
    console.log(data);
    setData(data);
    console.log(id);
  }, [id]);
  return <Box>
    
  </Box>;
};

export default EditProduct;
