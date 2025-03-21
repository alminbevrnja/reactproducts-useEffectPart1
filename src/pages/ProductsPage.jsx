import React, { useEffect, useState } from 'react'
import productService from '../services/productService'
import CardComponent from '../components/CardComponent'

function ProductsPage() {

  const [allProducts, setAllProducts] = useState([])
  const [isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
      productService.getAllProducts()
        .then(res => {setAllProducts(res.data.products)
                      setIsLoading(true)
        })
        .catch(err => console.log(err))
  }, [])

  return (
    <div className='container mx-auto'>
        <div className='flex flex-wrap justify-between'>
          {isLoading ? allProducts.map((product) => {
            return <CardComponent key={product.id} product={product}>
              
              
            </CardComponent>
          }) : <h1 className='text-center text-green-500'>LOADING...</h1> }
        </div>
    </div>
  )
}

export default ProductsPage