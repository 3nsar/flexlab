import React from 'react'

const Timeline = () => {
  return (
    <div className='min-h-screen flex flex-col justify-items-center center items-center justify-center'>
    <h1 className='mt-20 text-center text-2xl lg:text-5xl'>How it works</h1>
    <p className='text-xl text-gray-400 mt-5 mb-20'>We work in a structured way. Here is how you will be onboard:</p>

    <div className="space-y-8 mx-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
        </div>
        
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold  flex flex-col">
                    <p className="font-caveat font-medium text-green-500">STEP 1</p>
                    <p className='text-4xl'>Discovery call</p>
                </div>
                
            </div>
            <div className="text-gray-400 mt-5">We begin by understanding your vision and goals through a detailed discovery call to align on the project's direction.</div>
        </div>
    </div>
    
    
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
       
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
        </div>
        
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold  flex flex-col">
                    <p className="font-caveat font-medium text-green-500">STEP 2</p>
                    <p className='text-4xl'>Project breakdown</p>
                </div>
                
            </div>
            <div className="text-gray-400 mt-5">Our team analyzes your requirements, breaks down the project into actionable steps, and sets milestones to ensure timely delivery.</div>
        </div>
    </div>
    
    
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
       
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
        </div>
        
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold  flex flex-col">
                    <p className="font-caveat font-medium text-green-500">STEP 3</p>
                    <p className='text-4xl'>Sit Back & Relax</p>
                </div>
                
            </div>
            <div className="text-gray-400 mt-5">We assemble a team to manage your project end-to-end. Expect weekly (or even more frequent) updates while we handle the heavy lifting.</div>
        </div>
    </div>
    
    
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
       
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-green-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
            </svg>
        </div>
      
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold flex flex-col">
                    <p className="font-caveat font-medium text-green-500">STEP 4</p>
                    <p className='text-4xl'>Preparing for the Big Step</p>
                </div>
                
            </div>
            <div className="text-gray-400 mt-5">Before launching your MVP, we conduct a final review to ensure everything is aligned with your vision and target audience. From fine-tuning features to validating functionality, every detail matters.</div>
        </div>
    </div>
    
   
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
       
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
            </svg>
        </div>
        
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold  flex flex-col">
                    <p className="font-caveat font-medium text-green-500">STEP 5</p>
                    <p className='text-4xl'>Launch your MVP</p>
                </div>
                
            </div>
            <div className="text-gray-400 mt-5">Your product is ready to launch! We ensure a smooth MVP rollout, followed by testing and optimization to meet your business goals.</div>
        </div>
    </div>

</div>
</div>
  )
}

export default Timeline