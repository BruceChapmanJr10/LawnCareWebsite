import React from 'react'
import HeroImage from '../assets/lawn.webp'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} 
            alt="Mowed Lawn" 
            className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
                        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'> I am {" "}
            <span className='text-transparent bg bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Bruce Chapman </span>
            Owner of Perfection Lawns LLC
        </h1>
        <p className='mt-4 text-lg text-gray-300'>Since I was a kid, I’ve had a passion for mowing lawns, starting out by knocking on 
            doors in the neighborhood for $10 a yard. I love the satisfaction of seeing a freshly
             mowed lawn and breathing in the fresh scent of cut grass. At Perfection Lawns LLC, 
             we treat your lawn like it’s our own, taking pride in creating crisp, clean stripes 
             and keeping your yard free of debris.We are fully licensed and insured, ensuring 
             peace of mind with every service. Once you choose us as your lawn care provider, 
             you’ll never want to go anywhere else. Call today to schedule your free estimate. 
             For most lawn mowing services, we can provide an estimate over the phone.
        </p>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-500 to-orange-600 text-white 
                            hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Call Today</button>
            <button className='bg-gradient-to-r from-yellow-500 to-green-500 text-white 
                            hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Request Quote</button>
        </div>
        
    </div>
  )
}

export default Hero