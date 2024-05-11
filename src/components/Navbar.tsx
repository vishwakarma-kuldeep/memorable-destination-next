"use client";
import React, { useState, useEffect, useRef } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
// import logo from "@/assets/logo.png";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  // Mobile Responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 468 || window.innerWidth< 720)  ; // Adjust the threshold as per your requirements
    };

    handleResize(); // Call initially to set the initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={cn(
        "fixed top-2 inset-x-2 max-w-auto w-11/12 mx-auto z-20  text-black",
        className
      )}
    >
      {isMobile ? (
        // Render hamburger menu for mobile devices
        <HamburgerNavbar />
      ) : (
        // Render regular navigation for larger screens
        <RegularNavbar />
      )}
    </div>
  );
};
const routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "All Tours",
    href: "/tours",
  },
  {
    title:"Gallery",
    href:"/gallery"
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "About",
    href: "/about-us",
  },
  {
    title: "Terms",
    href: "/terms",
  },
];

function RegularNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-2 inset-x-2 max-w-auto w-9/12 px-4 mx-auto z-50 text-black ",
        className
      )}
    >
      <Menu setActive={setActive}>
        {routes.map((route, index) => (
          <Link
            href={route.href}
            key={index}
            className=" text-xl hover:text-black hover:underline"
          >
            <MenuItem
              setActive={setActive}
              active={active}
              item={route.title}
            />
          </Link>
        ))}
      </Menu>
    </div>
  );
}

function HamburgerNavbar({ className }: { className?: string }) {
  const [isOpen, setOpen] = useState(false);
  const node = useRef(null);

  useClickAway(node, () => {
    setOpen(false);
  });

  return (
    <div ref={node}>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="bg-transparent p-5 space-y-3 text-black">
              {routes.map((route, index) => (
                <motion.li
                  key={index}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <a
                    href={route.href}
                    className="block text-black font-semibold text-xl hover:text-black hover:underline hover:bg-green px-5 rounded-lg"
                  >
                    {route.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
