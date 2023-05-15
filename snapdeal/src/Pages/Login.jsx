import React, { useState } from "react";
import { Box, Text, Input, Button,useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/authReducer/action";
import { Navigate,Link } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuth,loginMessage } = useSelector((store) => store.authReducer);


  const handleSubmit = () => {
    dispatch(login(email, password))
    .then(()=>{
      setEmail("");
      setPassword("");
    })
  };
  
  return (
    <>

      {/* <DarkModeButton /> */}
      {isAuth&& <Navigate to="/"/>}
      <Box mb={"20px"}>
        <Box
          margin={"auto"}
          mt={"70px"}
          
          width={{base:"280px",sm:"280px",md:"330px"}}
          // height={"390px"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        >
          <Text
            textAlign={"start"}
            fontSize="17px"
            m={"10px 30px "}
            paddingTop="20px"
            fontWeight={500}
          >
            Login on Snapdeal
          </Text>
          <Text
            color="gray"
            textAlign={"start"}
            m={"18px 30px "}
            fontSize={"12"}
          >
            Please provide your Email to Login on
            Snapdeal.
          </Text>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            borderRadius="0px"
            pl={"8px"}
            placeholder="Email"
            border={"1px solid grey"}
            height={"35px"}
            width={"82%"}
          ></Input>
          <Input
          type="password"
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
            width={"82%"}
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
            width="82%"
          >
            CONTINUE
          </Button>
          <Box>
          <Text
              margin={"auto"}
              fontWeight={500}
              fontSize="13px"
              width={"82%"}
              mt={"15px"}
              mb="10px"
              textAlign={"left"}
              // paddingTop="20px"
            >
              
            Create new account ?
            <Link to={"/signup"} >
             <Button color={"blue"} border={"0px"}  fontSize={"13px"} variant={"link"} >Sign up</Button>
            </Link>
            </Text>
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
              mb="20px"
              border={"0px"}
              bg={useColorModeValue('white.100', 'whiteAlpha.100')}
              borderRadius="3px"
              height={"40px"}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              width="82%"
            >
              Google
            </Button>
          </Box>

        </Box>
        {loginMessage&& <Text fontSize={20} fontWeight={500} mt={"20px"} >{loginMessage}</Text>}
      </Box>
    </>
  );
};

export default Login;
