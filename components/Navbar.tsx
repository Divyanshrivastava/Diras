import React from "react";
export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <img src="/file1.png" alt="logoImg" className="h-[50px] w-auto"/>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <img src='/menu.svg' alt='menu' className="text-white"/>
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Contact
            </a>
            <button className="bg-white py-2 px-4 rounded-lg text-black">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

