import React from 'react'
import Image from 'next/image'

export default function SecondCard(props) {
  return (
    <div className='hover:shadow-2xl rounded-2xl secondItems'>
        <Image className='flex mx-auto p-8' src={props.src} width={405} height={365} alt='pic' />
        <h1 className='text-[30px] font-bold text-center ' >{props.heading}</h1>
        <p className='text-[18px] text-center pt-6 px-5'>{props.pera} </p>
        <button className=' bg-[rgb(236,8,8)] py-3  px-7 rounded-[30px] hover:scale-105 text-white
         font-bold sm:my-4 sm:flex sm:mx-auto'>Order Now</button>

    </div>
  )
}
