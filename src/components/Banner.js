import React from 'react';
import Image from '../assets/avatar2.png'
import {TypeAnimation} from 'react-type-animation'
import {motion } from 'framer-motion'
import {fadeIn} from '../variants'
import SocialLink, { links } from './SocialLink'
import emoji from '../assets/emoji.png'
import { Link } from 'react-scroll';

const Banner = () => {
  return <section id='home' className='min-h-[85vh] lg:mim-h-[78vh] flex items-center' >
<div className='container mx-auto'>
<div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-10'>
<div className='flex-1 text-center font-secondary lg:text-left'>
  <motion.div
   variants={fadeIn('left', 0.2)}
   initial='hidden'
    whileInView={'show'} 
    viewport={{once:true, amount:0.7}}
   className='flex items-center justify-center lg:hidden h-[200px]'>
    <img src={emoji} alt=''/>
  </motion.div>
  <motion.h1 
  variants={fadeIn('up', 0.3)}
   initial='hidden'
    whileInView={'show'} 
    viewport={{once:true, amount:0.7}}
   className='text-[55px] font-bold leading-[0.8] lg:text-[90px] text-black dark:text-white'>
    Absalat <span>Girma</span></motion.h1>

<motion.div
 variants={fadeIn('up', 0.4)}
   initial='hidden'
    whileInView={'show'} 
    viewport={{once:true, amount:0.7}}
 className='mb-6 text-[36px] lg:text-[52px] font-secondary font-semibold uppercase leading-[1]'>
  <span className='mr-3  text-black dark:text-white'>I am a </span>
  <TypeAnimation
   sequence={[
    'Web Developer',
     2000,
     'Web Designer',
      2000 ,
      'Logo Designer',
       2000 
    ]}
  speed={50}
  className='text-cyan-500'
  wrapper='span'
  repeat={Infinity}
  />
  </motion.div>
  <motion.p 
  variants={fadeIn('up', 0.5)}
  initial='hidden'
   whileInView={'show'} 
   viewport={{once:true, amount:0.7}}
  className='mb-8 max-w-lg mx-auto lg:mx-0  text-black dark:text-white'> 
  A passionate woman who can take multiple responsibilities with competence. 
          As well as Strong planning and organizational skills.
          </motion.p>
          <motion.div
           variants={fadeIn('up', 0.6)}
  initial='hidden'
   whileInView={'show'} 
   viewport={{once:true, amount:0.7}}>
    <Link to='portfolio' ><a href='#' className='text-gradient btn-link'>My Portfolio</a></Link>

</motion.div>
</div>

<div ><SocialLink/></div>
<motion.div 
variants={fadeIn('up', 0.7)}
initial='hidden'
 whileInView={'show'} 
 viewport={{once:true, amount:0.7}}
className='lg:hidden flex text-[20px] gap-x-6 max-w-max mx-auto'>
  {links.map(({ href,small, download})=> (
 
  <a href= {href}
  download={download}
  target="_blank"
  rel="noreferrer"
  > 
   {small}
 </a>
  
  
  ))}
</motion.div>
<motion.div 
variants={fadeIn('down', 0.5)}
initial='hidden'
 whileInView={'show'} 
 
className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[700px] '>
  <img src={Image} alt=''/>
</motion.div>
</div>
</div>
  </section>;
};

export default Banner;
