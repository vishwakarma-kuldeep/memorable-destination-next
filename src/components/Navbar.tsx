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
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as per your requirements
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
        "fixed top-2 inset-x-2 max-w-auto w-11/12 mx-auto z-20 ",
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

function RegularNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-2 inset-x-2 max-w-auto w-9/12   px-4  mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link
          href="/"
          className=" text-xl hover:text-blue-500 hover:underline default:text-blue-500"
        >
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <Link href="/tours" className=" text-xl hover:text-blue-500 hover:underline">
          <MenuItem setActive={setActive} active={active} item="Details" />
        </Link>
        <Link href="#" className=" text-xl hover:text-blue-500 hover:underline">
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
        <Link href="#" className=" text-xl hover:text-blue-500 hover:underline">
          <MenuItem setActive={setActive} active={active} item="About" />
        </Link>
        <Link href="#" className=" text-xl hover:text-blue-500 hover:underline">
          <MenuItem setActive={setActive} active={active} item="Terms" />
        </Link>
      </Menu>
    </div>
  );
}

function HamburgerNavbar({ className }: { className?: string }) {
  const routes = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Details",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Terms",
      href: "#",
    },
  ];
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
            <ul className="bg-dark-500 p-5 space-y-3 text-white">
              {routes.map((route, index) => (
                <motion.li
                  key={index}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <a
                    href={route.href}
                    className="block text-white-800 font-semibold text-xl hover:text-blue-500 hover:underline"
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
