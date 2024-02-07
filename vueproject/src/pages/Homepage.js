import React, { useEffect, useState } from 'react';

import QuickbookSmall from '../components/QuickbookSmall';
import '../styles/quickbook.css';
import LocationDropdown from '../components/LocationDropdown';
import Navbar from '../components/Navbar.js'

function Homepage() {

  // let [width, setWidth] = React.useState();
  // let [newWidth, setNewWidth] = React.useState();

  // window.addEventListener('resize', setNewWidth);

  // React.useEffect(()=>{

  //   setWidth(window.innerWidth)

  //   if(width){
  //     console.log(width);
  //   }
  //   else{
  //     console.log("No width value!")
  //   }
    
  // }, [newWidth]);

  return (
    <div>

      
      <QuickbookSmall/>
      {/* <p>{console.log(Object.keys(width))}</p> */}
      {/* {<p>{width}</p>} */}
      
      {/* <div className='quickbookbar'><p>footer</p></div> */}
      {/* {console.log(width)} */}
        <LocationDropdown/>

      <Navbar />
          
      <LocationDropdown/>

    </div>
  )
}

export default Homepage