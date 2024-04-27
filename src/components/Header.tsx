"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Mobile Responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 468); // Adjust the threshold as per your requirements
    };

    handleResize(); // Call initially to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {
            isMobile?(
              <div className=" fixed top-0 right-5 w-[2rem] rounded-lg  z-50 object-cover overflow-auto">
            <Link href="/">
              <Image
                src="/logo_svg_1.svg"
                alt="logo"
                width={80}
                height={10}
                className="w-[4rem] h-[2rem]  rounded-lg bg-transparent scale-100 hover:scale-110 transition-transform duration-500 ease-in-out  md:w-10 md:mr-2"
                priority={true}
              />
            </Link>
          </div>
            ):(
              <div className=" fixed  w-52 rounded-lg left-10 z-50 object-cover -top-12">
            <Link href="/">
              <Image
                src="/logo_svg_1.svg"
                alt="logo"
                width={150}
                height={30}
                className="w-full h-full  rounded-lg bg-transparent scale-100 hover:scale-110 transition-transform duration-500 ease-in-out"
                priority={true}
              />
            </Link>
          </div>
            )
}
    </>
  );
};

export default Header;
