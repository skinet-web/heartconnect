import React from 'react'
import CategoryTile from './CategoryTile'

const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <h3 className='uppercase text-sm font-bold text-textSecondary'>Category</h3>
        <h2 className='text-[40px] font-bold text-center'>We Offer Best Services</h2>
        <section 
        className='flex flex-col lg:flex-row lg:gap-24  gap-10 justify-between items-center my-10'>
            <CategoryTile
                width={110}
                height={110} 
                imageUrl='/services/satelite.svg'
                alt='satelite-image'
                title='Calculated Weather'
                paragraph='Built Wicket longer admire do barton vanity itself do in it.'
            />
            <CategoryTile
                width={300}
                height={180}  
                imageUrl='/services/plane.svg'
                alt='plane-image'
                title='Best Flights'
                paragraph='Engrossed listening. Park gate sell they west hard for the.'
            />
            <CategoryTile
                width={110}
                height={110}  
                imageUrl='/services/mic.svg'
                alt='mic-image'
                title='Local Events'
                paragraph='Barton vanity itself do in it. Preferd to men it engrossed listening. '
            />
            <CategoryTile 
                width={110}
                height={110} 
                imageUrl='/services/settings.svg'
                alt='settings-image'
                title='Costumization'
                paragraph='We deliver outsourced
                aviation services for
                military customers'
            />
        </section>
    </div>
  )
}

export default Services