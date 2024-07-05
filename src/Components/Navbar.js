import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={`/${"Notes-Hub.svg"}`} className="h-16" alt="notes" />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 sm:bg-black">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 bg-black-700 rounded md:bg-black md:text-white-700 md:p-0 dark:text-white md:dark:text-blue-500 text-white hover:text-logoColor text-base sm:bg-black sm:p-5 text-center"
                aria-current="page"
              >
                <span className="font-extrabold">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/school"
                className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 sm:hover:text-logoColor text-base md:p-0 md:hover:text-logoColor dark:text-white text-white text-center sm:p-5"
              >
                <span className="font-extrabold">School</span>
              </Link>
            </li>
            <li>
              <Link
                to="/college"
                className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 text-base md:p-0 sm:hover:text-logoColor text-white md:hover:text-logoColor text-center sm:p-5"
              >
                <span className="font-extrabold">College</span>
              </Link>
            </li>
            <li>
              <Link
                to="/Compitative"
                className="block py-2 px-3 rounded md:border-0 md:hover:text-logoColor text-base md:p-0 md:hover:bg-transparent text-white sm:hover:text-logoColor text-center sm:p-5"
              >
                <span className="font-extrabold">Competitive Examination</span>
              </Link>
            </li>
            <li>
              <Link
                to="./contact"
                className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-logoColor text-base md:p-0 sm:hover:text-logoColor text-white text-center sm:p-5"
              >
                <span className="font-extrabold">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
