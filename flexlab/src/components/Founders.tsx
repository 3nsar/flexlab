import React from 'react'
import { LuRocket } from "react-icons/lu";
import { FaLongArrowAltUp } from "react-icons/fa";

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
        <div className='bg-gray-800 mt-10'>
          <div className='flex'>
              <p>Fouun</p>
          </div>
        </div>

        
    </div>
  )
}

export default Founders