import Image from 'next/image'
import React from 'react'

const BookSection = () => {
  return (
    <div className='flex flex-col lg:flex-row my-20 '>
        <div className='flex flex-col item'>
            <h2 className='font-semibold text-textSecondary ml-1 '>Easy and fast</h2>
            <h1 className='font-bold text-6xl'>Book your next trip in 3 easy steps</h1>
            <section className='flex flex-col gap-5 my-20 lg:gap-10 lg:w-[40rem]'> 
                <div className='flex  items-center gap-5'>
                    <Image 
                        src = '/book/chooseDestination.png'
                        width= {50}
                        height= {50}
                        alt='chooseDestination'
                    />
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-textSecondary text-lg'>
                        Choose Destination
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. 
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <Image 
                        src = '/book/makePayments.png'
                        width= {50}
                        height= {50}
                        alt='chooseDestination'
                    />
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-textSecondary text-lg'>
                        Make Payment
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus.  
                        </p>
                    </div>
                </div>
                <div className='flex  items-center gap-5'>
                    <Image 
                        src = '/book/car.png'
                        width= {50}
                        height= {50}
                        alt='chooseDestination'
                    />
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-textSecondary text-lg'>
                        Reach Airport on Selected Date
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Urna, tortor tempus. 
                        </p>
                    </div>
                </div>
            </section>
            
        </div>
        <div>
            <Image 
                src = '/book/image.png'
                height={900}
                width={900}
                alt='bookExemple'
                className='2xl:-mt-56 -mt-20 hidden sm:flex object-contain'
            />
        </div>
    </div>
  )
}

export default BookSection