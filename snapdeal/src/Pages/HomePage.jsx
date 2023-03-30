import React from "react";
import {DrawerBeauty, DrawerCategory, DrawerKids, DrawerKitchen, DrawerWomen, ProductSlider, VideoSlider} from "./DrawerHomePage";
import "./HomePage.css"
const HomePage = () => {
  return <div>
  
  <div id="home">

       <div className="drawer">
        <p>TOP CATEGORIES</p>
        <DrawerCategory/>
        <DrawerWomen/>
        <DrawerKitchen/>
        <DrawerKids/>
        <DrawerBeauty/>
        <div style={{color: (97, 96, 96),fontSize:'13px',textAlign:'left', paddingLeft:'25px', paddingTop:'20px'}}>
          <br/>
        <p>MORE CATEGORIES</p>
        <br/>
        <p>Automotives</p>
        <br/>
        <p>Mobile and Accessories</p>
        <br/>
        <p>Electronics</p>
        <br/>
        <p>Sports,Fitness and Outdoor</p>
        <br/>
        <p>Computers and Gaming</p>
        </div>    
        </div>


       <div className="slido"><VideoSlider/></div>
       


       <div className="pincode">
        <img  src="https://cdn-icons-png.flaticon.com/512/1244/1244597.png?w=826&t=st=1680166698~exp=1680167298~hmac=a0c0192d3209af7d158f4a878c0c4f152ff83ca6ae2efa151f62e2309e7b8a18"/>
        <p>Your Delivery Pincode</p>
        <p>Enter your pincode to check availablity and faster delivery option</p>
        <input type='number' placeholder="Enter pincode"/>
        <button className="b1">Submit</button>  <button className="b2">Next</button>
       </div>
  </div>

  <div className="product"><ProductSlider/></div>
  
  <div id='proImage'>
    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P5-Upto80.jpg'/>
    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P4-Starting499.jpg'/>
    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P3-Starting499.jpg'/>
    <img src='https://assets.ajio.com/cms/AJIO/WEB/D-UHP-The%20Ethnic%20Affair-P1-Starting599.jpg'/>
  </div>


  <div className="snap"> 
  
    <div><img src='https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/03/27/1026192-untitled-design-2022-03-27t171050.905.jpg'/></div>
   
<div>
    <div id='flower'>
      <div style={{width:'800px'}} >
      <h1 style={{fontSize:'45px'}}>Download Fashiondeal App Now</h1>
      <h3 style={{fontSize:'20px',color:'gray'}}>Fast, Simple & Delightful.</h3>
      <h3 style={{fontSize:'20px',color:'gray'}}>All it takes is 30 seconds to Download.</h3>
       </div>
      <div style={{height:'200px',paddingBottom:'00px'}}>
        <img width={'700px'}  src='https://img.freepik.com/premium-photo/top-view-creeper-plant-golden-pothos-isolated-white-background-natural-leaf-heart-shape_42414-1726.jpg?w=1060'/>
      </div>
</div>
      <div className="download">
        <img width ="200px" src ="https://images.meesho.com/images/pow/playstore-icon-big.webp"/>
        <img width ="200px" src ="https://images.meesho.com/images/pow/appstore-icon-big.webp"/>
      </div>
    </div>
  </div>

   {/* **************************************************************************************** */}
   <div id='security'>
    <div>
      <img width={'100px'}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtA_X1DyCKZmWVJPn4qtGyCSeKyJjrOE0Lmo50gd6GLYvKbzU'/>
      <h1 >100% SECURE PAYMENTS</h1>
      <p>Moving your card details to a much more secured place</p>
    </div>

    <div>
    <img width={'100px'}  src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7WoK8m9PvSpVhHmcOF92oaolkJWm8MPPcD4NOD_kQE4Kzixfj'/>
      <h1 >TRUSTPAY</h1>
      <p>100% Payment Protection. Easy Return Policy</p>
    </div>

    <div>
    <img width={'100px'}  src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTHFhzzZI-Vujxu5Y6GvLbDq_mlG8ud4-bkqwBUfPbKwkJGi1ui'/>
      <h1 >HELP CENTER</h1>
      <p>Got a question? Look no further. Browse our FAQS or submit your query</p>
    </div>

    <div>
    <img width={'100px'}  src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2vUZupbR4N4sGsW8riiNJVsr7B4XkUBni_8-wYdKMHr_DuD8Z'/>
      <h1 >SHOP ON THE GO</h1>
      <p>Download the app and get exciting app only offers at your fingertips</p>
    </div>
   </div>











  </div>
};

export default HomePage;
