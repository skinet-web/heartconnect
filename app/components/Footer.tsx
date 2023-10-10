import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between  gap-10  mt-10 lg:mt-32'>
        <div className='flex flex-col gap-5'>
               <h1 className='font-bold text-2xl'>HeartConnect.</h1>
               <p className='font-normal text-lg w-[20rem] text-[#5E6282]'>Book your trip in minute, get full
                Control for much longer.
               </p>
        </div>
        <div className='grid grid-cols-2 gap-10 lg:gap-[12rem] lg:flex '>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl'>Company</h1>
                <div className='flex flex-col gap-2 font-normal text-[#5E6282]'>
                    <p className=' text-lg  hover:text-[#3c4069] hover:font-bold 
                    transition-all cursor-pointer'>About
                    </p>
                    <p className='text-lg hover:text-[#3c4069] hover:font-bold 
                    transition-all cursor-pointer'>Careers
                    </p>
                    <p className=' text-lg ] hover:text-[#3c4069] hover:font-bold 
                    transition-all cursor-pointer'>Mobile
                    </p>
                </div>
                
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl'>Contact</h1>
                <div className='flex flex-col gap-2 text-[#5E6282]'>
                    <p className='text-lg  hover:text-[#3c4069] hover:font-bold 
                    transition-all cursor-pointer'>Help/FAQ
                    </p>
                    <p className='text-lg  hover:text-[#3c4069] hover:font-bold 
                    transition-all cursor-pointer'>Press
                    </p>
                    <p className='text-lg hover:text-[#3c4069] hover:font-bold 
                    transition-all cursor-pointer'>Affilates
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold text-2xl'>More</h1>
                <div className='flex flex-col gap-2 font-normal text-[#5E6282]'>
                    <p className='text-lg  hover:text-[#3c4069] hover:font-bold 
                    transition-all cursor-pointer'>Airlinefees
                    </p>
                    <p className='text-lg  hover:text-[#3c4069] hover:font-bold 
                    transition-all cursor-pointer'>Airline
                    </p>
                    <p className=' text-lg hover:text-[#3c4069] hover:font-bold 
                    transition-all cursor-pointer'>Low fare tips
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer