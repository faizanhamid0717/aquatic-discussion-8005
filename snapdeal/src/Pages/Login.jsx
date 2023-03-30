import React, { useState } from 'react'
import {Box,Text,Input,Button} from "@chakra-ui/react" 
import axios from 'axios';

export const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=()=>{
        axios.post("https://reqres.in/api/login",{email,password})
        .then((res)=>{console.log(res.data.token)})
        .catch((err)=>{console.log(err)})
    }

    // eve.holt@reqres.in
    // cityslicka
    return(<>
        <Box mb={"20px"} >
            <Box  margin={"auto"} mt={"150px"} width={"330px"} height={"390px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
                <Text textAlign={"start"} fontSize="17px" m={"10px 30px "} paddingTop="20px" >Login/Sign Up On Snapdeal</Text>
                <Text color="gray"  textAlign={"start"}  m={"18px 30px "} fontSize={"12"} >Please provide your Mobile Number or Email to Login/ Sign Up on Snapdeal</Text>
                <Input onChange={(e)=>{setEmail(e.target.value)}} borderRadius="0px" pl={"8px"} placeholder="Email" border={"1px solid grey"} height={"35px"} width={"270px"} ></Input>
                <Input onChange={(e)=>{setPassword(e.target.value)}} borderRadius="0px" mt={"10px"} pl={"8px"} placeholder="Password" border={"1px solid grey"} height={"35px"} width={"270px"} ></Input>
                <Button _hover={{color:"black"}} onClick={handleSubmit} mt="10px" color="white" border={"0px"} borderRadius="3px" height={"40px"}  background={"rgb(228,0,70)"} width="270px" >CONTINUE</Button>
                <Box  >
                    <Text textAlign={"center"} color="gray" fontSize="13px" m={"25px 30px 10px 30px"} paddingTop="20px" >or Login Using</Text>
                    <Button   mt="5px"  border={"0px"} background="white" borderRadius="3px" height={"40px"}  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" width="270px" >Google</Button>
                </Box>
            </Box>
        </Box>
    </>)
}

export default Login