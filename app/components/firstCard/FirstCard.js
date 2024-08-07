import React from 'react'
import Image from 'next/image'
import { FaChevronRight } from "react-icons/fa6";
export default function FirstCard(props) {
  return (
    <div className='bg-[rgb(191,16,16)] w-full rounded-xl  flex justify-center items-center my-9 flex-wrap '>
      <div>
        <Image className='m-5' src={props.src} width={70} height={70} alt='pic'/>
      </div>
      <div>
        <h1 className='text-3xl font-bold  text-white'>{props.title}</h1>
        <p className='text-1xl font-bold pt-2 text-white'>{props.pera}</p>
      </div>
      <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center ml-2 hover:scale-110 hover:shadow-2xl' >
      <FaChevronRight className='text-3xl text-[rgb(191,16,16)] ' />

      </div>
    </div>
  )
}
