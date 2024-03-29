import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'
const About = () => {
 
  return (
  <section className='section' id='about' >
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat  h-[640px] dark:mix-blend-lighten bg-top '>
          
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount: 0.3}}
        className='flex-1'>
        <h2 className='h2 text-cyan-500'>About</h2>
        <h3 className='h3 mb-4  text-black dark:text-white'>
          I'm a Full Stack Web Developer and Web Designer
        </h3>
        <p className='mb-6  text-black dark:text-white'>
        I got my Bsc Degree on Electrical and computer engineering 
          with focus area of computer stream.Have background on HTML, CSS, JavaScript, WordPress, react.js website development 
          from front end and PHP, Node.js from backend, on Computer Networking also have interest 
          on adobes(illustrator,Photoshop) used for designing logos,banners.
        </p>
        <Link to='contact' >
        <a href='#'  className='w-1/2 px-6 py-3 m-4 btn btn-sm'>
              <button >Hire me</button>
              </a>
              </Link>
        </motion.div>
      </div>
    </div>
   

  </section>
  )
};

export default About;
