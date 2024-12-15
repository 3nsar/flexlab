import React from 'react'
import { LuRocket } from "react-icons/lu";
import { FaLongArrowAltUp } from "react-icons/fa";
import { PiLetterCirclePFill } from "react-icons/pi";
import { RiTriangleFill } from "react-icons/ri";



const Founders = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center justify-items-center mt-10'>
        <h1 className='text-2xl lg:text-5xl'>Founders trusts us</h1>
        <p className='text-base lg:text-lg mt-5 text-gray-400'>We deliver results through a structured process. Here's how we've made an impact:</p>
        <div className='flex'>
            <div>
                <div className='flex justify-center items-center justify-items-center mr-14 mx-auto'>
                  <h1 className='text-2xl lg:text-7xl font-semibold mt-5'>08</h1>
                  <p className="text-2xl text-green-500"><FaLongArrowAltUp/></p>
                </div>
                <p className='text-base lg:text-lg mt-2 text-gray-400 text-center mr-14 mx-auto'>MVP<br/>Completed</p>
            </div>

            <div>
                <div className='flex justify-center items-center justify-items-center mr-14 mx-auto '>
                  <h1 className='text-2xl lg:text-7xl font-semibold mt-5'>25</h1>
                  <p className='text-2xl text-green-500'><FaLongArrowAltUp/></p>
                </div>
                <p className='text-base lg:text-lg mt-2 text-gray-400 text-center mr-14 mx-auto'>Total Happy<br/>Clients</p>
            </div>

            <div>
                <div className='flex justify-center items-center justify-items-center mx-auto'>
                  <h1 className='text-2xl lg:text-7xl font-semibold mt-5'>08</h1>
                  <p className='text-2xl text-green-500'><FaLongArrowAltUp/></p>
                </div>
                <p className='text-base lg:text-lg mt-2 text-gray-400 text-center'>Startups<br/>Funded</p>
            </div>

        </div>
        <div className='bg-gray-900 mt-10 p-4 rounded-lg'>
          <div className='flex justify-center items-center mx-auto'>
              <p className='lg:text-4xl mr-2'><PiLetterCirclePFill/></p>
              <p className='lg:text-xl font-semibold'>Product Hunt</p>

              <div className='flex flex-col ml-5'>
                  <p className='text-gray-200'><RiTriangleFill/></p>
                  <p>23</p>
              </div>
          </div>
        </div>

        
    </div>
  )
}

export default Founders