import React from 'react'
import { LuRocket } from "react-icons/lu";
import { LuFlaskConical } from "react-icons/lu";


const About = () => {
  return (
  
    <div className='min-h-screen flex flex-col items-center justify-center justify-items-center mt-10'>
        <div className='text-center max-w-2xl'>
            <h1 className='text-2xl lg:text-5xl'>Build Fast & Validate Your Idea</h1>
            <p className=' text-base lg:text-lg mt-5 text-gray-400 text-left'>
                Startups need to grow quickly. To do that, you must invest time and money into building a 
                product that solves real customer problems. The best way to discover that is by building 
                fast and testing in the market. That’s where FlexLab Studio comes in. 
                We’ll deliver your product in six weeks, allowing you to quickly validate your idea.
            </p>
        </div>
        <div className="flex flex-col sm:flex-row mt-10 gap-4">
            <div className=' mr-10 bg-zinc-950 h-64 w-96 border border-neutral-800 rounded-2xl
            hover:bg-gradient-to-b hover:from-zinc-950 hover:via-zinc-950 hover:to-green-950
             transition-all duration-700 ease-in-out'>
                <p className='lg:text-2xl m-5 p-2 w-16 h-16 rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-800'><LuRocket /></p>
                <p className='lg:text-2xl m-5'>Build Fast</p>
                <p className='lg:text-lg m-5 text-gray-400'>We deliver an impressive MVP in just six weeks.</p>
            </div>

            <div className=' bg-zinc-950 h-64 w-96 border border-neutral-800 rounded-2xl
            hover:bg-gradient-to-b hover:from-zinc-950 hover:via-zinc-950 hover:to-green-950
             transition-all duration-700 ease-in-out'>
                <p className='lg:text-2xl m-5 p-2 w-16 h-16 rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-800'><LuFlaskConical /></p>
                <p className='lg:text-2xl m-5'>Test with the Market</p>
                <p className='lg:text-lg m-5 text-gray-400'>Validate your idea with real customers. Does it solve their problem?</p>
            </div>
        </div>
    </div>

  )
}

export default About