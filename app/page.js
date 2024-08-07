import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import { FaStar } from "react-icons/fa6";

import './globals.css'
import FirstCard from "./components/firstCard/FirstCard";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='first md:px-32 sm:px-8  '>
        <h1 className='lg:text-9xl md:text-8xl sm:text-5xl  font-bold text-white pt-36'>GOURMET FOOD </h1>
        <h2 className='lg:text-9xl md:text-8xl sm:text-5xl  font-bold text-red-600 pt-8'>DELIVERED TO</h2>
        <h3 className='lg:text-9xl md:text-8xl sm:text-5xl  font-bold text-white pt-8'>YOUR DOORSTEP</h3>
        <p className='md:text-3xl sm:text-xl text-white font-bold pt-6'> Experience the Flavors of Our Signature Dishes, Made with Love <br /> and Fresh Ingredients Without Leaving Your Doorstep</p>

        <div className=' flex w-[320px]  md:space-x-1 pt-6 sm:mx-[-15px] flex-wrap mb-24 '>
          <button className=' bg-[rgb(236,8,8)] py-4  px-8 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto'>Order Now</button>
          <button className='border-2 border-white py-4 px-8 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto cursor-pointer'>See Menu</button>

        </div>
        
        <div className='mt-8 bg-white rounded-lg flex justify-betweem items-center md:w-[450px] sm:w-[300px] h-36 top-[300px]'>
          <div className='md:ml-6 sm:ml-1'>
            <Image src='/Group 3.svg' width={60} height={60} alt='Rating Icon' />
          </div>
          <div className='md:ml-9 sm:ml-3'>

            <p className='text-gray-700 text-xl font-bold py-2 '>Google Rating</p>
            <h1 className='text-3xl text-[rgb(264,254,0)] font-bold flex py-2'>4.8  <span className='flex md:ml-2 sm:ml-[5px] mb-2'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </span></h1>
            <p className='text-gray-700 text-xl font-bold py-2 '>See Our all services</p>

          </div>

        </div>
          <div className="h-16"></div>


      </div>

      {/* 2nd div ----------- */}


      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 px-16 gap-5'>
        <div>
          <h1 className='text-8xl font-semibold  pt-12'>WHO WE ARE & <br /><span className='text-[rgb(236,8,8)]'>WHAT WE  DO</span></h1>
          <p className='text-3xl pr-9 pt-8 leading-snug  font-semibold text-justify'>At the Red Gourmet Kitchen, we have put so much love and care into every recipe to give you the very best gourmet cooking in Abuja. 
            All our ingredients are sourced from local farmers and markets. Great produce, great food, great vibes.</p>
          <FirstCard src='/farmed.svg' title='Freshly Farmed' pera='All our ingredients are sourced from local farmers and markets. Great produce, great food, great vibes.' />
          <FirstCard src='/ease.svg' title='Ease and Comfort' pera='Enjoy our delicious dishes from the comfort of your home with our fast and reliable delivery service.' />
          <FirstCard src='/fresh.svg' title='Fresh and Flavorful' pera='We ensure that every meal arrives hot and fresh, preserving the quality and taste you love.' />
        </div>
        <div className='flex justify-center flex-wrap gap-5 pt-24'>
          <Image className='' src='/burger.png' width={395} height={400} alt='burger Image' />
          <Image className='' src='/tika.png' width={455} height={430} alt='tika Image' />
          <Image className='' src='/shawarma.png' width={419} height={389} alt='shawarma Image' />
        </div>

      </div>
    </div>
  );
}
