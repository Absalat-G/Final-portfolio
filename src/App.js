import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';

import Contact from './components/Contact';


import Project from './components/Project';
const App = () => {
  return (

    <div className='bg-site bg-no-repeat bg-cover bg-left min-h-screen overflow-hidden dark:bg-slate-300'>
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
