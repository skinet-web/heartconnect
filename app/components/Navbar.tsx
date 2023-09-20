'use client'

import Image from 'next/image'
import { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import {HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { Button } from './ui/button'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex justify-between items-center'>
        <div className='md:w-80'>
            <Image 
                src='/Jadoo.svg'
                width={100}
                height={100}
                alt='Logo'
            />
        </div>
        <section className='lg:flex hidden gap-16 items-center'>
            <h2 className='font-semibold'>Destinations</h2>
            <h2 className='font-semibold'>Hotels</h2>
            <h2 className='font-semibold'>Flights</h2>
            <h2 className='font-semibold'>Bookings</h2>
            <div className='flex gap-4'>
              <Button className='w-24'>Login</Button>
              <Button className='w-24'>Sign Up</Button>    
            </div>
                   
        </section>
        <div className='lg:hidden '       
        >
          <FiMenu size={20} onClick={() => setToggle((prev) => !prev)}/>
          {toggle && ( 
          <motion.div 
          initial = {{ x: 300 }}
          whileInView={{ x: [300, 0]}}
          transition= {{duration: 0.20, ease: 'easeOut'}} 
          className='fixed top-0 bottom-0 right-0 p-4  w-full h-full
          flex flex-col items-end  bg-white'>
              <HiX size={40} onClick={() => setToggle((prev) => !prev)}/>
              <ul className='list-none uppercase h-[100%] w-[100%] flex justify-start flex-col items-start'>
                {['Destinations', 'Hotels', 'Flights', 'Bookings'].map((item) =>
                <li key={item}  className='m-4  '>            
                  <a href={`#${item}`} onClick={() => setToggle((prev) => !prev)}
                  className='no-underline text-primaryColor text-3xl font-bold
                  hover:text-red-300'>{item}</a>
                </li>
                )}
             
              </ul>
              <div className='flex  gap-4 justify-evenly items-end h-full w-full'>
                <Button className='w-24'>Login</Button>
                <Button className='w-24'>Sign Up</Button>    
              </div>
         </motion.div>
        )
        }
        </div>
        
    </nav>
  )
}

export default Navbar