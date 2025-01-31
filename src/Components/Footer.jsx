import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="mx-6 p-5 sm:p-10 lg:p-0 mt-20">
      <div className="w-full p-6 max-w-6xl mx-auto border-t-1 border-gray-500 hover:border-gray-300 transition duration-300 text-center text-gray-800 dark:text-gray-200">
        Copyright &copy; 2025 All rights reserved | Designed & Developed with
        ⚡💻❤️ by
        <span
          className="ml-1 cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500
           font-bold transition-colors duration-500 ease-in-out hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-pink-500 text-lg"
        >
          Omar Khan
        </span>
      </div>
    </footer>
  );
};

export default Footer;
