import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import { FaStar } from "react-icons/fa6";

import './globals.css'
import FirstCard from "./components/firstCard/FirstCard";
import SecondCard from "./components/secondCard/SecondCard";
import ThirdCard from "./components/thirdCard/ThirdCard";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='first md:px-32 sm:px-1  '>
        <h1 className='md:text-[85px] sm:text-[60px]  font-bold text-white pt-28'>GOURMET FOOD 
          <span className='   font-bold text-[rgb(236,8,8)]  block'>DELIVERED TO</span>YOUR DOORSTEP </h1>
        
        <p className='text-[24px] text-white font-bold pt-6'> Experience the Flavors of Our Signature Dishes, Made with Love <br /> and Fresh Ingredients Without Leaving Your Doorstep</p>

        <div className=' flex w-[320px]  md:space-x-1 pt-6 sm:mx-[-15px] flex-wrap mb-24 '>
          <button className=' bg-[rgb(236,8,8)] py-3  px-7 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto'>Order Now</button>
          <button className='border-2 border-white py-3 px-7 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto cursor-pointer'>See Menu</button>

        </div>
        
        <div className='mt-8 bg-white rounded-lg flex justify-betweem items-center md:w-[410px] sm:w-[300px] h-36 top-[300px]'>
          <div className='md:ml-6 sm:ml-1'>
            <Image src='/Group 3.svg' width={57} height={52} alt='Rating Icon' />
          </div>
          <div className='md:ml-9 sm:ml-3'>

            <p className='text-gray-700 text-[20px] font-bold py-1 '>Google Rating</p>
            <h1 className='text-[26px] text-[rgb(264,254,0)] font-bold flex py-1'>4.8  <span className='flex md:ml-2 sm:ml-[5px] mb-2'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </span></h1>
            <p className='text-gray-700 text-[18px] font-bold py-1 '>See Our all services</p>

          </div>

        </div>
          <div className="h-16"></div>


      </div>

      {/* 2nd div ----------- */}


      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 md:px-16 sm:px-2'>
        <div>
          <h1 className='text-[65px] font-semibold  pt-12'>WHO WE ARE & <br /><span className='text-[rgb(236,8,8)]'>WHAT WE  DO</span></h1>
          <p className='text-[24px] pr-9 pt-8 leading-snug  font-semibold text-justify mb-5'>At the Red Gourmet Kitchen, we have put so much love and care into every recipe to give you the very best gourmet cooking in Abuja. 
            All our ingredients are sourced from local farmers and markets. Great produce, great food, great vibes.</p>
          <FirstCard src='/farmed.svg' title='Freshly Farmed' pera='All our ingredients are sourced from local farmers and markets. Great produce, great food, great vibes.' />
          <FirstCard src='/ease.svg' title='Ease and Comfort' pera='Enjoy our delicious dishes from the comfort of your home with our fast and reliable delivery service.' />
          <FirstCard src='/fresh.svg' title='Fresh and Flavorful' pera='We ensure that every meal arrives hot and fresh, preserving the quality and taste you love.' />
        </div>
        <div className='pt-24'>
  {/* Container for the first two images */}
  <div className='flex flex-wrap justify-center md:justify-between md:px-3 sm:px-0 pt-5 '>
    <Image className='p-3 w-[500px] h-[370px] basis-[220px] lg:w-[50%] md:flex-grow' src='/burger.png' width={395} height={400} alt='burger Image' />
    <Image className='p-3 w-[500px] h-[370px] basis-[220px] lg:w-[50%] md:flex-grow' src='/tika.png' width={455} height={430} alt='tika Image' />
  </div>

  {/* Third image centered below the first two images */}
  <div className='flex justify-center px-3'>
    <Image className='p-3 lg:w-[60%] md:w-[50%] sm:flex-grow lg:mx-20 md:mx-10 h-[370px] ' src='/shawarma.png' width={419} height={389} alt='shawarma Image' />
  </div>
</div>


      </div>

      {/* ------------------------------3rd div ------------------ */}
      <div className='pt-10'>

        <h1 className='text-[65px] font-bold text-center  '>Explore Our Delicious <span className='text-[rgb(236,8,8)]'>Menu Sections</span></h1>
      <p className='text-[24px] text-center lg:px-96 pt-3'>At our restaurant, we offer a variety of services to cater to your dining preferences. Whether you prefer to dine-in,
         takeout, or have your food delivered, we have you covered.</p>
         <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-5 md:px-16 sm:px-4 mt-5  '>
          <SecondCard src='/card2.png' heading='Vegetables Steaks'
           pera='Our vegetable steak is a hearty blend of grilled veggies, seasoned to perfection and served with a savory sauce.' />
          <SecondCard src='/card1.png' heading='Fried Potatoes'
           pera='Our Crispy and golden, our fried potatoes are a perfect blend of crunch and flavor.' />
          <SecondCard src='/card3.png' heading='Vegetables Steaks'
           pera='Our Juicy and savory, our hamburger features a perfectly grilled patty topped with fresh ingredients.' />



         </div>

      </div>


      {/* ---------------------4th------------------ */}
      <div>
        <h1 className='text-[65px] font-bold text-center pt-28'>What <span className='text-[rgb(236,8,8)]'>Customers Say</span></h1>
        <p className='text-[24px] font-semibold pt-7 text-center'>Read testimonials from our satisfied Customers</p>
        <div className='bg-black'>
          <ThirdCard/>

        </div>
      </div>





    </div>
  );
}
