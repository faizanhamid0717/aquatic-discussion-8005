import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div >

     <div id='navbar1' >

          <div>
           Brand Waali Quality, Bazaar Waali Deal!
          </div>
        <div style={{display:'flex',justifyContent:'space-around'}} id='navbar'>
          <p>Impact@Fashiondeal</p>
          <p> Gift Cards </p>
          <p> Help Center</p>
          <p>Sell On Fashiondeal </p>
          <p>Download App</p>
        </div>

     </div>

      <div style={{border:'1px solid green',height:'60px'}}>
        
      </div>
    </div>
   
  )
}
