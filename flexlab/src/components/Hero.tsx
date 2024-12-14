import React from 'react'


export const Hero = () => {
  return (
    <div>
        <div className='min-h-screen flex items-center justify-start ml-20'>
            <div>
                <h1 className='text-2xl lg:text-7xl md:text-4xl'>Build MVP in six week<br /> Within your budget</h1>
                <p className=' text-xl lg:text-2xl mt-5 text-gray-400'>
                    Struggling to hire the right team? Or finding agencies too costly? <br />
                    We deliver your first product within six weeks, efficiently and affordably.
                </p>
                <div className="flex mt-5">
                    <button className='bg-green-500 py-2 px-3 rounded'>Click me</button>
                    <button className='text-green-500 py-2 px-3  ml-5 rounded border border-green-500'>Contact us</button>
                </div>
            </div>
        </div>
    </div>
  )
}
