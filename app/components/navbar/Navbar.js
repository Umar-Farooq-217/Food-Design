import React from 'react';
import Image from 'next/image';


export default function Navbar() {
  return (
    <div>
        <div>
            <Image className='w-[106px] h-[86px] ' src='/logo.png' width={80} height={80} alt='logo' />
        </div>

      
    </div>
  )
}
