import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import './globals.css'
export default function Home() {
  return (
  <div>
    <Navbar/>
    <div className='first'>
    
      {/* <div className='bg-gray-900 w-[100%] h-[90vh] opacity-60'>
      </div> */}


        <h1 className='text-9xl  font-bold text-white'>GOURMET FOOD </h1>


    </div>
  </div>
  );
}
