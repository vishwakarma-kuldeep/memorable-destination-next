"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import data from "@/data/web_constants.json";
import ImageGallery from "./ImageGallery";


export function SingleTourPage({ cardId }: { cardId: any }) {
  
  const filterCard = data.cards.find((card: { id: string | number | any }) => {
    // console.log(card.id);
    return card.id === +cardId;
  });
  //   console.log(filterCard);

  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <div className="w-full md:overflow-auto  relative h-auto rounded-2xl p-10 text-xl md:text-2xl  bg-white bg-gradient-to-br from-yellow to-white min-h-[20rem]">
          {/* <p>Description</p> */}
          <h2 className="font-bold">{filterCard?.title}</h2>
          {/* <div className="text-[1rem] p-8">{filterCard?.description}</div> */}
          {filterCard?.description.includes("<") ||
          filterCard?.description.includes(">") ? (
           
             <div
              dangerouslySetInnerHTML={{ __html: filterCard?.description }}
              className="text-[1.2rem] p-8 "
            />
          ) : (
            <div>{filterCard?.description}</div>
          )}
        </div>
      ),
    },
    {
      title: "Regular Packages",
      value: "regular_packages",
      content: (
        <div className="w-full md:overflow-auto  relative h-[45rem] rounded-2xl p-10 text-xl md:text-2xl   bg-gradient-to-br from-yellow to-white min-h-[20rem] ">
          <h2 className="font-bold">{filterCard?.title}</h2>
          <div>
            {/* Price starts From <b>Rs. {filterCard?.price_info}</b> */}
            {filterCard?.price_info.includes("<") ||
          filterCard?.price_info.includes(">") ? (
           
             <div
              dangerouslySetInnerHTML={{ __html: filterCard?.price_info }}
              className="text-[1.2rem] p-8 "
            />
          ) : (
            <div>{filterCard?.price_info}</div>
          )}
          </div>
        </div>
      ),
    },
    {
      title: "Fixed Departure Packages",
      value: "fixed_departure_packages",
      content: (
        <div className="w-full md:overflow-auto  relative h-[45rem] rounded-2xl text-xl md:text-2xl p-10   bg-gradient-to-br from-yellow to-white min-h-[20rem] ">
          <p>Random tab</p>
          <div className="flex items-center justify-center p-10 h-full w-full">

          <DummyContent />
          </div>
        </div>
      ),
    },
    {
      title: "Gallery",
      value: "gallery",
      content: (
        <div className="w-full relative h-full rounded-2xl  text-xl md:text-4xl  bg-white bg-gradient-to-br from-yellow to-white">
          <ImageGallery />
        </div>
      ),
    },
    {
      title: "Reviews",
      value: "reviews",
      content: (
        <div className="w-full md:overflow-auto  relative h-[45rem] rounded-2xl p-10 text-xl md:text-2xl   bg-gradient-to-br from-yellow to-white min-h-[20rem] ">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] xs:h-30rem [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 py-10 font-crimson font-normal min-h-[45rem] ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/logo.png"
      alt="dummy image"
      width="600"
      height="600"
      className="object-cover object-left-top h-[60%] flex md:h-[90%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
