
import "./Navbar.css";

import { FiShoppingCart } from 'react-icons/fi';
import { Flex, InputGroup, Text, Input, InputRightAddon, Box, Icon, Menu, MenuButton, MenuList, MenuItem, Button, Avatar, Center, MenuDivider } from "@chakra-ui/react";
import { SearchIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import DarkModeButton from "./ButtonMode";



import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import React, { useState, useEffect } from 'react'
import { getProductFn } from "../redux/productReducer/action";

export const Navbar = () => {

  const [term, setTerm] = useState("");
  const { isAuth, name } = useSelector((store) => store.authReducer);

  const handle = () => {
    isAuth = false
  }
  // console.log(isAuth)


  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();


    setTerm("");
    console.log(term)
  };

  useEffect(() => {
    let obj = {
      params: {}
    }

    if (term) {
      obj.params.q = term;
    }
    dispatch(getProductFn(obj))

  }, [term])

  return (
    <>
      {/* <div id='topnav'>
              <div id='p1'>Brand Waali Quality, Bazaar Waali Deal!</div>
              <div id='p2'>
                  <div>Impact@Snapdeal </div>
                  <div>Gift Cards </div>
                  <div>Help Center </div>
                  <div> Sell On Snapdeal</div>
                  <div> Download App</div>
                  
              </div>
              
            </div> */}



      <Flex id='navbar' mb={{md:"20px"}} direction={{base:"column",md:"row"}} >
      <Flex>

        <Box ml={{lg:"10px"}} >

          <Link to="/">
            <p className="Logo" >fdeal</p>
          </Link>
        </Box>

        <Box className="input">
          <InputGroup mt={'10px'}>
            <Input width={"80%"} placeholder="Search product and brand" type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
            {/* <InputRightAddon color={'white'} backgroundColor={'black'} w={'100px'} paddingLeft={'40px'} children={<SearchIcon />} onClick={submitHandler} /> */}
          </InputGroup>
        </Box>
      </Flex>

        <Flex width={"50%"}   justifyContent={{base:"space-around"}}>
          <Box ml={{base:"10px"}} >
            <Link to="/cart">
              {/* Cart */}
              <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} color={'white'} mt={'15px'} />

            </Link>
          </Box>

          <Box className="dark" >
            <DarkModeButton />
          </Box>

          <Box id="login" >
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                color={'white'}
                minW={0} border={0} gap={5}>
                {isAuth ? name : " Sign In"}
                <Avatar
                  ml="10px"
                  size={'sm'}
                  src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR26CmOEGogTfcVSowq0Nw1tA4y3CRGTEZEiROX7GDsCKX5J4eX'}
                />
              </MenuButton>

              <MenuList alignItems={'center'} bgColor={'black'}>
                <br />
                <Center>
                  <Avatar
                    size={'xl'}
                    src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR26CmOEGogTfcVSowq0Nw1tA4y3CRGTEZEiROX7GDsCKX5J4eX'}
                  />
                </Center>
                <br />
                <br />


                <MenuDivider />

                {!isAuth && <Link to='/login'><MenuItem bgColor={'black'} color={'white'} border={'0px'}> User Login </MenuItem></Link>}
                <Link to='/adminlogin'> <MenuItem bgColor={'black'} color={'white'} border={'0px'}>Admin Login</MenuItem></Link>
                <MenuItem bgColor={'black'} color={'white'} border={'0px'}><Link to='/' onClick={handle} >Logout</Link></MenuItem>

                {/* <MenuDivider/> */}



              </MenuList>

            </Menu>
          </Box>

         
        </Flex>

      </Flex>
    </>
  )
}





