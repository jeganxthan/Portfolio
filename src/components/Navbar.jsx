import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <div className="bg-gradient-to-r from-white via-gray-700 to-gray-300 bg-clip-text text-transparent fixed w-full py-4 px-6 z-10 bebas-neue-regular justify-end md:flex hidden md:text-3xl lg:text-4xl xl:text-2xl backdrop-blur-md backdrop-brightness-90">
        <nav>
          <ul className="flex space-x-12">
            
              <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-300">
                <a href="#home">Home</a>
              </li>
              <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-300" >
                <a href="#about">About</a>
              </li>
              <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-300">
                <a href="#projects">Projects</a>
              </li>
              <li className="cursor-pointer hover:text-white hover:scale-105 transition-all duration-300">
                <a href="#contact">contact</a>
              </li>
            
          </ul>
        </nav>
      </div>

      <div className="md:hidden flex justify-end p-4 relative z-20">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="absolute top-full right-4 mt-2  bg-gradient-to-r from-white via-gray-700 to-gray-300 bg-clip-text text-transparent p-4 w-40 transition-all duration-300 bebas-neue-regular">
            <ul className="flex flex-col space-y-4">
              
                <li className="transition duration-200 tracking-wider text-base">
                <a href="#home">Home</a>
                </li>
                <li className="transition duration-200 tracking-wider text-base">
                <a href="#about">About</a>
                </li>
                <li className="transition duration-200 tracking-wider text-base">
                <a href="#projects">Projects</a>
                </li>
                <li className="transition duration-200 tracking-wider text-base">
                <a href="#contact">contact</a>
                </li>
              
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
