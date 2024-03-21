"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  // Mobile Responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as per your requirements
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
              <div className=" fixed top-0 right-5 w-32 rounded-lg  z-50 object-cover">
            <Link href="/">
              <Image
                src="/logo_svg_1.svg"
                alt="logo"
                width={80}
                height={10}
                className="w-full h-20  rounded-lg bg-transparent scale-100 hover:scale-110 transition-transform duration-500 ease-in-out"
                priority={true}
              />
            </Link>
          </div>
            ):(
              <div className=" fixed  w-36 rounded-lg left-10 z-50 object-cover -top-5">
            <Link href="/">
              <Image
                src="/logo_svg_1.svg"
                alt="logo"
                width={100}
                height={20}
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
