'use client'

import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div
    className='
    max-w-[2520px]
    mx-auto
    xl:px-52
    md:px-20
    sm:px-20
    xl:py-20
    md:py-10
    sm:py-2
    py-4
    px-6
    '
    >
    {children}
    </div>
  )
}

export default Container