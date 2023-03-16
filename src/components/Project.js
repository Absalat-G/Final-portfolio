
import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import Image from '../assets/portfolio1.PNG'
import Image1 from '../assets/portfolio2.jpg'
import Image2 from '../assets/portfolio3.PNG'
import Image3 from '../assets/portfolio-img3.png'
import Image4 from '../assets/portfolio-img2.png'
import { Autoplay } from 'swiper';

const Project = () => {

  const [active ,setActive] = useState(null)
  const langs = [
    {name:'React with antdesign', para:'Website development for IT and Business Institute', color: '',image:Image, Demo: 'https://www.saintmichael.edu.et',Github:'https://Github.com/Absalat-G'},
    {name:'Adobe illustrator', para: 'Logo design for Company',image: Image1,  Demo:Image1,Github:''},
    {name:'Wordpress',para:'Website development for Federal Police Commision',image: Image2  ,Demo: 'https://dev-federalpolice.pantheonsite.io/',Github:''},
    {name:'PHP',para:'Blood Bank Management System',image: Image3 , Demo: Image3,Github:''},
    {name:'Arduino',para:'RFID based Antitheft Security System for Museum ',image: Image4, Demo: 'https://www.google.com/',Github:''},
  
  ]
  
  return (
    
    <div className=" section pt-48 h-screen text-white flex items-center justify-center " id='portfolio'>
     
<div className="max-w-5xl">
<div>
          <p className=" flex items-center justify-center text-4xl font-bold p-2">
          <span className='font-black'>My &nbsp;</span>
          <span className="text-cyan-500 font-bold inline border-b-4 border-gray-500 ">  Projects</span>
          </p>
          <br />
        </div>
<Swiper 
spaceBetween={50}
slidesPerView={3}
onSlideChange={(cur) => setActive(cur.realIndex)}

loop={true}
centeredSlides={true}
speed={800}
autoplay={{
  delay: 3000,
}}
modules={[Autoplay]}
>
{
  langs.map(({color,name,image,para,Demo,Github},i)=>(
  <SwiperSlide key={i}>
    <div className="h-96 flex ">
        <div className={`card ${active === i && "card-active"} to-red-600/40 ${color} border-red-600`}>
          {/* <div className="logo">
            <ion-icon name={`logo-${lang.logo}`}></ion-icon>
          </div> */}
          <div className='img1'>
            <img src={image}
            alt=""
            className=' rounded-md  '
            
            />
          <h2 className=" text-3xl mt-6 font-semibold">{name}</h2>
            <p className='para'>
             {para}
          
        </p>
            {/* <div className='bg-red-600 skill-level'>{lang.skill}</div> */}
            <div className='flex items-center justify-center'>
              <a href={Demo}  className='w-1/2 px-6 py-3 m-4 btn btn-sm'>
              <button >Demo</button>
              </a>
              <a href={Github} className='w-1/2 px-6 py-3 m-4 btn btn-sm'>
              <button >Code</button>
              </a>
             
            </div>
          </div>
           
        </div>
    </div>
</SwiperSlide>
  ))
   }
</Swiper>
</div>
    </div>
  )
}

export default Project