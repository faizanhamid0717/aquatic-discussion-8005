import React from "react";
import ProductCarousels, { DrawerBeauty, DrawerCategory, DrawerKids, DrawerKitchen, DrawerWomen, ProductSlider, VideoSlider } from "./DrawerHomePage";
import "./HomePage.css"
import { Box, Flex,Text,Img,Grid } from "@chakra-ui/react";



const HomePage = () => {
  return <div  >

    <Flex direction={{ base: "column", md: "row" }} >

      <Box pb="5px" style={{ border: "1px solid gray" }}   width={{ base: "100%", md: "30%",lg:"20%" }} >
        <p>TOP CATEGORIES</p>
        <DrawerCategory />
        <DrawerWomen />
        <DrawerKitchen />
        <DrawerKids />
        <DrawerBeauty />

      </Box>


      <Box margin={"auto"} ml={{ md: "20px" }} mb={{ base: "20px", sm: "20px", md: "0px" }} mt={{ base: "20px", sm: "20px", md: "0px" }} width={{ base: "90%", md: "40%",lg:"60%" }} ><VideoSlider /></Box>

      <Box margin="auto" className="pincode">
        <img src="https://cdn-icons-png.flaticon.com/512/1244/1244597.png?w=826&t=st=1680166698~exp=1680167298~hmac=a0c0192d3209af7d158f4a878c0c4f152ff83ca6ae2efa151f62e2309e7b8a18" />
        <p>Your Delivery Pincode</p>
        <p>Enter your pincode to check availablity and faster delivery option</p>
        <input type='number' placeholder="Enter pincode" />
        <button className="b1">Submit</button>  <button className="b2">Next</button>
      </Box>
    </Flex>

    <Box margin="auto" width="90%" mt={"20px"} >
      <h1>TRENDING PRODUCTS</h1>
      {/* <ProductSlider/> */} <ProductCarousels />
    </Box>

    <div id='proImage'>
      <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P5-Upto80.jpg' />
      <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P4-Starting499.jpg' />
      <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P3-Starting499.jpg' />
      <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P1-Starting599.jpg' />
    </div>


    <Flex mt="20px" justifyContent={"space-around"}  direction="column" >
      
      <Box mb="20px">
        <Text style={{ fontSize: '45px' }}>Download Fashiondeal App Now</Text>
        <Text style={{ fontSize: '20px', color: 'gray' }}>Fast, Simple & Delightful.</Text>
        <Text style={{ fontSize: '20px', color: 'gray' }}>All it takes is 30 seconds to Download.</Text>
      </Box>
     
      <Flex  justifyContent={"center"}  >
        <Img width={{base:"20%",md:"10%"}} ml="10px" src="https://images.meesho.com/images/pow/playstore-icon-big.webp" />
          <Img width={{base:"20%",md:"10%"}} ml="10px" src="https://images.meesho.com/images/pow/appstore-icon-big.webp" />
      </Flex>
    </Flex>

    {/* <div className="snap" >


      <div>
        <div id='flower' >
          <div style={{ width: '700px' }} >
            
          </div>
          <div style={{ height: '200px', paddingBottom: '00px' }}>
          </div>
        </div>
        
      </div>
    </div> */}

    {/* **************************************************************************************** */}
    <Grid id='security'   gridTemplateColumns="repeat(2,1fr)" >
      <div>
        <img width={'100px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtA_X1DyCKZmWVJPn4qtGyCSeKyJjrOE0Lmo50gd6GLYvKbzU' />
        <h1 >100% SECURE PAYMENTS</h1>
        <p>Moving your card details to a much more secured place</p>
      </div>

      <div>
        <img width={'100px'} src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7WoK8m9PvSpVhHmcOF92oaolkJWm8MPPcD4NOD_kQE4Kzixfj' />
        <h1 >TRUSTPAY</h1>
        <p>100% Payment Protection. Easy Return Policy</p>
      </div>

      <div>
        <img width={'100px'} src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHFhzzZI-Vujxu5Y6GvLbDq_mlG8ud4-bkqwBUfPbKwkJGi1ui' />
        <h1 >HELP CENTER</h1>
        <p>Got a question? Look no further. Browse our FAQS or submit your query</p>
      </div>

      <div>
        <img width={'100px'} src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2vUZupbR4N4sGsW8riiNJVsr7B4XkUBni_8-wYdKMHr_DuD8Z' />
        <h1 >SHOP ON THE GO</h1>
        <p>Download the app and get exciting app only offers at your fingertips</p>
      </div>
    </Grid>


    {/* **************************************************************************************** */}

    <Flex  mt={"40px"} justifyContent={"center"}   direction="column" >

      <Box  >
        <Text mb={"5px"} fontWeight={600} fontSize={20} >PAYMENT</Text>
        <Flex justifyContent={"center"} >
          <img style={{margin:"0px 0px 0px 10px"}} height='20px ' width='50px' src='https://64.media.tumblr.com/a76e43f83c87782667ee4cc4ed23af30/ed0d4f3ab28cdeed-8b/s500x750/88e64bf1fa25680b5312bed8a134429d3af5721a.png' />
          <img style={{margin:"0px 0px 0px 10px"}} width='40px' height='20px' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRq9wFLWLE3uGwpPoSYtTMRxJTej5lIS5CMrbcpDLdIAnUkqRBd' />
          <img style={{margin:"0px 0px 0px 10px"}} width='80px' height='15px' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQy3MnJsnMTPIPC5PJ9N6Xuprc_EpjyE1__p4qd6pdW2zo_B35_' />
        </Flex>
      </Box>

      <Box mt={"20px"} >
        <Text  mb={"5px"}  fontWeight={600} fontSize={20} >CONNECT</Text>
        <Flex justifyContent={"center"}>
          <a href='https://www.facebook.com/login/'><img width='50px' src='https://i4.sdlcdn.com/img/footer/facebook@4x.png' /></a>
          <a href=''> <img width='50px' src='https://i1.sdlcdn.com/img/footer/twitter@4x.png' /></a>
          <a href='https://www.instagram.com/accounts/login/'><img width='50px' src='https://i4.sdlcdn.com/img/footer/instagram@4x.png' /></a>
          <a href=''> <img width='50px' src='https://i2.sdlcdn.com/img/footer/linkedin@4x.png' /></a>
          <a href=''><img width='45px' src='https://i4.sdlcdn.com/img/footer/Telegram-Logo_112x112.png' /></a>
        </Flex>
      </Box>
    </Flex>








  </div>
};

export default HomePage;
