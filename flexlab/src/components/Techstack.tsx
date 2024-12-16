import React from 'react'
import { RiTriangleFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import figma from "../assets/figma.png"


const Techstack = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center justify-items-center mt-10'>
        <h1 className='text-2xl lg:text-5xl'>Our Techstack</h1>
        <p className='text-base lg:text-lg mt-5 text-gray-400'>Empowering innovation with a cutting-edge tech stack designed for seamless collaboration.</p>

        <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-2/5 mx-auto mt-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-xl ps-5 pb-2 '>Design and Prototyping: </p>
                </div>
                <div className='flex items-center justify-center'>
                <img src={figma} alt="figma" className='mx-5 w-16 h-16 object-contain'/>
                    <div className='flex flex-col mt-5'>
                        <h1 className='text-3xl font-bold'>Figma</h1>
                        <p className='mt-2 mx-auto mr-5 text-gray-400'>It is collaborative and integrates well with <br /> development workflows.</p>
                    </div>
                </div>
        </div>
        <p className='text-gray-700 mt-5 text-5xl'><MdKeyboardDoubleArrowDown/></p>

        <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-2/5 mx-auto mt-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-xl ps-5 pb-2 '>Frontend Development: </p>
                </div>
                <div className='flex mt-5 items-center justify-center text-center'>
                  <div className='bg-neutral-700 border border-gray-500 py-5 px-16 rounded-lg mr-5'>
                      <img src={figma} alt="figma" className='w-16 h-16 object-contain'/>
                      <p className='mt-4 text-xl font-semibold'>React</p>
                  </div>

                  <div className='bg-neutral-700 border border-gray-500 py-5 px-16 rounded-lg'>
                      <img src={figma} alt="figma" className='w-16 h-16 object-contain'/>
                      <p className='mt-4 text-xl font-semibold'>Next Js</p>
                  </div>
                </div>
                <p className='mx-5 py-5 text-gray-400'>The addition of Shadcn provides a customizable and accessible component library, enabling the creation of flexible and intuitive UI designs</p>
                <div className='border-gray-500 border-t'>
                    <div className='flex items-center justify-center h-28'>
                      <div className='bg-green-900 border border-green-700 p-4  rounded-full'>
                        <img src={figma} alt="figma" className='w-7 h-7 object-contain'/>
                      </div>
                      <div className='bg-green-900 border border-green-700 p-4  rounded-full'>
                        <img src={figma} alt="figma" className='w-7 h-7 object-contain'/>
                      </div>
                      <div className='bg-green-900 border border-green-700 p-4  rounded-full'>
                        <img src={figma} alt="figma" className='w-7 h-7 object-contain'/>
                      </div>
                      <p className='mx-2 text-gray-400'>Experts in WordPress, Webflow, and <br /> Framer too as flexible alternatives.</p>
                    </div>
                </div>
        </div>
        <p className='text-gray-700 mt-5 text-5xl'><MdKeyboardDoubleArrowDown/></p>

        <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-2/5 mx-auto mt-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-xl ps-5 pb-2 '>Backend Development: </p>
                </div>
                <div className='flex mt-5 items-center justify-center text-center'>
                  <div className='bg-neutral-700 border border-gray-500 py-5 px-16 rounded-lg mr-5'>
                      <img src={figma} alt="figma" className='w-16 h-16 object-contain'/>
                      <p className='mt-4 text-xl font-semibold'>React</p>
                  </div>

                  <div className='bg-neutral-700 border border-gray-500 py-5 px-16 rounded-lg'>
                      <img src={figma} alt="figma" className='w-16 h-16 object-contain'/>
                      <p className='mt-4 text-xl font-semibold'>Next Js</p>
                  </div>
                </div>
                <p className='mx-5 py-5 text-gray-400'>The addition of Shadcn provides a customizable and accessible component library, enabling the creation of flexible and intuitive UI designs</p>
                
        </div>
        <p className='text-gray-700 mt-5 text-5xl'><MdKeyboardDoubleArrowDown/></p>

        <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-2/5 mx-auto mt-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-xl ps-5 pb-2 '>Hosting and Deployment: </p>
                </div>
                <div className='flex mt-5 items-center justify-center text-center'>
                  <div className='bg-neutral-700 border border-gray-500 py-5 px-16 rounded-lg mr-5'>
                      <img src={figma} alt="figma" className='w-16 h-16 object-contain'/>
                      <p className='mt-4 text-xl font-semibold'>React</p>
                  </div>

                <div className='bg-neutral-700 border border-gray-500 py-5 px-16 rounded-lg'>
                      <img src={figma} alt="figma" className='w-16 h-16 object-contain'/>
                      <p className='mt-4 text-xl font-semibold'>Next Js</p>
                  </div>
                </div>
                <p className='mx-5 py-5 text-gray-400'>The addition of Shadcn provides a customizable and accessible component library, enabling the creation of flexible and intuitive UI designs</p>
          </div>
        <p className='text-gray-700 mt-5 text-5xl'><MdKeyboardDoubleArrowDown/></p>
        <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-2/5 mx-auto mt-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-xl ps-5 pb-2 '>Payment:</p>
                </div>
                <div className='flex items-center justify-center'>
                <img src={figma} alt="figma" className='mx-5 w-16 h-16 object-contain'/>
                    <div className='flex flex-col mt-5'>
                        <h1 className='text-2xl font-bold'>Stripe Checkout</h1>
                        <p className='mt-2 mx-auto mr-5 text-gray-400'>FlexLab offers full Stripe integration, ensuring seamless and secure payment processing, including subscriptions and payouts.</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Techstack