import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productService from '../services/productService';

function SingleProductPage() {

  const [singleProduct, setSingleProduct] = useState({})
  const {id} = useParams()
  
  
  useEffect(() => {
    productService.getSingleProduct(id)
      .then(res => setSingleProduct(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div>
        <img src={singleProduct.thumbnail} alt="" />
      </div>
      <div>
        <h2>{singleProduct.title}</h2>
        <h1 className='text-red-400'>${singleProduct.price}</h1>
        <p>{singleProduct.description}</p>
      </div>
    </div>
  )
}

export default SingleProductPage