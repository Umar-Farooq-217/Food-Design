import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import { FaStar } from "react-icons/fa6";

import './globals.css'
export default function Home() {
  return (
  <div>
    <Navbar/>
    <div className='first md:px-32 sm:px-10 lg:h-[1200px] md:h-[1400px] sm:h-[900px] '>
    <h1 className='md:text-8xl sm:text-5xl  font-bold text-white'>GOURMET FOOD </h1>
    <h2 className='md:text-8xl sm:text-5xl  font-bold text-red-600'>DELIVERED TO</h2>
    <h3  className='md:text-8xl sm:text-5xl  font-bold text-white'>YOUR DOORSTEP</h3>
    <p className='text-3xl text-white font-bold'> Experience the Flavors of Our Signature Dishes, Made with Love <br /> and Fresh Ingredients Without Leaving Your Doorstep</p>

<div className='btns flex space-x-2 w-[310px]'>
<button className='bg-[rgb(236,8,8)] py-4 px-8 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto'>Order Now</button>
<button className='border-2 border-white py-4 px-8 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto cursor-pointer'>See Menu</button>

</div>
<div className='relative z-10 bg-white rounded-lg flex justify-betweem items-center md:w-[450px] sm:w-[300px] h-36 top-[300px]'>
  <div className='md:ml-6 sm:ml-1'>
  <Image src='/Group 3.svg' width={60} height={60} alt='Rating Icon' />
  </div>
  <div className='relative bottom-[160px] md:left-12 sm:left-4'>
    
    <p className='text-gray-700 text-xl font-bold '>Google Rating</p>
    <h1 className='text-3xl text-[rgb(264,254,0)] font-bold flex relative top-28'>4.8  <span className='flex md:ml-2 sm:ml-[5px] mb-2'>
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </span></h1>

  </div>

</div>

    </div>
  </div>
  );
}
