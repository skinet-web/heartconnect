import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'


interface DestinationTileProps {
    title : string,
    alt: string,
    imageUrl: string,
    price: number,
    duration: string,
}

const DestinationTile:React.FC<DestinationTileProps> = ({
    title,
    alt,
    imageUrl,
    price,
    duration
}) => {
  return (
    <div className=' shadow-xl rounded-2xl'>
        
            <Image 
                src={imageUrl}
                width={300}
                height={300}
                alt={alt}
                className=' rounded-t-xl  object-contain'
            />
            <div className='  items-center mx-5 my-3'>
                <div className='flex justify-between'>
                    <h2 className='font-bold'>{title}</h2>
                    <p className='text-textSecondary text-center'>${price}k</p> 
                </div>
                <div className='flex gap-3 items-center my-5'>
                    <FiArrowUpRight />   
                    <p>{duration}</p>
                </div>
                   
            </div>   
         
    </div>
  )
}

export default DestinationTile