"use client";
import React, { useState, FormEvent } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <footer className="bg-dark-800 text-white p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Stay Connected</h3>
          <p className="text-sm">
            Don&apos;t miss out on our latest updates, promotions, and more!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm lg:w-auto flex items-center space-x-2"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded-l-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:text-gray-800"
            />
            <button
              type="submit"
              disabled={!email}
              className={`absolute top-0 right-0 rounded-r-md px-4 py-2 ${
                !email ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="mt-8">
        <div className="flex items-center space-x-4">
          <a
            href="/#"
            className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
          >
            <AiFillFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/memorable_destination_/" target="_blank"
            className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
          >
            <AiFillInstagram size={24} />
          </a>
          <a
            href="/#"
            className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
          >
            <AiFillTwitterSquare size={24} />
          </a>
        </div>
        <div className="mt-4 text-sm">
          <address className="not-italic">
           
            <p>
              <strong>Memorable Destination</strong>
            </p>
            <p>
              210,Arth Business Centre (abc), Opposite Torrent Power Sub
              Station, Sardar Patel Ring Rd,
            </p>
            <p>Nikol,Ahmedabad, Gujarat 382350</p>
          </address>
          <br />
          <p>Copyright © {new Date().getFullYear()} Memorable Destination</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
