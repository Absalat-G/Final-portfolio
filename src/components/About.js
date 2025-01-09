import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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
        className='flex-1 bg-contain bg-no-repeat  h-[640px] dark:mix-blend-lighten bg-top '>
          <DotLottieReact
            src="https://lottie.host/aa85eaba-d7dc-4dab-ba62-b2f816f17b93/QgnT9o3m0H.lottie"
            loop
            autoplay
          />
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
        I am a skilled Full-Stack Developer and creative designer with expertise in building modern, responsive websites and crafting visually stunning designs. My technical skill set includes front-end technologies like HTML, CSS, Javascript, React.js, Tailwind CSS, Ant Design, and Webflow, as well as back-end development using Node.js, python, PHP, Laravel supported by MongoDB for efficient database management. In addition to development, I specialize in designing professional logos and banners using tools like Adobe Illustrator and Figma. 
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
