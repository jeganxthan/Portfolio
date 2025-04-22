import React from 'react'
import jegan from '../assets/jegan.png'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resume from "../assets/jeganathan.pdf"
gsap.registerPlugin(ScrollTrigger);
const About = () => {
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
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);
    return (
        <section ref={boxRef} id="about" >
            <div className="min-h-screen flex items-center px-4 py-16 bebas-neue-regular">
                <div className='flex flex-col md:flex-row justify-between  w-full max-w-6xl mx-auto'>
                    <div className='mb-8 md:mb-0 flex flex-col tracking-widest justify-center'>
                        <h1 className='md:text-5xl text-2xl font-bold text-center md:text-left bg-gradient-to-r from-white via-gray-700 to-gray-300 bg-clip-text text-transparent '>ABOUT</h1>
                        <p className='roboto md:w-[500px] md:text-2xl mt-4 tracking-wider text-center bg-gradient-to-b from-white via-gray-400 to-gray-300 bg-clip-text text-transparent '>Aspiring Web Developer with a strong foundation in React.js, currently expanding backend expertise in Node.js and Express.js. Familiar with core Java concepts and actively learning Data Structures and Algorithms (DSA) to enhance problem-solving abilities. Pursuing a B.Tech degree at Manakula Vinayagar Institute of Technology, with a passion for building responsive, user-friendly web applications and continuously exploring new technologies.</p>
                        <div className='flex justify-center mt-6'>
                            <a href={resume} className="relative overflow-hidden px-6 py-2 text-white bg-black group mt-2 rounded-md">
                                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                                    Show CV
                                </span>
                                <span className="absolute inset-0 -left-[20%] -right-[20%] bg-white z-0 transform scale-x-0 skew-x-[-12deg] group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </a>


                        </div>
                    </div>
                    <div>
                        <img src={jegan} alt="profile" className='w-[500px] rounded-lg md:ml-12 hidden md:block' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About