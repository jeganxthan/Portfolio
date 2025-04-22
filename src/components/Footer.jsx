import React from 'react'
import {vite, tailwind, Vercel} from '../constants'
const Footer = () => {
    return (
        <footer className="w-full py-6 text-white mt-20">
            <div className='flex items-center gap-2'>
                <p className='md:text-sm text-xs ml-2 text-gray-400'>bulid with:</p>
                <img src={vite} alt="" className='w-4 h-4' />
                <img src={tailwind} alt="" className='w-4 h-4' />
                <img src={Vercel} alt="" className='w-4 h-4' />
            </div>
            <hr />
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Jeganathan. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer