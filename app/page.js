import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import { FaStar } from "react-icons/fa6";

import './globals.css'
export default function Home() {
  return (
  <div>
    <Navbar/>
    <div className='first md:px-32 sm:px-10 '>
    <h1 className='md:text-9xl sm:text-5xl  font-bold text-white'>GOURMET FOOD </h1>
    <h2 className='md:text-9xl sm:text-5xl  font-bold text-red-600'>DELIVERED TO</h2>
    <h3  className='md:text-9xl sm:text-5xl  font-bold text-white'>YOUR DOORSTEP</h3>
    <p className='text-3xl text-white font-bold'> Experience the Flavors of Our Signature Dishes, Made with Love <br /> and Fresh Ingredients Without Leaving Your Doorstep</p>

<div className='btns flex space-x-4 w-96'>
<button className='bg-[rgb(236,8,8)] py-4 px-8 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto'>Order Now</button>
<button className='border-2 border-white py-4 px-8 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto'>Order Now</button>

</div>
<div className='relative z-10 bg-white rounded-lg flex justify-center items-center w-72 h-72 top-[250px]'>
  <div>
    <Image src='/Group 3.svg' width={60} height={60} />
  </div>
  <div>
    <p className='text-gray-700 text-xl font-bold'>Google Rating</p>
    <h1 className='text-3xl text-[rgb(264,254,0)] font-bold flex'>4.8 <sup><FaStar /></sup><sup><FaStar /></sup>
    <sup><FaStar /></sup><sup><FaStar /></sup><sup><FaStar /></sup><sup><FaStar /></sup></h1>
    <p className='text-gray-700 text-xl '>See all our services </p>

  </div>

</div>

    </div>
  </div>
  );
}
