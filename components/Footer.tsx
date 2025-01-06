import { socialMedia } from '@/data'
import React from 'react'

function Footer() {
  return (
    <div className='w-full pt-10 bg-black container'>

<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Dira's
        </p>

        <div className="flex items-center md:gap-3 gap-6 sm:pt-2 pb-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Footer