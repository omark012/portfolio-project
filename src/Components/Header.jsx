import React, { useRef, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log("new value", isDarkMode);

    document.documentElement.classList.toggle("dark");
  };

  const sideMenuRef = useRef();

  const openSideMenu = () => {
    sideMenuRef.current.style.right = "0";
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.right = "-100rem";
  };

  return (
    <section className=" mx-6 fixed inset-x-0 top-5 z-50 bg-[#EEEEEC]/99">
      <header className="px-5 py-2 max-w-6xl mx-auto md:py-3 font-sans h-16 shadow-sm flex justify-between items-center border border-slate-300 rounded-xl">
        {/* Logo */}
        <div
          className="logo cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
           text-3xl font-bold transition-colors duration-500 ease-in-out hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-pink-500"
        >
          Omar Khan
        </div>

        {/* Nav-menu */}
        <ul className="hidden text-gray-900  md:flex items-center justify-center gap-6 bg-white/20 rounded-full shadow-sm px-8 ">
          <li>
            <a
              href="#showcase"
              className="nav-link text-current inline-block py-1 px-2 text-lg font-normal rounded-sm transition-all duration-400 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link text-current inline-block py-1 px-2 text-lg font-normal rounded-sm transition-all duration-400 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="nav-link text-current inline-block py-1 px-2 text-lg font-normal rounded-sm transition-all duration-400 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="nav-link text-current inline-block py-1 px-2 text-lg font-normal rounded-sm transition-all duration-400 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-link text-current inline-block py-1 px-2 text-lg font-normal rounded-sm transition-all duration-400 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Buttons */}

        <div className=" flex items-center justify-center gap-x-6">
          {/* Dark mode */}
          <button
            onClick={toggleColorMode}
            className="p-1 text-lg cursor-pointer rounded transition-all duration-300 hover:bg-gray-300"
          >
            {isDarkMode ? <FaSun color="orange" /> : <FaMoon color="black" />}
          </button>

          {/* Hamburger Menu */}

          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={openSideMenu}
          >
            <GrMenu />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className=" flex flex-col gap-6 px-10 py-14 items-center justify-start fixed top-0 bottom-0 -right-100 min-w-xs bg-pink-300 transition-all duration-700 z-50"
        >
          <div
            className="text-3xl absolute top-5 right-5 cursor-pointer  hover:text-red-500 transition duration-200"
            onClick={closeSideMenu}
          >
            <MdClose />
          </div>

          <li>
            <a href="" onClick={closeSideMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="" onClick={closeSideMenu}>
              About
            </a>
          </li>
          <li>
            <a href="" onClick={closeSideMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="" onClick={closeSideMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="" onClick={closeSideMenu}>
              Contact
            </a>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Header;
