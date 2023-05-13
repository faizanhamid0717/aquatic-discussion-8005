import React, { useState } from "react";
import { Box, Text, Input, Button,useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login, signup } from "../redux/authReducer/action";
import { Navigate,Link } from "react-router-dom";


export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state,setState]=useState("");
  const dispatch = useDispatch();
  const { isAuth,signupMessage } = useSelector((store) => store.authReducer);


  const handleSubmit = () => {
    let payload={name,email,password}
    dispatch(signup(payload))
    .then(()=>{
      setName("");
      setEmail("");
      setPassword("");
    })
        // axios.post("http://localhost:4500/signup",payload)
        // .then((res)=>{
        //   setState(res.data.message)
        //   setName("")
        //   setEmail("")
        //   setPassword("")
        // })
        // .catch((err)=>{
        //         console.log(err.message)
        // })
    
  };
  
  
  return (
    <>
      <Box mb={"20px"}>
      
        <Box
          margin={"auto"}
          mt={"60px"}
          
          width={{base:"280px",sm:"300px",md:"330px"}}
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
            Signup on Snapdeal
          </Text>

          <Text mt={"20px"} ml={"29px"} textAlign={"left"}>Full Name</Text>
          <Input
          type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            borderRadius="0px"
            pl={"8px"}
            placeholder="First and last name"
            border={"1px solid grey"}
            height={"35px"}
            width={"82%"}
          />
        <Text mt={"10px"} ml={"29px"} textAlign={"left"}>Email</Text>
          <Input
          type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            borderRadius="0px"
            // mt={"10px"}
            pl={"8px"}
            placeholder="Email"
            border={"1px solid grey"}
            height={"35px"}
            width={"82%"}
          />
        <Text mt={"10px"} ml={"29px"} textAlign={"left"}>Password</Text>
          <Input
          type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            borderRadius="0px"
            // mt={"10px"}
            pl={"8px"}
            placeholder="Password"
            border={"1px solid grey"}
            height={"35px"}
            width={"82%"}
          />
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
              
            Already have an account ?
            <Link to={"/login"} >
             <Button color={"blue"} border={"0px"}  fontSize={"13px"} variant={"link"} >Sign in</Button>
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
          {signupMessage&& <Text fontSize={20} fontWeight={500} mt={"20px"} >{signupMessage}</Text>}
      </Box>
    </>
  );
};

export default Signup;
