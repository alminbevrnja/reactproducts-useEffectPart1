import React, { useEffect, useState } from 'react'

function SingleProductComponent() {

    const [singleProduct, setSingleProduct] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://dummyjson.com/products/5')
        .then(res => res.json())
        .then((response) => {setSingleProduct(response)
            setLoading(true)
        });
    }, [])


  return (
    loading ? <div className='flex flex-col items-center justify-center'>{}
        <img  className='rounded-full border border-blue-400 bg-slate-300' src={singleProduct.thumbnail} alt="" />
        <div>
            <h2>{singleProduct.title}</h2>
        </div>
    </div> : <h2>Sacekajte...</h2>
  )
}

export default SingleProductComponent