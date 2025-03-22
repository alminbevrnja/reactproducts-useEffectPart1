import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';

function SingleProductPage() {
	const [singleProduct, setSingleProduct] = useState({});
	const [currentIndexImg, setCurrentIndexImg] = useState(0);
	const [loading, setLoading] = useState(false);

	const { id } = useParams();

	useEffect(() => {
		productService
			.getSingleProduct(id)
			.then((res) => {
				setSingleProduct(res.data);
				setLoading(true);
        
        
			})
			.catch((err) => console.log(err));
	}, []);

  function handleImage(index){
    setCurrentIndexImg(index)
  }

	return (
		<div className='container mx-auto flex'>
			{loading ? (
				<>
					<div className='w-[50%]'>
						<img src={singleProduct.images[currentIndexImg]} alt='' />
						<div className='flex gap-2 items-center'>
							{singleProduct.images?.map((image, index) => {
								return (
									<img
										className='w-[90px] h-[90px] border cursor-pointer'
										src={image}
										alt='asd'
										key={index}
                    onClick={() => handleImage(index)}
									/>
								);
							})}
						</div>
					</div>
					<div>
						<h2>{singleProduct.title}</h2>
						<h1 className='text-red-400'>${singleProduct.price}</h1>
						<p>{singleProduct.description}</p>
					</div>
				</>
			) : (
				<h1>LOADING....</h1>
			)}
		</div>
	);
}

export default SingleProductPage;
