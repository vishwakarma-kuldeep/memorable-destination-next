"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";

const Slider = () => {
  const images = [
    "https://res.cloudinary.com/dmzjba3cu/image/upload/v1714371118/memorable%20destination%20images/hkmddupbpulo1v9kf6gu.jpg",
    "https://res.cloudinary.com/dmzjba3cu/image/upload/v1714371118/memorable%20destination%20images/najlyuckwyj9abhfsw9m.jpg",
    "https://res.cloudinary.com/dmzjba3cu/image/upload/v1714371117/memorable%20destination%20images/dsjqivbofv8qks0rtlwm.jpg",
    "https://res.cloudinary.com/dmzjba3cu/image/upload/v1714371117/memorable%20destination%20images/pi4hjcthaxbltxdwwh5j.jpg"
  ];
  
  const words = `Memorable Destination: Crafting timeless adventures, one journey at a time.`;


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