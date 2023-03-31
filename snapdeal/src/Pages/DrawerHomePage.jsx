import { useState } from 'react'

import React from 'react';
import {
  
  IconButton,
  useBreakpointValue,
  
  Heading,
  
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';


import {
    
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Stack,RadioGroup,Radio,Button,Drawer,useDisclosure,Text,Box,Image
  } from '@chakra-ui/react'

export function DrawerCategory() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
           
          </Stack>
        </RadioGroup>
        
        <Box display={'flex'}  borderRadius={'5px'}>
        <Image width={'35px'} height={'40px'} borderRadius={'100%'} marginLeft={'20px'} src='https://images.meesho.com/images/products/209786534/bc2mn_512.webp'/>
        
        <Text marginLeft={'15px'} marginTop={'10px'}  onClick={onOpen}>
          Men's Fashion
        </Text> 
        </Box>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </>
    )
  }

//   export default DrawerCategory


  export function DrawerWomen() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
           
          </Stack>
        </RadioGroup>
        
        <Box display={'flex'} >
        <Image width={'35px'} height={'40px'} borderRadius={'100%'} marginLeft={'20px'} src='https://images.meesho.com/images/products/17898117/fbdc9_512.webp'/>
        
        <Text marginLeft={'15px'} marginTop={'10px'}  onClick={onOpen}>
          Women's Fashion
        </Text> 
        </Box>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              {/* <p>Some contents</p> */}
              {/* <p>Some contents...</p> */}
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </>
    )
  }

//   export default DrawerWomen

export function DrawerKitchen() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
           
          </Stack>
        </RadioGroup>
        
        <Box display={'flex'} >
        <Image width={'35px'} height={'40px'} borderRadius={'100%'} marginLeft={'20px'} 
        src='https://i.insider.com/5ee799f619182412d631a997?width=1136&format=jpeg'/>
        
        <Text marginLeft={'15px'} marginTop={'10px'}  onClick={onOpen}>
          Home & Kitchen
        </Text> 
        </Box>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              {/* <p>Some contents</p> */}
              {/* <p>Some contents...</p> */}
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </>
    )
  }

  export function DrawerKids() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
           
          </Stack>
        </RadioGroup>
        
        <Box display={'flex'}>
        <Image width={'35px'} height={'40px'} borderRadius={'50px'} marginLeft={'20px'}
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwChhdcjOcvMFzNy6g8JCtQwSJVWPyfRKgQ&usqp=CAU'/>
        
        <Text marginLeft={'15px'} marginTop={'10px'}  onClick={onOpen}>
          Toys, Kids & Fashion
        </Text> 
        </Box>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              {/* <p>Some contents</p> */}
              {/* <p>Some contents...</p> */}
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </>
    )
  }

  export function DrawerBeauty() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('right')
  
    return (
      <>
        <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
           
          </Stack>
        </RadioGroup>
        
        <Box display={'flex'}>
        <Image width={'35px'} height={'40px'} borderRadius={'100%'} marginLeft={'20px'}
         src='data:image/jpeg;base64,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'/>
        
        <Text marginLeft={'15px'} marginTop={'10px'}  onClick={onOpen}>
          Beauty, Health & Daily
        </Text> 
        </Box>

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              {/* <p>Some contents</p> */}
              {/* <p>Some contents...</p> */}
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

      </>
    )
  }

//   ****************************************************Video-Slider************************************************

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  export function VideoSlider() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] =useState ();
  
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });
  
    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
      {
        title: 'Design Projects 1',
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://assets.ajio.com/cms/AJIO/WEB/30032023-UHP-D-Main-P4-AvaasaDNMX-Flat60.jpg',
      },
      {
        title: 'Design Projects 2',
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P7-KidswearKGFrendzRio-Under399.jpg',
      },
      {
        title: 'Design Projects 3',
        text:
          "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
        image:
          'https://assets.ajio.com/cms/AJIO/WEB/D-UHP-Trendswithbenefits-P8-trendsFootwear-paylessHiAttitude-Upto50.jpg',
      },
    ];
  
    return (
      <Box
    //    mt={'40px'}
        position={'relative'}
        height={'270px'}
        width={'full'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={'sm'}
             
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="400px" position="relative">
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)">
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    {/* {card.title} */}
                  </Heading>
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                    {/* {card.text} */}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  }


// ********************************************Product-Slido************************************

//   const settings = {
//     dots: true,
//     arrows: false,
//     fade: true,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     autoplaySpeed: 5000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
  
  export function ProductSlider() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] =useState ();
  
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });
  
    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const card = [
        {
            id: 20,
            title: "Redmi Go Back cover",
            price: 166,
            description: "Readmi Go Back Cover Soft Cover Country of Origin India",
            category: "Phone",
            image: "https://images.meesho.com/images/products/78591203/akim8_512.webp",
            rating: 3.6
          },
          {
            "id": 21,
            "title": "Cute Stylus Girls Frocks",
            "price": 345,
            "description": "Cute Stylus Girls Frocks with beautifull print Country of Origin : India",
            "category": "child",
            "image": "https://images.meesho.com/images/products/151023315/4q15u_512.webp",
            "rating": 3.6
          },
          {
            "id": 22,
            "title": "trendy printed shirt for men",
            "price": 345,
            "description": "Cute Stylus Girls Frocks with beautifull print Country of Origin : India",
            "category": "men's clothing",
            "image": "https://images.meesho.com/images/products/210991063/1mxoo_400.webp",
            "rating": 3.6
          },
          {
            "id": 23,
            "title": "PATHAAN SHIRT MANS",
            "price": 401,
            "description": "Name : trendy printed shirt for men Fabric : Lycr Sleeve Length : Short Sleeves",
            "category": "men's clothing",
            "image": "https://images.meesho.com/images/products/209786534/bc2mn_512.webp",
            "rating": 3.9
          },
          {
            "id": 24,
            "title": "PATHAN MOVIES LATEST",
            "price": 375,
            "description": "PATHAN MOVIES LATEST Stylish Designer Wear Printed Pathan Shirt For Any Occasion. Combination Of Shirt Specially Designed For Multiple Occasions",
            "category": "men's clothing",
            "image": "https://images.meesho.com/images/products/228657353/ol22d_400.webp",
            "rating": 4.1
          },
          {
            "id": 25,
            "title": "Styles Latest Women Clutches",
            "price": 305,
            "description": "Name : Styles Latest Women Clutches Material : PU No. of Compartments : 2",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/222350479/ur5xu_512.webp",
            "rating": 3.8
          },
          {
            "id": 26,
            "title": "Gorgeous Stylishr Handbag",
            "price": 450,
            "description": "Gorgeous Stylishr Handbag, attractive and classic in design ladies purse,",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/199781557/xz96r_400.webp",
            "rating": 3.7
          },
          {
            "id": 27,
            "title": "Jewellery Set",
            "price": 450,
            "description": "Name : Jewellery Set  Base Metal : Alloy Plating : Gold Plated",
            "category": "jewellery",
            "image": "https://images.meesho.com/images/products/100419490/orpmg_512.webp",
            "rating": 3.1
          },
          {
            "id": 28,
            "title": "Women's Self-Design Brown Georgette Top",
            "price": 459,
            "description": "Name : Women's Self-Design Brown Georgette Top Fabric : Georgette Sleeve Length : Three-Quarter Sleeves",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/6886912/4c117_512.webp",
            "rating": 4.2
          },
          {
            "id": 29,
            "title": "Tops & Tunics",
            "price": 309,
            "description": "This Women Top made from Pure Cotton Fabric is new addition in the list of offerings from shefab",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/198945068/2nlab_512.webp",
            "rating": 4.3
          },
          {
            "id": 30,
            "title": "Flawsome Comfy Girls Frocks & Dresses",
            "price": 498,
            "description": "Name : Flawsome Comfy Girls Frocks & Dresses Fabric : Viscose Sleeve Length : Three-Quarter Sleeves Pattern : Solid",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/218567722/qqdii_512.webp",
            "rating": 4.2
          },
          {
            "id": 31,
            "title": "Best Selling Round Neck Half Sleeves t-shirt for mens ",
            "price": 189,
            "description": "Name : Best Selling Round Neck Half Sleeves t-shirt for mens ( Pack of 1 ) Fabric : CottonSleeve Length : Short Sleeves",
            "category": "men's clothing",
            "image": "https://images.meesho.com/images/products/102841746/4dtzp_512.webp",
            "rating": 3.1
          },
          {
            "id": 32,
            "title": "Men's T shirt ",
            "price": 194,
            "description": "Name : Men's T shirt Fabric : Lycra Sleeve Length : Short Sleeves Pattern : Printed",
            "category": "men's clothing",
            "image": "https://images.meesho.com/images/products/202477824/trxk2_512.webp",
            "rating": 3.8
          },
          {
            "id": 33,
            "title": "Cotton Peach Short Sleeves Colorblocked Tshirts",
            "price": 299,
            "description": "Name : CLASSIC FABULOUS STRIPED MEN TSHIRTS Fabric : Cotton Sleeve Length : Short Sleeves",
            "category": "men's clothing",
            "image": "https://images.meesho.com/images/products/109672330/gdcvl_512.webp",
            "rating": 3.9
          },
          {
            "id": 34,
            "title": "Poly Blend Grey Short Sleeves Printed Tshirts",
            "price": 199,
            "description": "Name : Men's Printed Half Sleeve Round Neck T-shirt Fabric : Poly Blend Sleeve Length : Short Sleeves Pattern : Printed",
            "category": "men's clothing",
            "image": "https://images.meesho.com/images/products/149408141/dkhin_400.webp",
            "rating": 3.5
          },
          {
            "id": 35,
            "title": "MEN DENIM STECHEBLE JEANS",
            "price": 599,
            "description": "Name : MEN DENIM STECHEBLE JEANS Fabric : Denim Pattern : Solid Net Quantity (N) : 1 MEN DENIM STRECHEBLE JEANS",
            "category": "men's clothing",
            "image": "https://images.meesho.com/images/products/104628748/rqawc_512.webp",
            "rating": 3.5
          },
          {
            "id": 36,
            "title": "Women's Printed Rayon Long Anarkali Kurti",
            "price": 299,
            "description": "Name : Women's Printed Rayon Long Anarkali Kurta Fabric : Rayon Sleeve Length : Three-Quarter Sleeves",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/49856632/zdbej_400.webp",
            "rating": 3.8
          },
          {
            "id": 37,
            "title": "Anarkali",
            "price": 399,
            "description": "women, men and children. Customers can expect a world-class shopping environment stocking the latest in international fashion from around the globe, as well as OM SAI LATEST CREATION's",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/66828244/iwkwb_512.webp",
            "rating": 3.9
          },
          {
            "id": 38,
            "title": "Treandy Kurtis",
            "price": 389,
            "description": "Name : Treandy Kurtis Fabric : Rayon Sleeve Length : Three-Quarter Sleeves Pattern : Printed Combo of : Single",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/87952064/mvdpc_512.webp",
            "rating": 4
          },
          {
            "id": 39,
            "title": "Cheetah Print Middi",
            "price": 489,
            "description": "Name : Cheetah Print Middi Fabric : Crepe Sleeve Length : Three-Quarter Sleeves Pattern : Printed",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/133245035/oifsc_512.webp",
            "rating": 4.4
          },
          {
            "id": 40,
            "title": "LERIYA FASHION Women Fit and Flare Floral Printed Dress",
            "price": 344,
            "description": "The images shown are for representational purposes only. Please note that the color of the product may slightly vary in comparison to the picture shown on the website due to various reasons ",
            "category": "women's clothing",
            "image": "https://images.meesho.com/images/products/140925190/miab9_512.webp",
            "rating": 4.4
          }
    ];
  
    return (
      <Box
    //    mt={'40px'}
        position={'relative'}
        height={'450px'}
        width={'full'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickPrev()}>
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          onClick={() => slider?.slickNext()}>
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {card.map((card, index) => (
            <Box
              key={index}
              height={'sm'}
              
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Container size="container.lg" height="400px" position="relative">
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={'lg'}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)">
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color='#F7A200'>
                    {card.title}
                  </Heading>
                  <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color='#86B817'>
                  ₹{card.price}
                  </Heading>
                  {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                    {card.price}
                  </Text> */}
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  }