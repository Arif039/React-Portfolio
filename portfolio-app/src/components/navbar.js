import React, {useState} from 'react';

function Navbar () {
   const [isOpen, setIsopen] = useState(false); 

   const toggleMenu = () => {
    setIsopen(!isOpen);
   }

   return (
    <div className=' w-5/6 m-auto flex flex-row '>
        {/* logo and Name */}

        <div className='w-full flex flex-row justify-end'>
        <div className='font-bold text-2xl'>
            <ul className='flex flex-row py-2'>
                <button className='px-4 py-2 text-white  bg-violet-500 rounded-full'>A</button>
                <li className='px-4 py-2'>Arif</li>
            </ul>
        </div>

        <div className='hidden md:block w-full place-items-end  text-xl'>
                <ul className=' flex flex-row py-2'>
                    <li><a href='#' className='block px-4 py-2 hover:rounded-lg text-gray-800 hover:bg-violet-500 hover:text-white'>Home</a></li>
                    <li><a href='#' className='block px-4 py-2 hover:rounded-lg text-gray-800 hover:bg-violet-500 hover:text-white'>About</a></li>
                    <li><a href='#' className='block px-4 py-2 hover:rounded-lg text-gray-800 hover:bg-violet-500 hover:text-white'>Process</a></li>
                    <li><a href='#' className='block px-4 py-2 hover:rounded-lg text-gray-800 hover:bg-violet-500 hover:text-white'>Projects</a></li>
                    <li><a href='#' className='block px-4 py-2 hover:rounded-lg text-gray-800 hover:bg-violet-500 hover:text-white'>Services</a></li>
                    <li><a href='#' className='block px-4 py-2 hover:rounded-lg text-gray-800 hover:bg-violet-500 hover:text-white'>Contact</a></li>
                </ul>
                
            </div>

        </div>
        
        {/* menu for mobile*/}
        <div className='ml-40 py-3 relative md:hidden'>

            {/* Hamburger Menu */}
            <button onClick={toggleMenu} className='w-8 h-8 flex flex-col justify-around mr-40  cursor-pointer'>
                <span className={`bg-gray-800 h-1 w-full rounded-lg transation-all duration-300 ${isOpen ? 'rotte-45 translate-y-3' : ''}`} ></span>
                <span className= {`bg-gray-800 h-1 w-full rounded-lg transation-all duration-300 ${isOpen ? 'opacity-0' : '' }`}></span>
                <span className={`bg-gray-800 h-1 w-full rounded-lg transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
            </button>

            {/* Menu Items */}
            <div className={`absolute bg-gray-200 top-full ml-0 w-full mr-2  overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <ul className=' flex flex-col md:flex-row  py-2'>
                    <li><a href='#' className='block px-4 py-2 text-gray-800 hover:bg-violet-500 hover:text-white'>Home</a></li>
                    <li><a href='#' className='block px-4 py-2 text-gray-800 hover:bg-violet-500 hover:text-white'>About</a></li>
                    <li><a href='#' className='block px-4 py-2 text-gray-800 hover:bg-violet-500 hover:text-white'>Process</a></li>
                    <li><a href='#' className='block px-4 py-2 text-gray-800 hover:bg-violet-500 hover:text-white'>Projects</a></li>
                    <li><a href='#' className='block px-4 py-2 text-gray-800 hover:bg-violet-500 hover:text-white'>Services</a></li>
                    <li><a href='#' className='block px-4 py-2 text-gray-800 hover:bg-violet-500 hover:text-white'>Contact</a></li>
                </ul>
                
            </div>

        </div>

    </div>
   )
}

export default Navbar;