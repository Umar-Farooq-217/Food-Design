import React from 'react';
import Image from 'next/image';
import { FaChevronRight } from "react-icons/fa6";

export default function FirstCard(props) {
  return (
    <div className='bg-[rgb(191,16,16)] w-full rounded-xl flex flex-col md:flex-row justify-center items-center mb-7 py-2 secondItems'>
      <div className='flex-shrink-0'>
        <Image className='w-20 h-28' src={props.src} width={82} height={97} alt='pic' />
      </div>
      <div className='flex-grow text-center md:text-left'>
        <h1 className='text-[40px] font-bold text-white px-5'>{props.title}</h1>
        <p className='text-[18px] pt-2 text-white px-5'>{props.pera}</p>
      </div>
      <div className='bg-white rounded-full m-5 px-2 py-2 flex justify-center items-center hover:scale-110 hover:shadow-2xl'>
        <FaChevronRight className='text-3xl text-[rgb(191,16,16)]' />
      </div>
    </div>
  );
}
