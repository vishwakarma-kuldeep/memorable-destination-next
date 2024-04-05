"use client";
import React, { useRef } from "react";
import { StickyScrollCard } from "../../../components/StickyScrollCard";
import { SingleTourPage } from "@/components/SingleTourPage";



const SingleCard = ({params}:{
  params:{tourId: string | number | any}
}) => {

  const cardId = params.tourId;
 
  return (
      <div className=" flex items-center justify-center bg-white text-black  h-full top-[2rem] ">
        {/* <StickyScrollCard cardId={cardId} /> */}
        <SingleTourPage cardId={cardId}/>
    </div>
  );
};

export default SingleCard;
