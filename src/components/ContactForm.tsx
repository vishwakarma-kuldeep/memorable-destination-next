"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "./ui/moving-border";
type ContactFormProps = {};

type ContactFormState = {
  fullname: string;
  contactNumber: string;
  email: string;
  note: string;
  errors: {
    fullname?: boolean;
    contactNumber?: boolean;
    email?: boolean;
  };
};

const ContactForm: React.FC<ContactFormProps> = () => {
  const [state, setState] = useState<ContactFormState>({
    fullname: "",
    contactNumber: "",
    email: "",
    note: "",
    errors: {},
  });

  const handleValidation = () => {
    let tempErrors: { [key: string]: boolean } = {}; // Define tempErrors type explicitly
    let isValid = true;
  
    if (state.fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (state.email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (state.contactNumber.length <= 0) {
      tempErrors["contactNumber"] = true;
      isValid = false;
    }
  
    setState({ ...state, errors: tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        const response = await axios.post("/api/contact", state);
        console.log(response);

        // Reset form fields
        setState({
          fullname: "",
          contactNumber: "",
          email: "",
          note: "",
          errors: {},
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full justify-center items-center right-0  bg-white bg-gradient-to-br from-white to-white/0.2">
    
      <div className="w-3/6 ">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-gray-700 font-bold mb-2"
          >
            Full Name
            {state.errors.fullname && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            id="fullname"
            value={state.fullname}
            onChange={(e) =>
              setState({ ...state, fullname: e.target.value, errors: {} })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          />
          {state.errors.fullname && (
            <p className="text-red-500">Full name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="contactNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Contact Number
            {state.errors.contactNumber && (
              <span className="text-red-500">*</span>
            )}
          </label>
          <input
            type="tel"
            id="contactNumber"
            value={state.contactNumber}
            onChange={(e) =>
              setState({
                ...state,
                contactNumber: e.target.value,
                errors: {},
              })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {state.errors.contactNumber && (
            <p className="text-red-500">Contact number is required</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
            {state.errors.email && <span className="text-red-500">*</span>}
          </label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={(e) =>
              setState({ ...state, email: e.target.value, errors: {} })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {state.errors.email && (
            <p className="text-red-500">Email is required</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="note" className="block text-gray-700 font-bold mb-2">
            Note
          </label>
          <textarea
            id="note"
            value={state.note}
            onChange={(e) =>
              setState({ ...state, note: e.target.value, errors: {} })
            }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">

        <button
        //   borderRadius="1.75rem"
        //   width="100%"
          className=" py-2 dark:bg-transparent text-black dark:text-black border-neutral-200 dark:border-slate-800 items-center   hover:bg-gray-500 transition duration-200 hover:bg-yellow hover:text-black hover:scale-110 hover:ease-in-out hover:text-[1rem] hover:border-black hover:shadow-lg hover:border-0 hover:rounded-lg hover:transform hover:transition hover:duration-500 border-2 border-black rounded-xl  h-10 w-full"
          
        >
            Submit
        </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
