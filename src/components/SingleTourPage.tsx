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
        <div className="w-full md:overflow-auto  relative h-auto rounded-2xl p-10 text-xl md:text-4xl  bg-white bg-gradient-to-br from-yellow to-white">
          {/* <p>Description</p> */}
          <h2 className="font-bold">{filterCard?.title}</h2>
          {/* <div className="text-[1rem] p-8">{filterCard?.description}</div> */}
          {
            filterCard?.description.includes('<') || filterCard?.description.includes('>') ? (
                <div dangerouslySetInnerHTML={{ __html: filterCard?.description }} className="text-lg" />
                ) : (
                <div>{filterCard?.description}</div>
            )
          }

        </div>
      ),
    },
    {
      title: "Regular Packages",
      value: "regular_packages",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  bg-white bg-gradient-to-br from-yellow to-white ">
          <h2>{filterCard?.title}</h2>
          <div >
            Price starts From <b>Rs. {filterCard?.price_info}</b>
          </div>
          
        </div>
      ),
    }
    ,
    {
      title: "Fixed Departure Packages",
      value: "fixed_departure_packages",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  bg-white bg-gradient-to-br from-yellow to-white">
          <p>Random tab</p>
          <DummyContent />
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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  bg-white bg-gradient-to-br from-yellow to-white">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/logo.png"
      alt="dummy image"
      width="900"
      height="900"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
