// IMPORTS
import React from "react";
import {
    CircleStackIcon,
    CloudArrowUpIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/24/solid';

import bgImg from '../assets/cyber-bg.png';

export default function Hero() {

    // Display
    return (
        <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-[20px] md:text-2xl text-gray-800'>Unique Sequencing & Production</p>
                    <h1 className='py-2 my-1 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                    <p className='text-[20px] md:text-2xl text-gray-800'>This is our Tech brand.</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4 hover:font-bold'>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={bgImg} alt="/" />
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
                                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
                                border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p className="mb-1 font-bold text-gray-800">Data Services</p>
                    <div className='flex flex-col sm:flex-row justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-gray-500'><CloudArrowUpIcon className='h-6 text-indigo-600 mr-1' /> App Security</p>
                        <p className='flex px-4 py-2 text-gray-500'><CircleStackIcon className='h-6 text-indigo-600 mr-1' /> Dashboard Design</p>
                        <p className='flex px-4 py-2 text-gray-500'><ServerIcon className='h-6 text-indigo-600 mr-1' /> Cloud Data</p>
                        <p className='flex px-4 py-2 text-gray-500'><PaperAirplaneIcon className='h-6 text-indigo-600 mr-1' /> API</p>
                    </div>
                </div>
            </div>
        </div>
    );
}