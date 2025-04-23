import React from 'react';
import portfolioImage from '../images/portfolio_image-removebg-preview.png';

export default function Banner () {

    return (
        <div className='w-5/6 m-auto flex flex-row'>
          
            {/* Content */}
            <div className='flex flex-col gap-6'>
                <div>
                    <h1 className='font-bold text-7xl w-1/2'>Hello I'm Kazi Saiful Anwar </h1>
                </div>

                <div>
                    <h3 className='text-3xl w-1/2'>I am a fullstack Blockchain Developer based on Bangladesh | Focused on building user-centric solutions across smart contracts, NFTs, and Defi platform </h3>
                </div>
                <div>
                    <button href= "#" className='text-2xl'>Say Hello!</button>
                </div>

                <div className='flex flex-row gap-10'>

                    <div>
                        <h1>1 Y.</h1>
                        <h3>Experience</h3>
                    </div>

                    <div>
                        <h1>25+</h1>
                        <h3>Project Completed</h3>
                    </div>

                    <div>
                        <h1>19</h1>
                        <h3>Happy Client</h3>
                    </div>

                </div>
            
                
            </div>

            {/* Image */}
            <div className='w-2/6 grow'> 
                <img src={portfolioImage} alt='banner_image' className='max-w-lg max-h-96'></img>
            </div>
        </div>
    )
}