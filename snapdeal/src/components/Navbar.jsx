// import React from "react";
// mongodb+srv://faizan:hamid@cluster0.pxxlzf1.mongodb.net/snapDB?retryWrites=true&w=majority
import "./Navbar.css";

import { FiShoppingCart } from 'react-icons/fi';
import { InputGroup,Text,Input,InputRightAddon ,Box,Icon,Menu,MenuButton,MenuList,MenuItem,Button,Avatar,Center,MenuDivider} from "@chakra-ui/react";
import { SearchIcon,ArrowForwardIcon } from '@chakra-ui/icons'
import {Link} from 'react-router-dom'
import DarkModeButton from "./ButtonMode";

import { useSelector, useDispatch } from "react-redux";



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


  // const [searchQuery, setSearchQuery] = useState('');
  // const data=useSelector((store)=>store.productReducer.product)

  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  
  // const data=useSelector((store)=>console.log('store',store))
  
      console.log('products-nave',data)

 

  const [select,setSelect]=useState('')
  const { isAuth,name } = useSelector((store) => store.authReducer);

  const handle=()=>{
    isAuth=false
  }
  // console.log(isAuth)
  return (
    <>
            <div id='topnav'>
              <div id='p1'>Brand Waali Quality, Bazaar Waali Deal!</div>
              <div id='p2'>
                  <div>Impact@Snapdeal </div>
                  <div>Gift Cards </div>
                  <div>Help Center </div>
                  <div> Sell On Snapdeal</div>
                  <div> Download App</div>
                  
              </div>
              
            </div>



    <div id='navbar'>

         <div className="logo">
         <img width='60px'  src='data:image/png;base64,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
         qIoiqIoin/+AuhcdT/6BXTJAAAAAElFTkSuQmCC'/>
         <Link to="/"> 
         <p className="Logo" >fdeal</p> 
         </Link>
         </div>
         
         <div className="input">
         <InputGroup mt={'10px'}> 
        <Input  placeholder= "Search product and brand" type="text" value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
/> 
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
                   {isAuth?name:" Sign In" }
                  <Avatar
                    size={'sm'}
                    src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR26CmOEGogTfcVSowq0Nw1tA4y3CRGTEZEiROX7GDsCKX5J4eX'}
                  />
                </MenuButton>
                
                <MenuList alignItems={'center'}  bgColor={'black'}>
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
                  {!isAuth&& <Link to='/login'><MenuItem> User Login </MenuItem></Link>}
                  <Link to='/adminlogin'> <MenuItem>Admin Login</MenuItem></Link>
                  <MenuItem><Link to='/' onClick={handle} >Logout</Link></MenuItem>
                  {/* <MenuDivider/> */}
                   <Link to='/login'><MenuItem bgColor={'black'} color={'white'} border={'0px'}> User Login </MenuItem></Link> <MenuDivider/>
                  <Link to='/adminlogin'> <MenuItem bgColor={'black'} color={'white'} border={'0px'}>Admin Login</MenuItem></Link><MenuDivider/>
                  <MenuItem bgColor={'black'} color={'white'} border={'0px'}><Link to='/'>Logout</Link></MenuItem>

                  
                </MenuList>
                
              </Menu>
         </div>


         <div className="dark">
                 
                  <DarkModeButton />
                  
                  
         </div>
         
    </div>
    </>
  )
}





