import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const GoToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const listenToScroll = () => {
    if (window.scrollY > 350) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const goToHandle = () => {
    // function to move screen on top
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div
      className={`fixed bottom-12 right-3 sm:right-4 tex-xl bg-yellow-400 h-12 w-12 rounded-full z-40 cursor-pointer flex items-center justify-center hover:bg-yellow-500 animate-bounce transition-all duration-300 opacity-0 invisible ${
        showTopBtn && "opacity-100 visible"
      }`}
      onClick={goToHandle}
    >
      <FaChevronUp className="icon-up" />
    </div>
  );
};

export default GoToTop;
