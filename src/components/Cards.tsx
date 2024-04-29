"use client";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import cardData from "../data/web_constants.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";
import SingleCard from "../app/tours/[tourId]/page";
import { CardsType } from "@/types/card.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cards = () => {
  const router = useRouter();
  return (
    <div className="py-4 bg-white">
      {" "}
      {/* bg-gray-200 */}
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase text-black">
            Tours
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Visit The Most Beautiful Places In The World!
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {cardData.cards.map((card: CardsType, index: number) => (
            <div key={card.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px]  dark:bg-white bg-white overflow-hidden h-full  max-w-sm">
                <div className="p-2 sm:p-6 flex flex-col items-center text-center flex-grow">
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
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-black dark:bg-white">
                    {card?.title}
                  </p>
                  <p className="text-sm text-black dark:text-black flex-grow mb-2">
                    {card.tiny_description.length > 100
                      ? card.tiny_description.slice(0, 100) + "..."
                      : card.tiny_description}
                  </p>
                  <Button
                    borderRadius="1.75rem"
                    className=" py-2 dark:bg-white text-black dark:text-black  border-neutral-200 dark:border-slate-800 hover:bg-gray-500 transition duration-200 hover:bg-yellow hover:text-black hover:scale-110 hover:ease-in-out hover:text-[1rem] hover:border-black hover:shad  ow-lg hover:border-natural-400 hover:rounded-lg hover:transform hover:transition hover:duration-500"
                      onClick={(e:any)=>{
                        e.preventDefault()
                        router.push("/tours/"+card.id,)
                        
                      }}
                  >
                    {/* <Link href={"/tours/" + card.id} >  </Link> */}
                    View Details
                  </Button>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Button
          borderRadius="1.75rem"
          className=" py-2 dark:bg-transparent text-black dark:text-black border-neutral-200 dark:border-slate-800 hover:bg-gray-500 transition duration-200 hover:bg-yellow hover:text-black hover:scale-110 hover:ease-in-out hover:text-[1rem] hover:border-black hover:shadow-lg hover:border-natural-400 hover:rounded-lg hover:transform hover:transition hover:duration-500"
          // " py-2 bg-gray-900 text-gray-900 dark:text-gray-900 bg-transparent border-neutral-200 dark:border-gray-800 hover:bg-gray-800 transition duration-200 "
        >
          <Link href="/tours"> View all Tours </Link>
        </Button>
      </div>
    </div>
  );
};

export default Cards;
