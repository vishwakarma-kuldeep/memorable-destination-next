"use client";
import React, { useRef } from "react";
import { StickyScrollCard } from "../../../components/StickyScrollCard";



const SingleCard = ({params}:{
  params:{tourId: string | number | any}
}) => {

  const cardId = params.tourId;
 
  return (
      <div className=" flex items-center justify-center  bg-white text-black  h-[33rem] top-[2rem] ">
        <StickyScrollCard cardId={cardId} />
    </div>
  );
};

export default SingleCard;
