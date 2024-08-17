import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";

export default function ThirdCard(props) {
  return (
    <div className='bg-white rounded-2xl flex flex-col hover:scale-105 transition-all 1s ease-in secondItems sm:mt-5'>
      <p className='text-[24px] font-bold pt-10 mx-5 flex-grow'>{props.pera}</p>
      <div>
        <div className='mx-5 pt-7 flex justify-between flex-wrap pb-10'> 
            <div className='flex'>
                <Image src='/face.png' width={80} height={80} alt='pic' />
                <p className='text-[24px]  font-bold pl-5'>Jan Doe <br /><span className='text-[18px]  font-bold'>Food Critic</span></p>
            </div>
            <div className='flex items-end  py-3'>
<p className='text-[22px] '>5.0 </p>
<p><span className='text-[22px] text-yellow-400 flex gap-1 mb-2 ml-4'> <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span></p>

            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
