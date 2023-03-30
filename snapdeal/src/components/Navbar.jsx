// import React from "react";
import "./Navbar.css";
// // import Logo from "../../assets/Logo.svg";
// import { FiAlignRight } from "react-icons/fi";
import { FiShoppingCart } from 'react-icons/fi';
import { Link,InputGroup,Text,Input,InputRightAddon ,Box,Icon,Menu,MenuButton,MenuList,MenuItem,Button,Avatar,Center,MenuDivider} from "@chakra-ui/react";
import { Search2Icon,ArrowForwardIcon } from '@chakra-ui/icons'
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
         <Link to="/"> 
         <img width="370px" height="80px" />
         </Link>
         </div>

         <div className="input">
         <InputGroup mt={'15px'}>     
       {/* <Text fontWeight={'bold'} fontFamily={"Cursive"}  fontSize={{ base: '15px', md: '25px',xl:'35px' }}>SHOP THE EASY WAY ...</Text> */}
        <Input  placeholder= "Search product and brand" type="text" onChange={(e)=>setSelect(e.target.value)}/> 
        <InputRightAddon children={<Search2Icon/>} />
       </InputGroup>
          
          </div>
         <div className="cart">
         
                
                  <Link to="/cart">
                   Cart 
                  <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'}  color={'white'} mt={'15px'}/>
                 
                  </Link>
                   

         </div>
         <div className="download">
         <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
         </div>
    </div>
  )
}
