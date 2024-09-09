"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="absolute left-1/2 top-2 flex w-[1200px] h-[90px] -translate-x-1/2 justify-between items-center gap-[60px] bg-[rgba(214,214,214,0.4)] opacity-100 px-4 py-1 rounded-[35px]">
      <nav className="flex justify-between items-center w-full px-4 py-2">
        <div className="flex items-center mr-8">
          <Link href="/">
            <Image
              src="/images/LOGO%201.svg" // Direct path from public directory
              alt="logo"
              width={125}
              height={40}
            />
          </Link>
        </div>
        <ul className="flex items-center text-black list-none space-x-5">
          {/* Search Bar */}
          <li className="flex items-center mr-48">
            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-full border border-gray-300 w-30"
            />
          </li>
          {/* Cart, About, and Contact Links */}
          <li className="flex items-center">
            <a
              href="#"
              className="flex items-center text-sm text-black hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <Image
                src="/images/cartframe.svg" // Direct path from public directory
                alt="cart"
                width={24}
                height={24}
                className="mr-2"
              />
              Cart
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="#"
              className="flex items-center text-sm text-black hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <Image
                src="/images/aboutframe.svg" // Direct path from public directory
                alt="about"
                width={24}
                height={24}
                className="mr-2"
              />
              About
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="#"
              className="flex items-center text-sm text-black hover:text-white hover:bg-gray-700 px-4 py-2 rounded transition"
            >
              <Image
                src="/images/contactframe.svg" // Direct path from public directory
                alt="contact"
                width={24}
                height={24}
                className="mr-2"
              />
              Contact
            </a>
          </li>
          {/* Profile Dropdown */}
          <li className="relative flex items-center">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center w-20 h-18 text-black hover:bg-gray-700 rounded transition"
            >
              <Image
                src="/images/Login.svg" // Direct path from public directory
                alt="profile"
                width={80}
                height={80}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 py-2 w-48 bg-white text-black rounded-lg shadow-lg z-20">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </li>
        </ul>
        {/* Burger Menu for Mobile Responsiveness */}
        <div className="flex md:hidden flex-col justify-around w-6 h-6 cursor-pointer">
          <div className="w-full h-0.5 bg-black mb-1"></div>
          <div className="w-full h-0.5 bg-black mb-1"></div>
          <div className="w-full h-0.5 bg-black"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
