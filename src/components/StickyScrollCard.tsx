"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import cardData from "@/data/web_constants.json";

interface Card {
  title: string;
  description: string;
  content: React.ReactNode;
}

export function StickyScrollCard({ cardId }: { cardId: string | number |any }) {
  console.log(typeof cardId);
  const filterCard = cardData.cards.find(
    (card: { id: string | number | any }) =>{
      console.log(card.id);
      return card.id === +cardId;
    }
  );
  console.log("filterCard", filterCard);
  const content: Card[] = filterCard?.content || [];
  console.log(content)

  return (
    <div className="p-10 z-50 dark:text-black bg-white">
      <StickyScroll content={content} />
    </div>
  );
}
