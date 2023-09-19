import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='w-80'>
            <Image 
                src='/Jadoo.svg'
                width={100}
                height={100}
                alt='Logo'
            />
        </div>
        <section className='flex gap-16 items-center'>
            <h2 className='font-semibold'>Destinations</h2>
            <h2 className='font-semibold'>Hotels</h2>
            <h2 className='font-semibold'>Flights</h2>
            <h2 className='font-semibold'>Bookings</h2>
            <h2 className='font-semibold'>Login</h2>
            <h2 className='font-semibold'>Sign Up</h2>
        </section>
    </div>
  )
}

export default Navbar