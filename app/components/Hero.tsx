import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between mt-16 '>        
        <section className='flex flex-col lg:w-[40rem] lg:mt-24'>
            <h5 className='text-[#DF6951] uppercase font-medium'>
                Best Destinations around the world
            </h5>
            <div className='flex flex-col'>
                <h2 className='lg:text-[80px] text-[50px] font-bold leading-tight'>
                    Travel, enjoy and live a new and full life                
                </h2>
                {/* <Image 
                    src='/decore.svg'
                    width={350}
                    height={300}
                    alt='hero_image'
                    className='object-contain'
                />     */}
            </div>
            
            <p className='mt-10 text-textSecondary'>
                Built Wicket longer admire do barton vanity itself do in it. 
                Preferred to sportsmen it engrossed listening. 
                Park gate sell they west hard for the.
            </p>
            <Button className='w-32 mt-10'>Find out more</Button>
        </section>        
        <div>
            <Image 
             src='/travel1.svg'
             width={750}
             height={750}
             alt='hero_image'
             className='object-contain'
            />
        </div>
    </div>
  )
}

export default Hero