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
              <div className=" fixed top-2 right-5 w-24 rounded-lg  z-50 object-cover">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={10}
                className="w-full h-16  rounded-lg"
                priority={true}
              />
            </Link>
          </div>
            ):(
              <div className=" fixed top-4 w-24 rounded-lg left-16 z-50 object-cover m-4 mt-0">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={10}
                className="w-full h-16  rounded-lg"
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
