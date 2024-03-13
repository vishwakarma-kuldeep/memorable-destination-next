'use client'
import React,{useState} from 'react'
import cardData from '@/data/web_constants.json'
import { CardsType } from '@/types/card.interface'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Button } from '@/components/ui/moving-border'
import OverlayCard from '@/components/CardOverLay'
const ToursCards = () => {
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
    <div className="flex justify-center flex-col items-center ">
        <div className="w-full h-32 my-2"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {cardData.cards.map((card: CardsType, index: number) => (
            <div key={card.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {card.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow mb-2">
                    {card.description}
                  </p>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-white py-2 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-gray-500 transition duration-200 "
                    onClick={() => handleOpenOverlay(index)}
                  >
                    View Details
                  </Button>
                  {isOpenArray[index] && (
                    <OverlayCard
                      setIsOpen={(value: boolean) => {
                        const newIsOpenArray = [...isOpenArray];
                        newIsOpenArray[index] = value;
                        setIsOpenArray(newIsOpenArray);
                      }}
                      isOpen={isOpenArray[index]}
                      cardId={card.id}
                      onClose={() => handleCloseOverlay(index)}
                    />
                  )}
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ToursCards
