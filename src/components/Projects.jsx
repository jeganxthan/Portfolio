import food from '../assets/food.png'
import nike from '../assets/nike.png'
import netflix from '../assets/netflix.png'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reactpng, vite, java, js, tailwind, postman } from '../constants';
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
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
        <div ref={boxRef}>
            <div className='flex justify-center' id='projects'>
                <h1 className='md:text-5xl text-2xl font-bold md:text-left bg-gradient-to-r from-white via-gray-700 to-gray-300 bg-clip-text text-transparent bebas-neue-regular'>Projects</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-between md:mt-10 px-8 md:space-x-4'>
                <div className='border-2 border-gray-600 pb-[150px] p-4 rounded-lg relative hover:scale-[1.03] transform transition-transform duration-300 shadow-lg shadow-gray-500'>
                    <a href="https://netflix-msow7njui-jeganathans-projects-33c38e47.vercel.app/">
                        <img src={netflix} alt="food" className='md:w-[400px]' />
                    </a>
                    <p className='absolute bebas-neue-regular text-xl bg-gradient-to-r from-white via-gray-500 to-gray-400 bg-clip-text text-transparent bebas-neue-regular mt-4 md:w-[370px] w-[270px] lg:w-[280px] xs:w-[200px] xs:mt-[3px]'>I built a responsive Nike clone landing page using React and Tailwind CSS, showcasing modern UI design and functionality.</p>
                </div>
                <div className='border-2 border-gray-600 pb-[150px] p-4 rounded-lg relative hover:scale-[1.03] transform transition-transform duration-300 md:mt-0 mt-6 shadow-lg shadow-gray-500'>
                    <a href="https://food-app-eta-eight.vercel.app/">
                        <img src={food} alt="food" className='w-[400px] ' />
                    </a>
                    <p className='absolute bebas-neue-regular text-xl bg-gradient-to-r from-white via-gray-500 to-gray-400 bg-clip-text text-transparent bebas-neue-regular mt-4 md:w-[370px] w-[270px] lg:w-[280px] xs:w-[200px]'>I built a food API app using a dummy API and utilized fetch to retrieve and display data.</p>
                </div>
                <div className='border-2 border-gray-600 pb-[150px] p-4 rounded-lg relative hover:scale-[1.03] transform transition-transform duration-300 md:mt-0 mt-6 shadow-lg shadow-gray-500'>
                    <a href="https://nikeclone-puce.vercel.app/">
                        <img src={nike} alt="nike" className='w-[400px] ' />
                    </a>
                    <p className='absolute bebas-neue-regular text-xl bg-gradient-to-r from-white via-gray-500 to-gray-400 bg-clip-text text-transparent bebas-neue-regular mt-4 md:w-[370px] w-[270px] lg:w-[280px] xs:w-[200px]'>I created a Nike clone landing page using React and Tailwind CSS, showcasing modern UI design and layout skills.</p>
                </div>
            </div>
            <div className='flex mt-14 ml-20 md:flex-col'>
                <h1 className='md:text-3xl text-2xl font-bold md:text-left bg-gradient-to-r from-white via-gray-700 to-gray-300 bg-clip-text text-transparent bebas-neue-regular'>Skills</h1>
                <div className="w-fit gap-10 grid grid-cols-2 md:grid-cols-6 items-center mt-10 xs:relative xs:right-10 md:ml-20">
                    <div className="animate-floating w-min m-auto flex flex-col items-start">
                        <div className="w-[60px] h-[20px] relative group inline">
                            <a href="https://react.dev/">
                                <img src={reactpng} alt="react" />
                            </a>
                            <p className="absolute top-14 left-1 bg-customGrey rounded-md p-2 text-sm hidden group-hover:block">
                                React
                            </p>
                        </div>
                    </div>
                    <div className="animate-floating w-min m-auto flex flex-col items-start" style={{ animationDelay: '1s' }}>
                        <div className="w-[60px] h-[20px] relative group inline">
                            <a href="https://vite.dev/">
                                <img src={vite} alt="vite" />
                            </a>
                            <p className="absolute top-14 left-2 bg-customGrey rounded-md p-2 text-sm hidden group-hover:block">
                                Vite
                            </p>
                        </div>
                    </div>
                    <div className="animate-floating w-min m-auto flex flex-col items-start">
                        <div className="w-[60px] h-[20px] relative group inline">
                            <a href="https://www.java.com/en/">
                                <img src={java} alt="java"/>
                            </a>
                            <p className="absolute top-14 left-2 bg-customGrey rounded-md p-2 text-sm hidden group-hover:block">
                                Java
                            </p>
                        </div>
                    </div>
                    <div className="animate-floating w-min m-auto flex flex-col items-start" style={{ animationDelay: '1s' }}>
                        <div className="w-[60px] h-[20px] relative group inline">
                            <a href="https://nodejs.org/en">
                                <img src={js} alt="js"/>
                            </a>
                            <p className="absolute top-14 left-0 bg-customGrey rounded-md p-2 text-sm hidden group-hover:block">
                                Javascript
                            </p>
                        </div>
                    </div>
                    <div className="animate-floating w-min m-auto flex flex-col items-start">
                        <div className="w-[60px] h-[20px] relative group inline">
                            <a href="https://tailwindcss.com/">
                                <img src={tailwind} alt="tailwind"/>
                            </a>
                            <p className="absolute top-14 left-0 bg-customGrey rounded-md p-2 text-sm hidden group-hover:block">
                                Tailwind
                            </p>
                        </div>
                    </div>
                    <div className="animate-floating w-min m-auto flex flex-col items-start" style={{ animationDelay: '1s' }}>
                        <div className="w-[60px] h-[20px] relative group inline">
                            <a href="https://www.postman.com/">
                                <img src={postman} alt="postman"/>
                            </a>
                            <p className="absolute top-14 left-0 bg-customGrey rounded-md p-2 text-sm hidden group-hover:block">
                                Postman
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects