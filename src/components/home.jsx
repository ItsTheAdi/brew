import React from 'react'
// import b from '../images/b.jpg';
// import br from '../images/br.webp';
import wh from '../images/wh.jpg';
import ro from '../images/ro.avif';
function home() {
  return (
    <div className='bg-red-500 w-94 h-42'>
    <img className='w-full h-42 opacity-80' src={ro} alt={wh}></img>
    <div className="text-6xl font-bold absolute top-0 left-0 right-0 bottom-10 flex items-center justify-center text-white bg-opacity-0">
    Awaken your senses 
    <br></br>with the finest beans
    <br></br>roasted to .
    </div>
    </div>
  )
};

export default home