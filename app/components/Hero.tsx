import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between mt-24'>        
        <section className='flex flex-col md:w-[40rem]'>
            <h5 className='text-[#DF6951] uppercase font-medium'>
                Best Destinations around the world
            </h5>
            <h2 className='text-[80px] font-bold leading-tight relative z-20'>
                Travel, enjoy and live a new and full life                
            </h2>
                <Image 
                    src='/decore.svg'
                    width={350}
                    height={300}
                    alt='hero_image'
                    className='object-contain absolute left-[30rem] top-[19.5rem] z-99'
                />    
            <p>
                Built Wicket longer admire do barton vanity itself do in it. 
                Preferred to sportsmen it engrossed listening. 
                Park gate sell they west hard for the.
            </p>
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