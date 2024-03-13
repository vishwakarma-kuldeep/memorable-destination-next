import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memorable Destination ",
  description:
    "Memorable Destination is a travel agency that makes your journey memorable and unforgettable. Provides the best travel experience with the best travel packages. So, pack your bags and get ready to explore the world with us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full items-center">
          <Header />
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
