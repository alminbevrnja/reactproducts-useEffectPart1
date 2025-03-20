import React, { useState } from 'react';
//icons
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';

function NavbarComponent() {
	const [toggle, setToggle] = useState(false);

  function handleToggle(){
    setToggle(!toggle)
  }
 

	return (
		<div className='h-[120px]  flex items-center justify-between px-5'>
			<h1>LOGO</h1>

			{/* Desktop view */}
			<ul className='items-center gap-4 hidden lg:flex'>
				<li className='text-[20px] hover:text-mainOrange text-mainBlue cursor-pointer'>
					Home
				</li>
				<li className='text-[20px] hover:text-mainOrange text-mainBlue cursor-pointer'>
					About
				</li>
				<li className='text-[20px] hover:text-mainOrange text-mainBlue cursor-pointer'>
					Contact
				</li>
			</ul>
			<div className='lg:hidden flex '>
				<IoMenuOutline onClick={handleToggle} size={32} color='orange' className='cursor-pointer' />

				{/* mobile view*/}
				{toggle && (
					<div className='flex justify-center  absolute w-[50%] bg-mainBlue rounded-xl top-0 right-0 bottom-0 z-10'>
            <div>
              <IoMdClose onClick={handleToggle} size={32} color='white' className='absolute left-0 cursor-pointer' />
            </div>
						<ul className='items-center gap-4 mt-10'>
							<li className='text-[20px] hover:text-mainOrange text-mainGrey cursor-pointer'>
								Home
							</li>
							<li className='text-[20px] hover:text-mainOrange text-mainGrey cursor-pointer'>
								About
							</li>
							<li className='text-[20px] hover:text-mainOrange text-mainGrey cursor-pointer'>
								Contact
							</li>
						</ul>
            
					</div>
				)}
			</div>
		</div>
	);
}

export default NavbarComponent;
