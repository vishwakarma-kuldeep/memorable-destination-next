'use client'
import React from 'react'
import InfiniteMovingCards from './ui/infinite-moving-cards'
import cardData from '@/data/web_constants.json'
const Testimonials = () => {

  return (

    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={cardData.testimonials}
        direction="right"
        speed="normal"
      />
          </div>
  )
}

export default Testimonials
