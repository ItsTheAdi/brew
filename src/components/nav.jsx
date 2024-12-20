import React from 'react'
import im from '../images/im.jpg';
import { Button } from "@material-tailwind/react";
function nav() {
  return (
    
    <div className= 'h-13 m-0 font-serif text-xl text-grey-600 bg-orange-500 gap-5 flex justify-between items-center'>
        <div className='flex-row items-center justify-center'>
        <img className='items-center rounded-5 5 border-r-1' src={im} alt ={im}></img>
        <h1 className='bg-black flex items-center justify-center text-orange-600'>Sip.Savour.Smile</h1>
        </div>
        <div>
        <button className='p-3
         flex-col
         font-extrabold
         text-black-500
          '>About</button>
        <button className='font-extrabold w-28'>Contact Us</button>
        </div>
        </div>
  )
}

export default nav;