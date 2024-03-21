"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import cardData from '@/data/web_constants.json'

interface Card {
  title: string;
  description: string;
  content: React.ReactNode;
}

export function StickyScrollCard({cardId}: { cardId: number|any }) {
  // console.log(cardId);
  const filterCard = cardData.cards.find((card: { id: number; }) => card.id === cardId);
  // console.log("filterCard",filterCard)
  const content: Card[] = filterCard?.content || [];
    
  return (
    <div className="p-10 z-50 dark:text-green bg-green">
      <StickyScroll content={content} />
    </div>
  );
}
