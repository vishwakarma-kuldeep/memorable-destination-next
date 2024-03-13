"use client";
import React, { useRef } from "react";
import { StickyScrollCard } from "./StickyScrollCard";
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
  const overlayRef = useRef<HTMLDivElement>(null);

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
   
    </div>
  );
};

export default CardOverLay;