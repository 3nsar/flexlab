import React from 'react'
import { RiTriangleFill } from "react-icons/ri";


const Techstack = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center justify-items-center mt-10'>
        <h1 className='text-2xl lg:text-5xl'>Our Techstack</h1>
        <p className='text-base lg:text-lg mt-5 text-gray-400 '>Empowering innovation with a cutting-edge tech stack designed for speed, scalability, quality and seamless collaboration.</p>

        <div className='p-5 text-left flex flex-col border border-gray-700 rounded-xl'>
                <div className='flex p-5'>
                    <p>Design and Prototyping: </p>
                </div>
                <div className='flex'>
                    <p className='text-3xl ml-5'><RiTriangleFill/></p>
                    <div className='flex flex-col'>
                        <p className='text-xl'>Figma</p>
                        <p className='mt-2'>It is collaborative and integrates well with development workflows.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Techstack