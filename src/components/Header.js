import React, { useState } from 'react';

import Logo from '../assets/logo.svg'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Theme from './Theme';
const Header = () => {
  const[darkToggle, setDarkToggle] = React.useState(false)
  return (
   
  <header id='home' className='py-8'>
<div className='container mx-auto '>
<div className='justify-between items-center flex'>
  
  <h1 className='font-fourth text-5xl'>Absalat</h1>
  <BsFillMoonStarsFill onClick={()=> setDarkToggle(!darkToggle)} className={`cursor-pointer text-2xl ml-10 ${darkToggle && 'dark'}`}/>
<div className="">
<a href="#_" className="btn btn-sm relative inline-flex items-center no-underline justify-start py-1.5 pl-2.5 pr-12 overflow-hidden font-semibold text-btn  transition-all duration-150 ease-in-out rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
<span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out  group-hover:h-full"></span>
<span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  group-hover:text-indigo-600 text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</span>
<span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  text-white group-hover:text-black ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
</svg>
</span>

<span className="btn-top relative w-full text-left text-xl  transition-colors duration-200 ease-in-out group-hover:text-white">Download Cv</span>
</a>

    </div>
</div>
</div>
</header>

  )
};

export default Header;
