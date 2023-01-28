import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <div>
      <nav className=" border-gray-200 opacity-60 px-2 sm:px-4 py-2.5 bg-violet-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              NFTify
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <Link to={"#"}>
                <li className="p-4 text-white font-bold hover:scale-110 rounded-md hover:bg-violet-600 transition-all ease-linear ">
                  Home
                </li>
              </Link>
              <Link to={"#"}>
                <li className="p-4 text-white font-extrabold hover:scale-110 rounded-md hover:bg-violet-600 transition-all ease-linear">
                  Join Us
                </li>
              </Link>
              <Link to={"#"}>
                <li className="p-4 text-white font-bold hover:scale-110 rounded-md hover:bg-violet-600 transition-all ease-linear ">
                  Login
                </li>
              </Link>
              <Link to={"#"}>
                <li className="p-4 text-white font-bold hover:scale-110 rounded-md hover:bg-violet-600 transition-all ease-linear ">
                  Avatar
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
