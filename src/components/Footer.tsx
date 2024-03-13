// "use client";
// import React, { useState, FormEvent } from "react";
// import {
//   AiFillFacebook,
//   AiFillInstagram,
//   AiFillTwitterSquare,
// } from "react-icons/ai";
// import { BiEnvelope } from "react-icons/bi";
// import LocationCard from "./LocationCard";
// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };

//   return (
//     <footer className="bg-dark-800 text-white p-4">
//       <div className="flex flex-col lg:flex-row items-center justify-between">
//         <div className="space-y-2">
//           <h3 className="text-lg font-semibold">Stay Connected</h3>
//           <p className="text-sm">
//             Don&apos;t miss out on our latest updates, promotions, and more!
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-sm lg:w-auto flex items-center space-x-2"
//         >
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="appearance-none block w-full bg-gray-700 text-white border border-gray-600 rounded-l-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:text-gray-800"
//             />
//             <button
//               type="submit"
//               disabled={!email}
//               className={`absolute top-0 right-0 rounded-r-md px-4 py-2 ${
//                 !email ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               Subscribe
//             </button>
//           </div>
//         </form>
//       </div>{" "}
//       <hr className="my-8" />
//       <div className="flex flex-row">
//         <div className="mt-4">
//           <div className="flex items-center space-x-4">
//             <a
//               href="https://www.facebook.com/profile.php?id=61555125752250"
//               target="_blank"
//               className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
//             >
//               <AiFillFacebook size={24} />
//             </a>
//             <a
//               href="https://www.instagram.com/memorable_destination_/"
//               target="_blank"
//               className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
//             >
//               <AiFillInstagram size={24} />
//             </a>

//             <a
//               href="mailto:naman@memorabledestination.in"
//               className="hover:text-white transition duration-150 ease-in-out"
//             >
//               <BiEnvelope size={24} />
//             </a>
           
//           </div>
//           <div className="mt-4 text-sm">
//             <address className="not-italic">
//               <p>
//                 <strong>Memorable Destination</strong>
//               </p>
//               <p>
//                 210,Arth Business Centre (abc), <br /> Opposite Torrent Power
//                 Sub Station, Sardar Patel Ring Rd,
//               </p>
//               <p>Nikol,Ahmedabad, Gujarat 382350</p>
//             </address>
//             <br />
//           </div>
//         </div>{" "}
//         &nbsp; &nbsp;
//         <span className="h-12/15 border-l border-gray-200 w-1 bg-gray-200 mx-4"></span>
//         <div className=" flex flex-row m-2  rounded w-96">
//           <LocationCard />
//         </div>
//       </div>
//       <hr className="my-4" />
//       <div className=" flex flex-row justify-center w-full align-center ">
//         <p className="">
//           Copyright © {new Date().getFullYear()} Memorable Destination
//         </p>
//       </div>
//     </footer>
//   );
// };
// export default Footer;



function Footer() {
  return (
    <footer className="bg-black w-full text-gray-400 py-12">
        <div className="max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p> 210,Arth Business Centre (abc),</p>
          <p> Opposite Torrent Power Sub Station, </p>
          <p>Sardar Patel Ring Rd,</p>
          <p>Nikol,Ahmedabad, Gujarat 382350</p>

          
          <p>Email: naman@memorabledestination.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Memorable Destination. All rights reserved.</p>
    </footer>
  )
}

export default Footer