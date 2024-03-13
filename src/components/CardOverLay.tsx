"use client";
import React, { useEffect, useRef, MouseEvent } from "react";
import { StickyScrollCard } from "./StickyScrollCard";
import cardData from "@/data/web_constants.json";
const CardOverLay = ({
  setIsOpen,
  isOpen,
  cardId,
  onClose,
}: {
  setIsOpen: Function;
  isOpen?: boolean | null;
  cardId?: number | any;
  onClose?: () => void;
}) => {
  const handleCancel = () => {
    setIsOpen(false);
  };

  const overlayRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //   const handleClickOutside : EventListener = (event: MouseEvent): void => {
    //     if (
    //       overlayRef.current &&
    //       !overlayRef.current.contains(event.target as Node)
    //     ) {
    //       setIsOpen(false);
    //     }
    //   };

    //   if (isOpen) {
    //     // Add event listener when the overlay opens
    //     document.addEventListener("click", handleClickOutside);
    //   } else {
    //     // Remove event listener when the overlay closes
    //     document.removeEventListener("click", handleClickOutside);
    //   }

    //   // Cleanup function to remove event listener
    //   return () => {
    //     document.removeEventListener("click", handleClickOutside);
    //   };
    // }, [isOpen, setIsOpen, onClose]);
    // useEffect(() => {
    //   const handleClickOutside = (event: MouseEvent): void => {
    //     if (
    //       overlayRef.current &&
    //       !overlayRef.current.contains(event.target as Node)
    //     ) {
    //       setIsOpen(false);
    //     }
    //   };

    //   if (isOpen) {
    //     // Add event listener when the overlay opens
    //     document.addEventListener("click", handleClickOutside);
    //   } else {
    //     // Remove event listener when the overlay closes
    //     document.removeEventListener("click", handleClickOutside);
    //   }

    //   // Cleanup function to remove event listener
    //   return () => {
    //     document.removeEventListener("click", handleClickOutside);
    //   };
    // }, [isOpen, setIsOpen, overlayRef]);

    
  return (
    <div
      className="fixed inset-0  w-auto h-full flex items-center justify-center  bg-gray-500  bg-opacity-20 max-h-full overflow-y-auto z-50 top-10"
      ref={overlayRef}
    >
      <div className="flex h-full w-full items-center justify-center ">
        <button
          onClick={onClose}
          className="absolute top-10 right-20 m-4 p-2 bg-gray-500 rounded-md z-50"
        >
          Close
        </button>
        <StickyScrollCard cardId={cardId} />
      </div>
      //{" "}
    </div>
  );
};

export default CardOverLay;
