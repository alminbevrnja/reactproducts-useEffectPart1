import { useEffect, useState } from "react"
import ListProductsComponent from "./components/ListProductsComponent";
import SingleProductComponent from "./components/SingleProductComponent";
//toastify
import { ToastContainer } from 'react-toastify';
import backgroundImg from './assets/background.jpg'



function App() {
  
  const [isLoading, setIsLoading] = useState(false)
  const [allProducts, setAllProducts] = useState([])
  
  //products from dummyJSON

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {setAllProducts(data.products)
      setIsLoading(true)
    }
    );
  }, [])

   
    
  return (
    <div style={{backgroundImage: `url(${backgroundImg})`}}>
        
        <div className="flex gap-[10px] flex-wrap justify-center items-center">   
        {isLoading ? allProducts.map((product) => {
          return <ListProductsComponent key={product.id} product={product}/>
        }) : <h2 className="text-red-600 text-[50px]">Loading....</h2>}
          </div> 
        
          
        <ToastContainer/>  
    </div>
  )
}

export default App
