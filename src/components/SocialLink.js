import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
export const links = [
  {
  id: 1,
  child: (
    <>
    LinkedIn <FaLinkedin size={30}/>
    </>
 
  ),
  small: (
    <FaLinkedin size={30}/>
    )
  ,href: 'https://linkedIn.com/in/absalat-girma-4877b4243',
  style: 'rounded-tr-md' 
},
{
id: 2,
child: (
  <>
  Github <FaGithub size={30}/>
  </>

)
,
small: (
  <FaGithub size={30}/>
  )
,
href: 'https://Github.com/Absalat-G',
style: 'rounded-tr-md' 
}
,
{
id: 3,
child: (
  <>
   Mail<HiOutlineMail size={30}/>
  </>

),
small: (
  <HiOutlineMail size={30}/>
  )
,href: 'mailto:workalemahuabsalat2011@gmail.com',
style: 'rounded-tr-md' 
},
{
id: 4,
child: (
  <>
  Resume <BsFillPersonLinesFill size={30}/>
  </>

),
small: (
<BsFillPersonLinesFill size={30}/>
),
href: 'https://drive.google.com/file/d/1im5Alpm6dOGD1bMKD-Kg-oje1ISbZSbD/view?usp=drive_link',
style: 'rounded-tr-md' ,
download: true,
}
]
const SocialLink = () => {
  return (

<div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
<ul>
  {links.map(({id, child, href, style, download}) => (
<li 
key={id} 
className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + style}>
<a href= {href}
 className='flex justify-between items-center w-full text-black dark:text-white'
 download={download}
 target="_blank"
 rel="noreferrer"
 > 
  {child}
</a>
    </li>
   
  ))}
    
</ul>

    </div>
  );
};

export default SocialLink