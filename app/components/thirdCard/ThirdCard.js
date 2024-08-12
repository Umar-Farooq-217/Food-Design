import React from 'react'
import Image from 'next/image'
export default function ThirdCard(props) {
  return (
    <div clasName='bg-white rounded-2xl '>
      <p>{props.pera}</p>
      <div>
        <div> 
            <div>
                <Image src='/face.png' width={80} height={80} alt='pic' />
                <p clasName='text-[24px]  font-bold'>Jan Doe <br /><span>Food Critic</span></p>
            </div>
            <div>


            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
