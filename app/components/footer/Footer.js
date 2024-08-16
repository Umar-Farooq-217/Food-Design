import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
        <div className="bg-black text-white">
    <div className='bg-black text-white grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 p-5 secondItems'>
        <div className="pt-5">
            <Image className='bg-white rounded-full p-1 ml-5 w-[140px] h-[130px]' src='/logo.png' width={160} height={160} alt='logo' />
            <h1 className="text-[30px] font-bold pt-5">RedGourmetKitchen</h1>
        </div>
        <div className="text-[22px] pt-10 secondItems ">
            <h1 className="text-[30px] font-bold">Company</h1>
            <p className="py-2">About Us</p>
            <p className="py-2">Contact Us</p>
            <p className="py-2">FAQs</p>
            <p className="py-2">Terms of use</p>
            <p className="py-2">Privacy Policy</p>

        </div>
        <div className="pt-10 secondItems">
       <h1 className="text-[30px] font-bold">Adress</h1>
        <div>
            <div className='flex items-center pt-3 '>
              <Image src='/Location.png' width={40} height={42} alt='pic' />
              <p className=' text-[24px] font-bold pl-4'>Location</p>
            </div>
            <p className='text-[18px] font-semibold  lg:mr-36 md:mr20 sm:mr-10 pt-3'>990 Sterling Bank Boulevard
              Opp Tuwo Place, Behind Fraser Suite, Central Area.
              Abuja</p>
            <div className='flex items-center pt-5 '>
              <Image src='/Ringer.png' width={40} height={42} alt='pic' />
              <p className=' text-[24px] font-bold pl-4'>986345680</p>
            </div>

          </div>
        </div>
        <div className="pt-10">
        <h1 className="text-[30px]  font-bold secondItems     ">Follow Us</h1>

            <div className="flex gap-2 secondItems">
                <Image className='hover:scale-105' src="/Facebook.svg" width={50} height={60} alt="facebook" />
                <Image className='hover:scale-105' src="/TwitterX.svg" width={50} height={60} alt="Twittet" />
                <Image className='hover:scale-105' src="/Instagram.svg" width={50} height={60} alt="Instagram" />
            </div>
        </div>
        </div>
        <p className="text-[24px ] font-bold pt-20 pb-10 text-center ">©2024 by Red Dish Chronicles Ltd</p>
      
    </div>
  )
}
