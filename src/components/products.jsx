import React from 'react'

function products() {
  return (
    <div className="mt-5 flex-col justify-center items-center">
        <h1 className="text-3xl font-bold items-center">Our Curated Products</h1>
        <div className='flex gap-4 mt-5 justify-center'>
        <div className="h-40 w-40 rounded-lg bg-red-400">
            Arabica
        </div>
        <div className="h-40 w-40 rounded-lg bg-red-400">
            Robusta
        </div>
        <div className="h-40 w-40 rounded-lg bg-red-400">
            Blend
        </div>
        </div>
    </div>
  );
}

export default products