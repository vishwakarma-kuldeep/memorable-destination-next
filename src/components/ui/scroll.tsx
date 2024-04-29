"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

// type Card = {
//   url:string;
// };
export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const fourth = Math.ceil(images.length / 4);

  const firstPart = images.slice(0, fourth);
  const secondPart = images.slice(fourth, 2 * fourth);
  const thirdPart = images.slice(2 * fourth);
  const fourthPart = images.slice(3 * fourth);

  // Overlay
  const [selected, setSelected] = useState("");
  const [lastSelected, setLastSelected] = useState("");
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClick = (url:string) => {
    console.log(url);
    setIsOverlayOpen(true);
    setLastSelected(selected);
    setSelected(url);
  };

  const handleOutsideClick = () => {
    setIsOverlayOpen(false);
    setLastSelected(selected);
    setSelected("");
  };

  return (
    <div
      className={cn("h-full items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start  max-w-7xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
              onClick={() => handleClick(el)}
            >
              <Image
                src={el}
                className="h-80 w-full  object-left-top rounded-lg gap-10 !m-0 !p-0 object-fill"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-auto object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {fourthPart.map((el, idx) => (
            <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
      isOverlayOpen &&{" "}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-[20rem] w-[20rem] left-[50%] top-50% bg-black opacity-0 z-50",
          selected ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected ? 0.3 : 0 }}
      >
        <Image
          src={selected}
          className="h-full w-full object-cover rounded-lg z-50"
          height="400"
          width="400"
          alt="thumbnail"
        />
      </motion.div>
    </div>
  );
};
