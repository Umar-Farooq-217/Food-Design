import React from 'react'
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
export default function GoogleComponents() {
  return (
    <div>
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
  )
}
