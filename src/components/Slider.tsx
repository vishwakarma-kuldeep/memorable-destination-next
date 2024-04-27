"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  
  const words = `From Jaipur's Pink City  to Jaisalmer's Golden Hues:  Rajasthan's Splendor Awaits!`;


  return (
    <div>
      <ImagesSlider className="h-[50rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.div className="font-bold text-xl text-black md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            <TextGenerateEffect words={words} />
          </motion.div>
         
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-white text-black hover:bg-yellow hover:text-black hover:text-lg dark:text-black border-neutral-300 dark:border-blue hover:border-blue"
          >
            <Link href="tel:+91 7698249395"> Enquire now →</Link>
          </Button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};

export default Slider;