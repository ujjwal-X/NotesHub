import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-black dark:bg-gray-900 border-b-4 border-logoColor">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-20 relative">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={"/Notes-Hub transparent.png"}
            className="h-16"
            alt="notes"
          />
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <Link
              to="/"
              className="text-white hover:text-logoColor font-extrabold text-base"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/school"
              className="text-white hover:text-logoColor font-extrabold text-base"
            >
              School
            </Link>
          </li>
          <li>
            <Link
              to="/college"
              className="text-white hover:text-logoColor font-extrabold text-base"
            >
              College
            </Link>
          </li>
          <li>
            <Link
              to="/Compitative"
              className="text-white hover:text-logoColor font-extrabold text-base"
            >
              Competitive
            </Link>
          </li>
        </ul>

        {/* Right: Login */}
        <div className="hidden md:flex">
          <Link
            to="/login"
            className="bg-logoColor text-black font-bold px-4 py-2 rounded hover:bg-opacity-90 transition"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-white">
            <li>
              <Link
                to="/"
                className="block py-2 hover:text-logoColor font-extrabold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/school"
                className="block py-2 hover:text-logoColor font-extrabold"
              >
                School
              </Link>
            </li>
            <li>
              <Link
                to="/college"
                className="block py-2 hover:text-logoColor font-extrabold"
              >
                College
              </Link>
            </li>
            <li>
              <Link
                to="/Compitative"
                className="block py-2 hover:text-logoColor font-extrabold"
              >
                Competitive
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 hover:text-logoColor font-extrabold"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
