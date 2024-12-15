import React from 'react'

const Weeks = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center justify-items-center mt-10'>
        <h1 className='text-2xl lg:text-5xl'>Why Six Weeks?</h1>
        <div className=' bg-zinc-950 mt-10 p-6 rounded-lg lg:w-1/2 border border-neutral-800'>
            <h1 className='text-2xl font-semibold'>Six weeks isn't new—it's effective. 🌼</h1>
            <p className='text-lg mt-5 text-gray-400'>We won't claim six weeks is groundbreaking. The idea has been tried and tested by companies like Basecamp, and it works for a reason.</p>
        </div>

        <div className=' bg-zinc-950 mt-10 p-6 rounded-lg lg:w-1/2 border border-neutral-800'>
            <h1 className='text-2xl font-semibold'>Why Six Weeks Works for Us. 😍</h1>
            <p className='text-lg mt-5 text-gray-400'>Through experience, we've found that six weeks is the sweet spot. It's long enough to deliver a meaningful MVP, but short enough to avoid endless revisions and delays. 
                                                        It strikes the perfect balance between progress and momentum.
            </p>
        </div>

        <div className=' bg-zinc-950 mt-10 p-6 rounded-lg lg:w-1/2 border border-neutral-800'>
            <h1 className='text-2xl font-semibold'>How We Deliver in Six Weeks 🚀</h1>
            <p className='text-lg mt-5 text-gray-400'>Our process is simple: We start with a call, prioritize the essential features, and focus on what we can build within six weeks. 
                                                        By the end, you'll have a working MVP ready for market testing. If you're happy with the results 
                                                       (and you will be), we'll continue improving through additional six-week cycles.
            </p>
        </div>
    </div>
  )
}

export default Weeks