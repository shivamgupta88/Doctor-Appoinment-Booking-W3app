import React from 'react'

function Navs({balance , address ,instance})  {
	return (
		<div className='bg-black text-white text-right '>
			<ul className=''>
				<li className='inline-block m-2 '>Home {balance}</li>
				<li className='inline-block m-2 '>About</li>
				<li className='inline-block m-2 '>Contact Us</li>
			</ul>
			
		</div>
	)
}

export default Navs
