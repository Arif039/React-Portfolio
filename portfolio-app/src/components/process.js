
import React from 'react';
import researchImage from '../images/research.png';
import analyzeImage from '../images/analyze.png';
import designImage from '../images/design.png';
import launchImage from '../images/launch.png';

export default function Process () {
    return (

        <div className='bg-gray-100 py-20  mt-20'>

<div className='w-5/6 m-auto mt-20'>

<div className='grid grid-cols-1 md:grid-cols-2'>

<div className='md:w-5/6 flex flex-col justify-center'>
    <h1 className='text-3xl font-bold py-3'>Work Process</h1>
    <h3 className='text-base md:text-xl py-3 text-[#697484]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
    <h3 className='text-base md:text-xl py-3 text-[#697484]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
</div>

<div className='grid grid-cols-1 py-3 md:grid-cols-2 gap-8'>

    <div className=' '>
        <div className='bg-white p-10 rounded-lg mb-10'>
            <img src={researchImage} alt='researchImage' className='mb-4'></img>
            <h2 className='text-2xl font-bold mb-4'>1. Research</h2>
            <h3 className='text-[#7f8794] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
        </div>

        <div className='bg-white p-10 rounded-lg'>
            <img src={designImage} alt='analyzeImage' className='mb-4'></img>
            <h2 className='text-2xl font-bold mb-4'>2. Design</h2>
            <h3 className='text-[#7f8794] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
        </div>
        
    </div>

    <div className=''>

        <div className='bg-white p-10 rounded-lg md:mt-10'>
            <img src={analyzeImage} alt='designImage'  className='mb-4'></img>
            <h2 className='text-2xl font-bold mb-4'>3. Analyze</h2>
            <h3 className='text-[#7f8794] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
        </div>

        <div className='bg-white p-10 rounded-lg mt-10'>
            <img src={launchImage} alt='launchImage' className='mb-4'></img>
            <h2 className='text-2xl font-bold mb-4'>4. Launch</h2>
            <h3 className='text-[#7f8794] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
        </div>
        
    </div>

</div>
</div>



</div>

        </div>

        
    )
}