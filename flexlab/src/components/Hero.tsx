import React from 'react'
import Navbar from './Navbar'

export const Hero = () => {
  return (
    <div className='text-white bg-neutral-950 min-h-screen '>
        <Navbar/>
        <div className="flex items-center justify-center justify-items-center">
            <h1>Build your MVP in six week<br /> Within your budget</h1>
            <p>
                Struggling to hire the right team? Or finding agencies too costly? <br />
                We deliver your first product within six weeks, efficiently and affordably.
            </p>
            <div className="flex">
                <button>Click Me</button>
                <button>Contsct us</button>
            </div>
        </div>
    </div>
  )
}
