import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin } from 'lucide-react';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div ref={boxRef} id='home'>
    <div className="h-screen w-full flex items-center justify-center bebas-neue-regular">
      <div className='flex flex-col transition-transform duration-300 transform hover:scale-105 md:mt-0 mt-[-100px]'>
      <p className=' text-gray-500 md:text-2xl md:ml-16 text-xl lg:text-6xl xl:text-[30px] mb-[-20px] md:mb-0 '>I AM</p>
        <h1 className="md:text-9xl bebas-neue-regular tracking-wide text-center lg:text-[200px] xl:text-[140px] text-[60px]">
          JEGANATHAN
        </h1>
        <p  className='bg-gradient-to-r from-white via-gray-500 to-gray-400 bg-clip-text text-transparent md:text-2xl md:ml-16 text-xl lg:text-6xl xl:text-[20px] ml-4 text-right mt-[-10px]'>
      <TypeAnimation
        sequence={[
          'Hello World!!', 1000,
          'I am a Developer', 1000,
          'Let’s build something awesome!', 1000,
          'I am a full stack developer', 1000
        ]}
        speed={50}
        repeat={Infinity}
        wrapper="h1"
      />
    </p>
      </div>
    </div>
    <div className='text-gray-500 flex flex-col md:mt-[-100px] mt-[-170px] ml-10 space-y-2 text-2xl md:w-[300px] md:h-[300px]'>
      <a href="https://www.linkedin.com/in/jeganathan-i-430869258">
      <Linkedin className='md:size-[24px] size-[18px] hover:bg-slate-700 hover:text-white hover:rounded-full'/>

      </a>
      <a href="https://github.com/jeganxthan">
      <Github className='md:size-[24px] size-[18px] hover:bg-slate-700 hover:text-white hover:rounded-full'/>
      </a>
    </div>
    </div>
  );
};

export default Hero;
