import Image from 'next/image'
import React from 'react'

const SponsorTile = () => {
  return (
    <div>
        <Image 
            src='sponsor/axon.svg'
            width={100}
            height={100}
            alt='axon-logo'
        />

    </div>
  )
}

export default SponsorTile