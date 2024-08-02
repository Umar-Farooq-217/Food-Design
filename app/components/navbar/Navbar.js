'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { MdClose } from "react-icons/md";


export default function Navbar() {
  const links = [
    {name:'Home',link:'/'},
    {name:'Our Vision',link:'/'},
    {name:'Menu',link:'/'},
    {name:'Specials',link:'/'},
    {name:'Contact Us',link:'/'}
  ]

  const [open,setOpen]= useState(false)
  return (
    <div className='lg:flex items-center justify-between md:block xl:px-48 lg:px-28 reletive z-10 '>
      <div onClick={()=>setOpen(!open)} className='lg:invisible md:visible text-4xl absolute top-9 right-5'>
        {open?
      <MdClose className=' text-4xl '/>:
      <IoMenu className=' text-4xl '/>
}
      </div>
        <div>
            <Image className='w-[106px] h-[86px] sm:pt-3 ' src='/logo.png' width={80} height={80} alt='logo' />
        </div>
        <div>
          <ul className={`z-20 lg:flex items-center justify-center md:block md:pt-4 sm:pt-4 lg:pt-0 absolute lg:static lg:z-auto  transition-all duration-500 ease-in ${open? 'top-20 md:left-[45%] sm:left-24':'top-[-450px] md:left-[45%] sm:left-24'} `}>
            {
              links.map((link,i)=>{
                return(

                  <li className='text-xl font-semibold px-3 md:py-4 sm:py-4 lg:py-0 md:text-white sm:text-white lg:text-black md:text-center sm:text-center sm:text-whitebg-slate-800 sm:w-56 lg:w-auto md:w-auto shadow-3xl' key={i}><Link href={link.link}>{link.name}</Link></li>
                )
              })
            }
          </ul>

        </div>
        <div className={`z-20 shadow-3xl absolute lg:static lg:z-auto transition-all duration-500 ease-in ${open ? 'top-96 md:left-[45%] sm:left-32' : 'top-[-550px] md:left-[45%] sm:left-32'} `}>
          <button className='bg-[rgb(236,8,8)] py-3 px-7 rounded-3xl hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto'><Link href='/'>Order Now</Link></button>
        </div>

      
    </div>
  )
}
