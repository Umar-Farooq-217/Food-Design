import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import { FaStar } from "react-icons/fa6";

import './globals.css'
import FirstCard from "./components/firstCard/FirstCard";
import SecondCard from "./components/secondCard/SecondCard";
import ThirdCard from "./components/thirdCard/ThirdCard";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Footer from "./components/footer/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='first md:px-32 sm:px-1 shadow-lg box '>
        
        <h1 className='md:text-[85px] sm:text-[60px]  font-bold text-white pt-28 boxItems shadowed-text firstText'>GOURMET FOOD
          <span className='   font-bold text-[rgb(236,8,8)]  block boxItems'>DELIVERED TO</span>YOUR DOORSTEP </h1>

        <p className='text-[24px] text-white font-bold pt-6 boxItems firstText'> Experience the Flavors of Our Signature Dishes, Made with Love <br /> and Fresh Ingredients Without Leaving Your Doorstep</p>

        <div className=' flex w-[320px]  md:space-x-1 pt-6 sm:mx-[-15px] flex-wrap mb-24 secondItems '>
          <button className=' bg-[rgb(236,8,8)] py-3  px-7 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto'>Order Now</button>
          <button className='border-2 border-white py-3 px-7 rounded-[30px] hover:scale-105 text-white font-bold sm:my-4 sm:flex sm:mx-auto cursor-pointer'>See Menu</button>

        </div>

        <div className='mt-8 bg-white rounded-lg flex justify-betweem items-center md:w-[410px] sm:w-[300px] h-36 top-[300px] secondItems'>
          <div className='md:ml-6 sm:ml-1'>
            <Image src='/Group 3.svg' width={57} height={52} alt='Rating Icon' />
          </div>
          <div className='md:ml-9 sm:ml-3'>

            <h2 className='text-gray-700 text-[20px] font-bold py-1 '>Google Rating</h2>
            <h2 className='text-[26px] text-[rgb(264,254,0)] font-bold flex py-1'>4.8  <strong className='flex md:ml-2 sm:ml-[5px] mb-2'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </strong></h2>
            <h2 className='text-gray-700 text-[18px] font-bold py-1 '>See Our all services</h2>

          </div>

        </div>
        <div className="h-16"></div>


      </div>

      {/* 2nd div ----------- */}


      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 md:px-16 sm:px-2'>
        <div>
          <h1 className='text-[65px] font-semibold  pt-12 secondItems'>WHO WE ARE & <br /><span className='text-[rgb(236,8,8)]'>WHAT WE  DO</span></h1>
          <p className='text-[24px] pr-9 pt-8 leading-snug  font-semibold text-justify mb-5 secondItems'>At the Red Gourmet Kitchen, we have put so much love and care into every recipe to give you the very best gourmet cooking in Abuja.
            All our ingredients are sourced from local farmers and markets. Great produce, great food, great vibes.</p>
          <FirstCard src='/farmed.svg' title='Freshly Farmed' pera='All our ingredients are sourced from local farmers and markets. Great produce, great food, great vibes.' />
          <FirstCard src='/ease.svg' title='Ease and Comfort' pera='Enjoy our delicious dishes from the comfort of your home with our fast and reliable delivery service.' />
          <FirstCard src='/fresh.svg' title='Fresh and Flavorful' pera='We ensure that every meal arrives hot and fresh, preserving the quality and taste you love.' />
        </div>
        <div className='pt-24 secondItems'>
          {/* Container for the first two images */}
          <div className='flex flex-wrap justify-center md:justify-between md:px-3 sm:px-0 pt-5 '>
            <Image className='p-3 w-[500px] h-[370px] basis-[220px] lg:w-[50%] md:flex-grow' src='/burger.png' width={395} height={400} alt='burger Image' />
            <Image className='p-3 w-[500px] h-[370px] basis-[220px] lg:w-[50%] md:flex-grow' src='/tika.png' width={455} height={430} alt='tika Image' />
          </div>

          {/* Third image centered below the first two images */}
          <div className='flex justify-center px-3 secondItems'>
            <Image className='p-3 lg:w-[60%] md:w-[50%] sm:flex-grow lg:mx-20 md:mx-10 h-[370px] ' src='/shawarma.png' width={419} height={389} alt='shawarma Image' />
          </div>
        </div>


      </div>

      {/* ------------------------------3rd div ------------------ */}
      <div className='pt-10'>

        <h1 className='text-[65px] font-bold text-center secondItems '>Explore Our Delicious <span className='text-[rgb(236,8,8)]'>Menu Sections</span></h1>
        <p className='text-[24px] text-center lg:px-96 pt-3 secondItems'>At our restaurant, we offer a variety of services to cater to your dining preferences. Whether you prefer to dine-in,
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
        <h1 className='text-[65px] font-bold text-center pt-28 secondItems'>What <span className='text-[rgb(236,8,8)]'>Customers Say</span></h1>
        <p className='text-[24px] font-semibold pt-7 text-center secondItems'>Read testimonials from our satisfied Customers</p>

        <div className='bg-black px-20'>
          <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-20 md:gap-10 pt-20 mt-10'>
            <ThirdCard pera='The food here is absolutely amazing!I keep coming back for more. Highly recommended' />
            <ThirdCard pera='I loved everything I tasted and all I can say is that you have to go taste everything 
          for yourself. The Red Gourmet Kitchen really took the time to curate an experience' />
          </div>
          <div className='flex justify-center items-center gap-7 pt-12 pb-16'>
            <div className='bg-[rgb(191,16,16)] w-10 h-10 rounded-full  flex justify-center items-center hover:scale-110'>
              <FaChevronLeft className='text-2xl text-black  rounded-full  ' />

            </div>
            <div className='bg-[rgb(191,16,16)] w-10 h-10 rounded-full  flex justify-center items-center hover:scale-110'>
              <FaChevronRight className='text-2xl text-black  rounded-full  ' />
            </div>
          </div>
        </div>

      </div>

      {/* ----------------------5th------------------- */}

      <div className='fifth grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-8'>
        <div className='px-10'>
          <h1 className='text-[65px] font-bold text-white pt-24 lg:mr-36 md:mr20 sm:mr-10 secondItems secondText'>Discover Our Tasty <br /> Creation</h1>
          <button className=' bg-[rgb(236,8,8)] py-2  px-8 rounded-[30px] hover:scale-105 text-white
         font-bold sm:my-4  secondItems'>Order Now</button>

          <div>
            <div className='flex items-center pt-3 secondItems'>
              <Image src='/Location.png' width={40} height={42} alt='pic' />
              <p className='text-white text-[24px] secondText font-bold pl-4'>Location</p>
            </div>
            <p className='text-[18px] font-semibold text-white secondText lg:mr-36 md:mr20 sm:mr-10 pt-3'>990 Sterling Bank Boulevard
              Opp Tuwo Place, Behind Fraser Suite, Central Area.
              Abuja</p>
            <div className='flex items-center pt-5 '>
              <Image src='/Ringer.png' width={40} height={42} alt='pic' />
              <p className='text-white text-[24px] font-bold pl-4 secondText'>986345680</p>
            </div>

          </div></div>
        <div className='flex justify-center items-end'>
          <Image className='secondItems' src='/glass.png' width={600} height={456} alt='pic' />

        </div>

      </div>


      {/* ----------------------------6th----------------------- */}

      <div className='bg-black py-10'>
        <h1 className='text-[60px] font-bold text-white text-center lg:px-52 pt-5'>
          Frequently Asked <span className='text-[rgb(236,8,8)] secondItems'>Questions & Answers</span>
        </h1>
        <div className="border-[2px] text-white hover:text-black hover:bg-white transition-all 2s ease-in border-white lg:mx-[25%] md:mx-[15%] sm:mx-10 rounded-3xl mt-5 ">
          <div className="p-8 secondItems">
            <div className="flex justify-between items-center pt-4 ">
              <h1 className='text-[22px]  font-semibold '>How do I place an order for delivery?</h1>
              <h1 className='text-[rgb(236,8,8)] text-5xl font-bold pr-10'>-</h1>
            </div>
            <h1 className='text-[18px]   '>Placing an order is easy! Visit our website, browse
              our menu, add items to your cart, and proceed to checkout. You can also call us directly to place your order.</h1>

          </div>
        </div>
        <div className="border-[2px] secondItems text-white border-white hover:text-black hover:bg-white transition-all 2s ease-in lg:mx-[25%] md:mx-[15%] sm:mx-10 rounded-3xl mt-5 ">
          <div className="p-8 ">
            <div className="flex justify-between items-center ">
              <h1 className='text-[22px]  font-semibold '>How do I place an order for delivery?</h1>
              <h1 className='text-[rgb(236,8,8)] text-5xl font-bold pr-10'>+</h1>
            </div>

          </div>
        </div>
        <div className="border-[2px] secondItems border-white hover:text-black hover:bg-white transition-all 2s ease-in text-white lg:mx-[25%] md:mx-[15%] sm:mx-10 rounded-3xl mt-5 ">
          <div className="p-8 ">
            <div className="flex justify-between items-center ">
              <h1 className='text-[22px]  font-semibold '>How do I place an order for delivery?</h1>
              <h1 className='text-[rgb(236,8,8)] text-5xl font-bold pr-10'>+</h1>
            </div>

          </div>
        </div>

      </div>


      {/* ---------------------------7nth=============== */}
      <div className="">

        <div className="bg-[rgb(236,8,8)] lg:m-24 md:m-12 sm:m-4 lg:p-16 md:p-10 sm:p-5 secondItems rounded-[50px] relative overflow-hidden">
          <h1 className="text-[55px] font-bold py-8 text-white text-center z-10 secondItems">Join our mailing list for updates</h1>
          <input type="email" className='py-4 px-12 text-center rounded-full secondItems border-none z-20 relative lg:w-[700px] sm:w-[90%] md:w-[70]  flex mx-auto text-xl font-semibold' placeholder='Enter Your Email' />
          <button className=' bg-white py-3  px-9 rounded-[30px] hover:scale-105 text-black relative z-10
         font-bold flex mx-auto my-10  secondItems'>Subscribe Now</button>
          <Image src='/foodbag.png' className='absolute bottom-0 secondItems right-1 z-0  w-[150px] md:w-[225px] h-auto' width={225} height={337} alt='pic' />
        </div>

      </div>

      <Footer />



    </div>
  );
}
