   
import React from "react";
import useThemeSwitcher from "./useThemeSwitcher";
import { FiMoon, FiSun} from 'react-icons/fi';

const Header = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();
  return (
  
  <header id='home' className='lg:fixed lg:top-0 lg:left-0 lg:right-0 flex items-center py-8'>
<div className='container mx-auto '>
<div className=' items-center justify-between flex'>
  

							{activeTheme === 'dark' ? (
							<h1
									
									className=" w-36 font-fourth text-5xl text-black" 
									alt="Dark Logo"
								>Absalat</h1>
							) : (
								<h1
									
									className=" w-36 font-fourth text-5xl text-white"
									alt="Dark Logo"
								>Absalat</h1>
							)}
				
 
  {/* Theme switcher large screen */}
  <div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-secondary-dark hover:text-gray-400 dark:text-secondary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>
					<div className="w-48  items-center font-fourth text-xl ">
<a href="https://drive.google.com/file/d/1im5Alpm6dOGD1bMKD-Kg-oje1ISbZSbD/view?usp=drive_link" className="btn btn-sm relative inline-flex items-center no-underline justify-start py-1.5 pl-2.5 pr-12 overflow-hidden font-semibold text-btn 
 transition-all duration-150 ease-in-out rounded-2xl hover:pl-10 hover:pr-6 bg-gray-50 group">
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

<span className="btn-top relative w-full text-left text-xl  transition-colors duration-200 ease-in-out group-hover:text-white">Resume</span>
</a>

    </div>

</div>
</div>
</header>

  )

};

export default Header;
