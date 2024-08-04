import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6";

export default function FirstCard() {
  return (
    <div className=''>
      <div>
        <Image src='/' width={0} height={0} alt='pic'/>
      </div>
      <div>
        <h1>h1</h1>
        <p>p tag</p>
      </div>
      <div>
      <FaAngleRight />

      </div>
    </div>
  )
}
