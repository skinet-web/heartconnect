import Image from 'next/image'
import React from 'react'

interface CategoryTileProps {
    title: string,
    imageUrl: string,
    alt: string,
    paragraph: string,
    width: number,
    height: number,
}

const CategoryTile: React.FC<CategoryTileProps> = ({
    title,
    imageUrl,
    alt,
    width,
    height,
    paragraph
}) => {
  return (
    <div className='px-10 shadow-xl rounded-2xl'>
        <div className='flex flex-col items-center justify-center  h-[19rem] w-[10rem] '>
            <Image 
                src={imageUrl}
                width={width}
                height={height}
                alt={alt}
                className='h-24'
            />
            <h2 className='font-bold mt-6'>{title}</h2>
            <p className=' my-6 text-textSecondary text-center'>{paragraph}</p>
        </div>
    </div>
  )
}

export default CategoryTile