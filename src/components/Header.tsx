"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";
import logo from "@/assets/logo.png";
import Navbar from "@/components/Navbar";
const Header = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-20 flex left-0 ", className)}
    >
      {/* Left side logo  */}
      
      {/* Right side menu Navigation menu */}
      <div className="relative inset-y-0 right-0">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
