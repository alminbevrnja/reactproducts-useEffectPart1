<div className="flex flex-wrap justify-center items-center">   
        {isLoading ? allProducts.map((product) => {
          return <ListProductsComponent key={product.id} product={product}/>
        }) : <h2 className="text-red-600">Loading....</h2>}
          </div> 