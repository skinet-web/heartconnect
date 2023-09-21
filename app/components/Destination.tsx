import React from 'react'
import DestinationTile from './DestinationTile'

const Destination = () => {
  return (
    <div className='flex flex-col  mt-20'>
        <div className=' flex flex-col justify-center items-center'>
            <h3 className='uppercase text-sm font-bold text-textSecondary'>Top Selling</h3>
            <h2 className='text-[40px] font-bold text-center'>Top Destinations</h2>
        </div>
       
        <section 
        className='flex flex-col lg:flex-row lg:gap-24  gap-10 justify-between  items-center my-10'>
            <DestinationTile                 
                imageUrl='/destination/rome.jpg'
                alt='rome-image'
                title='Rome, Italy'
                price= {5.4}
                duration='10 days trip'
            />
             <DestinationTile                 
                imageUrl='/destination/bigben.jpg'
                alt='london-image'
                title='London, UK'
                price= {4.2}
                duration='12 days trip'
            />
             <DestinationTile                 
                imageUrl='/destination/rome.jpg'
                alt='europe-image'
                title='Full Europe'
                price= {15}
                duration='28 days trip'
            />
            
        </section>
    </div>
  )
}

export default Destination