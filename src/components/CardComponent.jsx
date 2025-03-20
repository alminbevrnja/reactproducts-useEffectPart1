import React from 'react';

function CardComponent({ product }) {
	return (
		<div className='border border-mainOrange rounded w-[200px]'>
			<div className='relative hover:scale-110 transition-all duration-150'>
				<img
					src={product.thumbnail}
					alt=''
					className='w-full h-[150px] object-cover'
				/>
				<div className=' bg-mainBlue/40 hover:bg-mainBlue/0 absolute left-0 right-0 top-0 bottom-0 cursor-pointer inset-0 transition-all duration-200'></div>
			</div>
			<div className='p-4 text-center mt-5 flex flex-col gap-2'>
				<h2>{product.price}</h2>
				<h2>{product.title}</h2>
				<button className='px-[16px] py-[8px] mt-1 rounded-xl cursor-pointer hover:bg-mainOrange/80 transition-all duration-200 hover:scale-105 bg-mainOrange text-mainGrey'>View more</button>
			</div>
		</div>
	);
}

export default CardComponent;
