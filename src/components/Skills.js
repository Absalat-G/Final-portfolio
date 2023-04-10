import React from 'react';
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"

import github2 from "../assets/github black.jpg"

import reactImage from "../assets/react.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const Skills = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src:  github2,
      title: "GitHub",
      style: "dark:shadow-gray-400 shadow-gray-800 ",
    },
    {
      id: 6,
      src: node,
      title: "Node Js",
      style: "shadow-amber-200",
    },
      ]
  return <div name="skills" className=' lg:mt-20 mt-24 section bg-gradient-to-b  to-black w-full h-screen ' id='skills'>
 <div className="max-w-screen-lg container mx-auto p-4 flex flex-col justify-center w-full h-full text-black dark:text-white">
        <div>
          <p className=" text-4xl text-cyan-500 font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <motion.div 
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md bg-slate-200 dark:bg-transparent hover:scale-105 duration-500 py-2 rounded-lg  text-black dark:text-white ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </motion.div>
      </div>
   
   </div>;
};

export default Skills;
