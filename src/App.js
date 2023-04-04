import React from 'react';

import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';

import Contact from './components/Contact';


import Project from './components/Project';
const App = () => {
  return (

    <div className=' bg-whitebackground dark:bg-site bg-no-repeat bg-cover bg-left min-h-screen overflow-hidden'>
      <Header/>
      <Banner/>
      <Nav/>
      <About/>
      <Skills/>
      <Project/>
     
      <Contact/>
   <div className='h-[200px]'></div>
     
    </div>
   
  );
};

export default App;
