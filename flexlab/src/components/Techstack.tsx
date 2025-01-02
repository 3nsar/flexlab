import React from 'react'
import { RiTriangleFill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import figma from "../assets/figma.png"
import next from "../assets/nextjs.png"
import react from "../assets/react.svg"

const Techstack = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-10'>
        <h1 className='text-2xl lg:text-5xl text-center'>Our Techstack</h1>
        <p className='text-base lg:text-lg mt-5 text-gray-400 text-center max-w-2xl'>
          Empowering innovation with a cutting-edge tech stack designed for seamless collaboration.
        </p>

        <div className='w-full max-w-xl lg:max-w-2xl xl:max-w-3xl'>
            {/* Design and Prototyping Card */}
            <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-full mx-auto mt-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-lg sm:text-xl ps-5 pb-2'>
                      Design and Prototyping:
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center p-4'>
                    <img src={figma} alt="figma" className='w-16 h-16 object-contain mb-4 sm:mb-0 sm:mr-5'/>
                    <div className='flex flex-col text-center sm:text-left'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>Figma</h1>
                        <p className='mt-2 text-gray-400'>
                          It is collaborative and integrates well with development workflows.
                        </p>
                    </div>
                </div>
            </div>

            <p className='text-gray-700 mt-5 text-4xl sm:text-5xl text-center'>
              <MdKeyboardDoubleArrowDown/>
            </p>

            {/* Frontend Development Card */}
            <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-full mx-auto mt-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-lg sm:text-xl ps-5 pb-2'>
                      Frontend Development:
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row mt-5 items-center justify-center text-center gap-4 px-4'>
                    <div className='bg-neutral-700 border border-gray-500 py-5 px-8 sm:px-16 rounded-lg w-full sm:w-auto'>
                        <img src={react} alt="figma" className='w-16 h-16 object-contain mx-auto'/>
                        <p className='mt-4 text-xl font-semibold'>React</p>
                    </div>

                    <div className='bg-neutral-700 border border-gray-500 py-5 px-8 sm:px-16 rounded-lg w-full sm:w-auto'>
                        <img src={next} alt="figma" className='w-16 h-16 object-contain mx-auto'/>
                        <p className='mt-4 text-xl font-semibold'>Next Js</p>
                    </div>
                </div>
                <p className='mx-5 py-5 text-gray-400 text-center sm:text-left'>
                  The addition of Shadcn provides a customizable and accessible component library, 
                  enabling the creation of flexible and intuitive UI designs
                </p>
                <div className='border-gray-500 border-t'>
                    <div className='flex flex-col sm:flex-row items-center justify-center p-4 gap-4'>
                        <div className='flex gap-2 mb-4 sm:mb-0'>
                            {[1, 2, 3].map((_, index) => (
                                <div key={index} className='bg-green-900 border border-green-700 p-4 rounded-full'>
                                    <img src={figma} alt="figma" className='w-7 h-7 object-contain'/>
                                </div>
                            ))}
                        </div>
                        <p className='text-gray-400 text-center sm:text-left'>
                          Experts in WordPress, Webflow, and Framer too as flexible alternatives.
                        </p>
                    </div>
                </div>
            </div>

            <p className='text-gray-700 mt-5 text-4xl sm:text-5xl text-center'>
              <MdKeyboardDoubleArrowDown/>
            </p>

            {/* Backend Development Card */}
            <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-full mx-auto mt-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-lg sm:text-xl ps-5 pb-2'>
                      Backend Development:
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row mt-5 items-center justify-center text-center gap-4 px-4'>
                    <div className='bg-neutral-700 border border-gray-500 py-5 px-8 sm:px-16 rounded-lg w-full sm:w-auto'>
                        <img src={figma} alt="figma" className='w-16 h-16 object-contain mx-auto'/>
                        <p className='mt-4 text-xl font-semibold'>React</p>
                    </div>

                    <div className='bg-neutral-700 border border-gray-500 py-5 px-8 sm:px-16 rounded-lg w-full sm:w-auto'>
                        <img src={figma} alt="figma" className='w-16 h-16 object-contain mx-auto'/>
                        <p className='mt-4 text-xl font-semibold'>Next Js</p>
                    </div>
                </div>
                <p className='mx-5 py-5 text-gray-400 text-center sm:text-left'>
                  The addition of Shadcn provides a customizable and accessible component library, 
                  enabling the creation of flexible and intuitive UI designs
                </p>
            </div>

            <p className='text-gray-700 mt-5 text-4xl sm:text-5xl text-center'>
              <MdKeyboardDoubleArrowDown/>
            </p>

            {/* Hosting and Deployment Card */}
            <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-full mx-auto mt-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-lg sm:text-xl ps-5 pb-2'>
                      Hosting and Deployment:
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row mt-5 items-center justify-center text-center gap-4 px-4'>
                    <div className='bg-neutral-700 border border-gray-500 py-5 px-8 sm:px-16 rounded-lg w-full sm:w-auto'>
                        <img src={figma} alt="figma" className='w-16 h-16 object-contain mx-auto'/>
                        <p className='mt-4 text-xl font-semibold'>React</p>
                    </div>

                    <div className='bg-neutral-700 border border-gray-500 py-5 px-8 sm:px-16 rounded-lg w-full sm:w-auto'>
                        <img src={figma} alt="figma" className='w-16 h-16 object-contain mx-auto'/>
                        <p className='mt-4 text-xl font-semibold'>Next Js</p>
                    </div>
                </div>
                <p className='mx-5 py-5 text-gray-400 text-center sm:text-left'>
                  The addition of Shadcn provides a customizable and accessible component library, 
                  enabling the creation of flexible and intuitive UI designs
                </p>
            </div>

            <p className='text-gray-700 mt-5 text-4xl sm:text-5xl text-center'>
              <MdKeyboardDoubleArrowDown/>
            </p>

            {/* Payment Card */}
            <div className='py-5 text-left flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl w-full mx-auto mt-10 mb-10'>
                <div className='flex'>
                    <p className='border-b w-full border-neutral-800 text-lg sm:text-xl ps-5 pb-2'>
                      Payment:
                    </p>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center p-4'>
                    <img src={figma} alt="figma" className='w-16 h-16 object-contain mb-4 sm:mb-0 sm:mr-5'/>
                    <div className='flex flex-col text-center sm:text-left'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>Stripe Checkout</h1>
                        <p className='mt-2 text-gray-400'>
                          FlexLab offers full Stripe integration, ensuring seamless and secure 
                          payment processing, including subscriptions and payouts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Techstack