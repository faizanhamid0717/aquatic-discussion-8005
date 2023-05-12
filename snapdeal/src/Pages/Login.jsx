import React, { useState } from "react";
import { Box, Text, Input, Button,useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/authReducer/action";
import { Navigate } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.authReducer);


  const handleSubmit = () => {
    dispatch(login(email, password));
  };
  if (isAuth) {
  //  return <Navigate to={"/"}  />;
  }
  // console.log(isAuth);
  
  return (
    <>
      
      <Box mb={"20px"}>
        <Box
          margin={"auto"}
          mt={"150px"}
          width={"330px"}
          height={"390px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <Text
            textAlign={"start"}
            fontSize="17px"
            m={"10px 30px "}
            paddingTop="20px"
          >
            Login/Sign Up On Snapdeal
          </Text>
          <Text
            color="gray"
            textAlign={"start"}
            m={"18px 30px "}
            fontSize={"12"}
          >
            Please provide your Mobile Number or Email to Login/ Sign Up on
            Snapdeal. eve.holt@reqres.in
          </Text>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            borderRadius="0px"
            pl={"8px"}
            placeholder="Email"
            border={"1px solid grey"}
            height={"35px"}
            width={"270px"}
          ></Input>
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            borderRadius="0px"
            mt={"10px"}
            pl={"8px"}
            placeholder="Password"
            border={"1px solid grey"}
            height={"35px"}
            width={"270px"}
          ></Input>
          <Button
            _hover={{ color: "black" }}
            onClick={handleSubmit}
            mt="10px"
            color="white"
            border={"0px"}
            borderRadius="3px"
            height={"40px"}
            background={"rgb(228,0,70)"}
            width="270px"
          >
            CONTINUE
          </Button>
          <Box>
            <Text
              textAlign={"center"}
              color="gray"
              fontSize="13px"
              m={"25px 30px 10px 30px"}
              paddingTop="20px"
            >
              or Login Using
            </Text>
            <Button
              mt="5px"
              border={"0px"}
              bg={useColorModeValue('white.100', 'whiteAlpha.100')}
              borderRadius="3px"
              height={"40px"}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              width="270px"
            >
              Google
            </Button>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default Login;
