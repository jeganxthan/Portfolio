import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    < >
      <Navbar/>
      <Hero/>
      <div className='md:mt-[-130px] '>
        <About />
      </div>
      <div className='md:mt-16 mt-[-30px]'>
        <Projects/>
      </div>
      <div className='mt-20'>
      <Contact/>
      </div>
      <Footer/>
    </>
  );
};

export default App;
