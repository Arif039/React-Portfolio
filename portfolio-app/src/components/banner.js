import React from 'react';
import portfolioImage from '../images/portfolio_image-removebg-preview.png';

export default function Banner () {

    return (
        <div className='w-5/6 m-auto max-h-screen flex flex-row justify-between flex-wrap mt-20'>
          
            {/* Content */}
            <div className='flex flex-col gap-10 md:w-2/3'>
                <div>
                    <h1 className='font-bold text-2xl md:text-7xl'>Hello I'm Kazi Saiful Anwar </h1>
                </div>

                <div>
                    <h3 className=' text-xl md:text-3xl'>I am a fullstack Blockchain Developer based on Bangladesh | Focused on building user-centric solutions across smart contracts, NFTs, and Defi platform </h3>
                </div>
                <div>
                    <button href= "#" className='text-2xl bg-violet-500 p-3 rounded-lg text-white hover:scale-105  transition-transform all delay-100'>Say Hello!</button>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-9 text-xl '>

                    <div className='bg-pink-200 p-4 text-center  rounded-lg'>
                        <h1 className='font-bold'>1 Y.</h1>
                        <h3>Experience</h3>
                    </div>

                    <div className='bg-pink-200 p-4 text-center  rounded-lg'>
                        <h1 className='font-bold'>25+</h1>
                        <h3>Project Completed</h3>
                    </div>

                    <div className='bg-pink-200 p-4 text-center  rounded-lg'> 
                        <h1 className='font-bold'>19</h1>
                        <h3>Happy Client</h3>
                    </div>

                </div>
            
                
            </div>

            {/* Image */}
            <div className='mt-10 md:m-0'> 

                <div>
                    <img src={portfolioImage} alt='banner_image' className='w-full'></img>
                </div>
                
            </div>
        </div>
    )
}