import React from 'react'
import { Link } from 'react-router-dom'

function CardComponent({product}) {
  return (
    <div className='w-[300px]  bg-white border rounded-lg shadow'>
     <img src={product.thumbnail} alt="" className='w-[300px] h-[200px]object-cover'/>
     <div className='p-5 flex flex-col gap-1'>
     <h2>{product.title}</h2>
     <h3 >${product.price}</h3>
     <p>{product.description}</p>
     <Link className='text-white bg-blue-700 font-medium rounded-lg px-[10px] py-[5px] text-center focus:ring-1 hover:bg-blue-700/90 focus:outline-none ' to={`/singleProduct/${product.id}`}>View More</Link>
     </div>
    </div>
  )
}

export default CardComponent