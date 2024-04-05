import React from "react";
import { Meteors } from "./ui/meteors";
import Contact from '@/app/contact/ContactUS'
function Meteor() {
  return (
    <div className="">
      <div className=" w-full h-auto relative flex justify-center items-center top-10 ">
        <div className="absolute inset-0 h-auto w-full  transform scale-[0.90] trnasform skew-x-6 blur-xl" />
        <div className="relative w-full h-auto    px-4 py-8  overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          
            <Contact />

          {/* Meaty part - Meteor effect */}
          <Meteors number={40} />
        </div>
      </div>
    </div>
  );
}

export default Meteor;