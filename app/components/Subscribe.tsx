import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Subscribe = () => {
  return (
    <div className='relative flex flex-col py-20 justify-center items-center bg-[#f9f7fe] w-full h-full rounded-xl  lg:rounded-l-full'>
            <h2 className='text-4xl font-bold text-textSecondary w-3/4'>
                Subscribe to get information, latest news and other
                interesting offers about HeartConnect
            </h2>
            <div className=' flex flex-col items-center lg:flex-row gap-5 mt-10 '>
                <input type='text' placeholder='Your Mail' className='rounded-xl p-5 lg:w-[30rem] w-[18rem] h-20 border-2'/>
                <Button className='w-[18rem] h-20 rounded-xl bg-gradient-to-t from-[#fc7d5a] to-[#fc7d5a] text-xl font-semiboldbold'>Subscribe</Button>
            </div>
            <Image 
                src='/book/arrow.png'
                width={50}
                height={50}
                alt='arrow'
                className='absolute -top-[1rem] -right-[1rem]'
            />
    </div>
  )
}

export default Subscribe