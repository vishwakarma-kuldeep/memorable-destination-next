'use client'
import React from 'react'
import InfiniteMovingCards from './ui/infinite-moving-cards'
import cardData from '@/data/web_constants.json'
const Testimonials = () => {

  return (

    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white/80 dark:text-black dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={cardData.testimonials}
        direction="right"
        speed="normal"
      />
          </div>
  )
}

export default Testimonials
