import React from 'react'
//icons
import { FaShoppingCart } from "react-icons/fa";

function ListProductsComponent({product}) {
    
    
  return (
    <div className='w-[300px] rounded-3xl bg-blue-200 h-full flex flex-col items-center justify-center gap-2 border border-blue-500 p-[20px]'>
        <img className='object-cover w-full h-[150px]' src={product.thumbnail} alt={product.title} />
        <div className='mt-[50px] text-center'>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            

        </div>
        <FaShoppingCart size={25} color='#80BCFF' className='cursor-pointer' />
    </div>
  )
}

export default ListProductsComponent