// import React from "react";
import "./Navbar.css";
// // import Logo from "../../assets/Logo.svg";
// import { FiAlignRight } from "react-icons/fi";
import { FiShoppingCart } from 'react-icons/fi';
import { InputGroup,Text,Input,InputRightAddon ,Box,Icon,Menu,MenuButton,MenuList,MenuItem,Button,Avatar,Center,MenuDivider} from "@chakra-ui/react";
import { SearchIcon,ArrowForwardIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
// const Links = () => {
// 	return (
// 		<div>
// 			{/* <a href="#home" className="link">
// 				Home
// 			</a>
// 			<a href="#skills" className="link">
// 				Skills
// 			</a>
// 			<a href="#about" className="link">
// 				About me
// 			</a>
// 			<a href="#contact" className="link">
// 				Contact
// 			</a> */}
//       <Link to='/cart'>Cart</Link>
      
// 		</div>
// 	);
// };
// const Navbar = () => {
//     const [toggleMenu, setToggleMenu] = React.useState(false)
// 	return (
// 		<div className="navbar">
// 			<div className="title">
// 				{/* <img src={Logo} alt="logo" /> */}
//         <Link to="/"> 
//          <Image width="370px" height="80px" />
//          </Link>
// 				<p className="nav__header">Portfolio</p>
// 			</div>

//       <InputGroup>     
//          <Image height="55px"  src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-header.jpg"/>
//        </InputGroup> 

// 			<div className="links">
      
// 				<Links />
// 			</div>
// 			<div className="toggle-links" onClick={() => {setToggleMenu(prev => !prev)}}>
// 				<FiAlignRight className="hamburger-icon" />
// 			</div>
// 			{toggleMenu 
//             ? 
//             <div className="toggle-menu">
// 				<Links />
// 			</div>
//             : 
//             <></>}
// 		</div>
// 	);
// };
// export default Navbar;


import React, { useState } from 'react'

export const Navbar = () => {
  const [select,setSelect]=useState('')
  return (
    <div id='navbar'>
         <div className="logo">
         <img width='60px'  src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_-Cx1rsVdkUWe_EPCVjGC8Bt6YyRCpzlF_XR7Hgwivpo0S2AD'/>
         <Link to="/"> 
         
         <p style={{color:"white",fontSize:'40px',fontWeight:'600',fontFamily:'Cursive',paddingBottom:'5px'}}>fdeal</p> 
         </Link>
         </div>

         <div className="input">
         <InputGroup mt={'10px'}>     
       {/* <Text fontWeight={'bold'} fontFamily={"Cursive"}  fontSize={{ base: '15px', md: '25px',xl:'35px' }}>SHOP THE EASY WAY ...</Text> */}
        <Input  placeholder= "Search product and brand" type="text" onChange={(e)=>setSelect(e.target.value)}/> 
        
        <InputRightAddon color={'white'}  backgroundColor={'black'} w={'100px'} paddingLeft={'40px'} children={<SearchIcon/>}/>
       </InputGroup>
          
          </div>
         <div className="cart">
         
                
                  <Link to="/cart">
                   Cart 
                  <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'}  color={'white'} mt={'15px'}/>
                 
                  </Link>
                   

         </div>
         <div id="login">
         <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  color={'white'}
                  minW={0} border={0} gap={5}>
                    Sign In
                  <Avatar
                    size={'sm'}
                    src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR26CmOEGogTfcVSowq0Nw1tA4y3CRGTEZEiROX7GDsCKX5J4eX'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
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
                   <Link to='/login'><MenuItem> User Login </MenuItem></Link>
                  <Link to='/adminlogin'> <MenuItem>Admin Login</MenuItem></Link>
                  <MenuItem><Link to='/'>Logout</Link></MenuItem>
                </MenuList>
              </Menu>
         </div>
    </div>
  )
}





