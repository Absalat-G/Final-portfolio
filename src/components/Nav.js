import React from 'react';
import {FaHome} from 'react-icons/fa';
import {FaUserAlt} from 'react-icons/fa';
import {HiOutlinePresentationChartLine} from 'react-icons/hi';
import {HiPhone} from 'react-icons/hi2';
import {SlNotebook} from 'react-icons/sl';
import { Link } from 'react-scroll';
const Nav = () => {
  return ( 
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className="container mx-auto">
       <div className='w-full bg-black/20 dark:bg-white/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 
        flex justify-between items-center text-2xl text-black/60 dark:text-white/60'>
        <Link 
        to='banner'  
        activeClass='active'
        smooth={true}
        spy={true}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <FaHome/>
        </Link>
        <Link to='about'
         activeClass='active'
         smooth={true}
         spy={true}
         className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <FaUserAlt/>
        </Link>
        <Link to='skills'
         activeClass='active'
         smooth={true}
         spy={true}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <SlNotebook/>
        </Link>
        <Link to='portfolio' 
         activeClass='active'
         smooth={true}
         spy={true}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <HiOutlinePresentationChartLine/>
        </Link>
        <Link to='contact'
         activeClass='active'
         smooth={true}
         spy={true}
        className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
        <HiPhone/>
        </Link>
        </div>
        </div>
    
    </nav>
  )
};

export default Nav;
