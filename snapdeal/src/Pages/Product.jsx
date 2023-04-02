import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getProductFn } from "../redux/productReducer/action";
import "./Product.css"
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import ProductCart from "./ProductCard";

import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [searchParam,setSearchParam]=useSearchParams()
  const [order,setOrder]=useState('')
  const [selectedColors,setSelectedColors]=useState('')

  const data=useSelector((store)=>store.productReducer.product
  )
  console.log('products',data)
  const dispatch=useDispatch()


  const handelSort=(e)=>{
    console.log(e.target.value)
    setOrder(e.target.value)
  }



const handleColorChange = (e) => {
  const color = e.target.value;
  if (selectedColors.includes(color)) {
    setSelectedColors(selectedColors.filter((c) => c !== color));
  } else {
    setSelectedColors([...selectedColors, color]);
  }
}



useEffect(() => {
  let obj = {
    params: {}
  }
  
  if (order === 'asc') {
    obj.params._sort = 'price';
    obj.params._order = 'asc';
  } else if (order === 'desc') {
    obj.params._sort = 'price';
    obj.params._order = 'desc';
  }



  setSearchParam(obj.params)
}, [order])

useEffect(() => {
  let obj = {
    params: {}
  }
  
  if (order === 'asc') {
    obj.params._sort = 'price';
    obj.params._order = 'asc';
  } else if (order === 'desc') {
    obj.params._sort = 'price';
    obj.params._order = 'desc';
  }
  if (selectedColors.length > 0) {
    obj.params.color = selectedColors.join(',');
  }

  dispatch(getProductFn(obj))
}, [order,selectedColors])






  return <div>
        
      <div id='section1'>
        <p> Home | Sports Fashion   | Men's Sports Fashion  |  Men's Sports Footwear | Sports Shoes for Men</p>
      </div>

     <div id="section2">
      <p>Trending searches  :  </p>
      <button>Kitchen Product</button>
      <button>Shoes for men</button>
      <button>Kurti set</button>
      <button>Sandal men</button>
      <button>Sport shoe men</button>
      <button>Saree</button>
      <button>Tshirt</button>
      <button>Wallstikers</button>
     </div>

     <div id='body'>

  <div id='filter'>
         <h3>- Sports Fashion</h3>
          <p className="f1">- Men's Fashion   - 3388</p>
          <p className="f2">- Women's Fashion  - 3388</p>
          <p className="f3">- Sports Shoes - 3388</p>

             <div className="detail">
              <div>
                <p>Training Shoes </p>
                <br/>
                <p>Basketball Shoes </p>
                <br/>
                <p>Cricket Shoes  </p>
                <br/>
                <p>Football Shoes </p>
                <br/>
                <p>Hiking Shoes  </p>
                <br/>
                <p>Indoor Court Shoes </p>
                <br/>
                <p>Running Shoes </p>
                <br/>
                <p>Tennis Shoes</p>
                <br/>
                <br/>   
              </div>

              <div>
              <p> 5 </p>
              <br/>
                <p> 9 </p>
                <br/>
                <p>14 </p>
                <br/>
                <p>  6 </p>
                <br/>
                <p> 6</p>
                <br/>
                <p> 8</p>
                <br/>
                <p>3337</p>
                <br/>
                <p>  3</p>
                <br/>
                <br/>    
              </div>
             </div>

             <hr />
            {/* ***********************Price*********** */}

            <div id='pricerange'>
               <h2>* Price</h2>
               <hr/>
               {/* <br/> */}
               <RangeSlider
                   aria-label={['min', 'max']}
                   colorScheme='pink'
                   defaultValue={[0, 30]}
                   width={'200px'}
                    >
               <RangeSliderTrack>
                <RangeSliderFilledTrack />
                 </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                 <RangeSliderThumb index={1} />
                </RangeSlider>

            <div className="rupees">
                 <p>Rs 199</p>
                 <p>Rs 3999</p>
            </div>

            <button>Rs. 199</button> -
            <button>Rs. 3999</button>
            <button className="go">GO</button>
            </div>

{/* ********************************************COLOR********************************* */}

        <div id='color'>
            <h2>* Color</h2>
                <hr/>

             <div className="colorpaint">
                <div style={{padding:'5px',width:'130px',fontSize:'14px',color:'gray'}}>

                {['blue'].map((color) => (
                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'30px',textAlign:'left'}}>
                       <input type='checkbox' value={color}  checked={selectedColors.includes(color)}
          onChange={handleColorChange}/>
                       <p style={{width:'14px',height:'13px',marginTop:'4px',backgroundColor:'blue'}}></p>
                       <h3> Blue</h3>
                     </div>
                ))}
                     <br/>
                     {['red'].map((color) => (
                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'30px'}}>
                       <input type='checkbox'  value={color}  checked={selectedColors.includes(color)}
          onChange={handleColorChange}/>
                       <p style={{width:'14px',height:'13px',marginTop:'4px',backgroundColor:'red',marginRight:'10px'}}></p>
                       <h3>Red</h3>
                     </div>
                      ))}
                     <br/>

                     {['green'].map((color) => (
                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'30px'}}>
                       <input type='checkbox'  value={color}  checked={selectedColors.includes(color)}
          onChange={handleColorChange}/>
                       <p style={{width:'14px',height:'13px',marginTop:'4px',backgroundColor:'green'}}></p>
                       <h3>Green</h3>
                     </div>
                      ))}
                     <br/>

                     {["white"].map((color) => (
                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'30px'}}>
                       <input type='checkbox'  value={color}  checked={selectedColors.includes(color)}
          onChange={handleColorChange}/>
                       <p style={{border:'.5px solid gray',width:'14px',height:'13px',marginTop:'4px',backgroundColor:'white'}}></p>
                       <h3> White</h3>
                     </div>
                     ))}
                     <br/>

                     {["black"].map((color) => (
                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'30px'}}>
                       <input type='checkbox'  value={color}  checked={selectedColors.includes(color)}
          onChange={handleColorChange}/>
                       <p style={{width:'14px',height:'13px',marginTop:'4px',backgroundColor:'black'}}></p>
                       <h3> Black</h3>
                     </div>
                     ))}

                </div>

                <div style={{width:'40px',marginLeft:'60px',fontSize:'14px',color:'gray'}}>
                <p> 255 </p>
                 <br/>
                <p> 185 </p>
                <br/>
                <p>344 </p>
                <br/>
                <p> 5 </p>
                <br/>
                <p> 216</p>
                </div>

                <button style={{width:'100px',marginTop:'10px',border:'1px solid black'}}>VIEW MORE</button>
             </div>
           </div>
  {/* **************************************************SIZE******************************************************* */}
              
  <div id='color'>
            <h2>* Size</h2>
                <hr/>

             <div className="colorpaint">
                <div style={{padding:'5px',width:'130px',fontSize:'14px',color:'gray'}}>

                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'70px',textAlign:'left'}}>
                       <input type='checkbox'/>
                       
                       <h3> 6</h3>
                     </div>
                     <br/>

                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'70px'}}>
                       <input type='checkbox'/>
                       
                       <h3>7</h3>
                     </div>
                     <br/>

                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'70px'}}>
                       <input type='checkbox'/>
                       
                       <h3>8</h3>
                     </div>
                     <br/>

                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'70px'}}>
                       <input type='checkbox'/>
                       
                       <h3>9</h3>
                     </div>
                     <br/>

                     <div style={{display:'flex',justifyContent:'space-evenly',paddingRight:'70px'}}>
                       <input type='checkbox'/>
                       
                       <h3>10</h3>
                     </div>

                </div>

                <div style={{width:'40px',marginLeft:'60px',fontSize:'14px',color:'gray'}}>
                <p> 194 </p>
                 <br/>
                <p> 196</p>
                <br/>
                <p>182 </p>
                <br/>
                <p> 175 </p>
                <br/>
                <p> 142</p>
                </div>

                <button style={{width:'100px',marginTop:'10px',border:'1px solid black'}}>VIEW MORE</button>
             </div>
           </div>
  {/* ****************************************************************************************************** */}
            <br/>
            <div style={{display:"flex" ,justifyContent:'space-between',padding:'5px',fontWeight:'bold'}}>
                <p >Outer Material</p>
                <p style={{fontWeight:'100px',fontSize:'20px',color:'gray'}}>+</p>
            </div>
              <br/>
            <div style={{display:"flex" ,justifyContent:'space-between',padding:'5px',fontWeight:'bold'}}>
                <p >Cushioning</p>
                <p style={{fontWeight:'100px',fontSize:'20px',color:'gray'}}>+</p>
            </div>
             <br/>
            <div style={{display:"flex" ,justifyContent:'space-between',padding:'5px',fontWeight:'bold'}}>
                <p >Discount %</p>
                <p style={{fontSize:'20px',color:'gray'}}>+</p>
            </div>
   
   
         </div>
           
         {/* ******************************************PRODUCTS******************************************** */}
      <div>
         <div id="sort" style={{width:'950px',height:'70px'}}>

            <div style={{width:'230px',display:"flex",justifyContent:'space-between',marginLeft:'15px',paddingTop:'10px'}}>
              <h1 style={{fontSize:'30px'}}>ALL ITEMS </h1>
              <p style={{paddingTop:'10px',paddingRight:'45px',color:'gray'}}>(40)</p>
            </div>


            <div style={{border:"1px solid gray",width:'250px',height:'45px',paddingTop:'6px',marginTop:'8px',borderRadius:'5px',marginLeft:'200px'}}>

              <div onChange={handelSort}>
              

          <label>Sort by Price: </label>
            <select value={order} onChange={handelSort}>
              <option value=''>--Select--</option>
              <option value='asc'>Low to High</option>
              <option value='desc'>High to Low</option>
            </select> 
             </div>      
               

            </div>
         </div>


          <div id='product'>
          {data?.map((ele)=>
             <ProductCart {...ele} key={ele.id}/>
          )}
          </div> 
          
      </div>
      
     </div>
     {/* <Footer/> */}






























  </div>;
};

export default Product;
