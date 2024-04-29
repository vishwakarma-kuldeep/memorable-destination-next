"use client";
import React, { useState } from "react";
import cardData from "@/data/web_constants.json";
import { CardsType } from "@/types/card.interface";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/moving-border";
import SingleCard from "@/app/tours/[tourId]/page";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";

const ToursCards = () => {


  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenArray, setIsOpenArray] = useState<boolean[]>(
    Array(cardData.cards.length).fill(false)
  );

  const handleOpenOverlay = (index: number): void => {
    const newIsOpenArray = [...isOpenArray];
    newIsOpenArray[index] = true;
    setIsOpenArray(newIsOpenArray);
  };

  const handleCloseOverlay = (index: number): void => {
    const newIsOpenArray = [...isOpenArray];
    newIsOpenArray[index] = false;
    setIsOpenArray(newIsOpenArray);
  };

  return (
    <div className="flex justify-center flex-col items-center bg-white ">
      <div className="w-full h-32 my-2"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {cardData.cards.map((card: CardsType, index: number) => (
          <div key={card.id} className="flex justify-center h-50">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={100}
                    className="rounded-lg m-0 p-0"
                    priority={true}
                  />
                ) : (
                  // Provide a fallback if card.image is undefined
                  <div className="placeholder-image w-300 h-100 bg-gray-200 rounded-lg">
                    {" "}
                    Image
                  </div>
                )}
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 ">
                  {card.title}
                </p>
                <p className="text-sm text-black dark:text-neutral-400 flex-grow mb-2">
                  {card.tiny_description.length > 100
                    ? card.tiny_description.slice(0, 100) + "..."
                    : card.tiny_description}
                </p>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white py-2 dark:bg-slate-900 text-black dark:text-black border-neutral-200 dark:border-slate-800 hover:bg-gray-500 transition duration-200 "
                  onClick={(e:any)=>{
                    e.preventDefault()
                    router.push("/tours/"+card.id)
                    
                  }}
                >
                  View Details
                </Button>
                
              </div>
            </BackgroundGradient>
          </div>
        ))}
{/*         
        {cardData.cards.map((card: CardsType, index: number) => (
          <div key={card.id} className="flex justify-center h-50">
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
              <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={300}
                    height={100}
                    className="rounded-lg m-0 p-0"
                    priority={true}
                  />
                ) : (
                  // Provide a fallback if card.image is undefined
                  <div className="placeholder-image w-300 h-100 bg-gray-200 rounded-lg">
                    {" "}
                    Image
                  </div>
                )}
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 ">
                  {card.title}
                </p>
                <p className="text-sm text-black dark:text-neutral-400 flex-grow mb-2">
                  {card.description.length > 100
                    ? card.description.slice(0, 100) + "..."
                    : card.description}
                </p>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white py-2 dark:bg-slate-900 text-black dark:text-black border-neutral-200 dark:border-slate-800 hover:bg-gray-500 transition duration-200 "
                  onClick={() => handleOpenOverlay(index)}
                >
                  View Details
                </Button>
                
              </div>
            </BackgroundGradient>
          </div>
        ))}
      */}
      </div>
      
      <div className="mt-16 text-center">
        <Button
          borderRadius="1.75rem"
          className="bg-black py-2 dark:bg-transparent text-black dark:text-black border-neutral-200 dark:border-slate-800 hover:bg-gray-500 transition duration-200 hover:bg-yellow hover:text-black hover:scale-110 hover:ease-in-out hover:text-[1rem] hover:border-black hover:shadow-lg hover:border-natural-400 hover:rounded-lg hover:transform hover:transition hover:duration-500"
        >
          <Link href="/tours"> More Tours </Link>
        </Button>
      </div>
    </div>
  );
};

export default ToursCards;
