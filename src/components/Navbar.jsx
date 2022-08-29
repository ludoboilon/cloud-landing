//IMPORTS
import React, { useState } from 'react';
import { Bars3Icon, CircleStackIcon, XMarkIcon } from '@heroicons/react/24/solid'


//COMPONENTS
export default function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    // Display
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg lg:px-12'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className='flex items-center'>
                    <h1 className='text-2xl font-bold font-mono mr-4 sm:text-4xl flex items-center'><CircleStackIcon className='h-6 mr-1 pb-1'/> CLOUDIMAX</h1>
                    <ul className="hidden md:flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>Login</button>
                    <button className='px-4 lg:px-6 py-3'>Sign Up</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}
                    
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 md:hidden'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                <div className='flex flex-col my-4'>
                    <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Login</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>
            </ul>
        </div>
    );
}