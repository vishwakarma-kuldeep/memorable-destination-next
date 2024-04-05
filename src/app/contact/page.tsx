'use client';
import React from 'react'
import Contact from './ContactUS'
import Image from 'next/image'
import Meteor from '@/components/Meteor'
const page = () => {
  return (
    <div className="h-full w-full bg-white flex justify-between text-black">
        <div className="w-1/2">
        <Image
          src="/logo.png"
          alt="Contact Us"
          height={900}
            width={900}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-1/2">
        <Meteor />

    
      </div>
    </div>
  )
}

export default page
    