import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";


export default function Navbar() {
  const links = [
    {name:'Home',link:'/'},
    {name:'Our Vision',link:'/'},
    {name:'Menu',link:'/'},
    {name:'Specials',link:'/'},
    {name:'Contact Us',link:'/'}
  ]

  return (
    <div className='lg:flex items-center justify-between md:block xl:px-48 lg:px-28 lg:bg-red-400 md:bg-green-400 w-[100%]'>
      <div>
      <IoMenu className='lg:invisible md:visible text-4xl absolute top-9 right-5'/>
      </div>
        <div>
            <Image className='w-[106px] h-[86px] sm:pt-3 ' src='/logo.png' width={80} height={80} alt='logo' />
        </div>
        <div>
          <ul className='lg:flex items-center justify-center md:block'>
            {
              links.map((link,i)=>{
                return(

                  <li className='text-xl font-semibold px-3' key={i}><Link href={link.link}>{link.name}</Link></li>
                )
              })
            }
          </ul>

        </div>
        <div>
          <button className='bg-[rgb(236,8,8)] py-3 px-7 rounded-3xl hover:scale-105 text-white font-bold'><Link href='/'>Order Now</Link></button>
        </div>

      
    </div>
  )
}
