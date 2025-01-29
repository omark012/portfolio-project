import React from "react";
import profile from "../images/profile.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Showcase = () => {
  // Typewriter Effect
  const [text] = useTypewriter({
    words: ["Frontend Developer", "React Expert", "Traveller"],
    loop: 0,
  });

  return (
    <section
      id="showcase"
      className="mx-6 p-5 sm:p-10 lg:p-0 scroll-mt-[11.625rem] "
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-4">
        {/* Text */}
        <div
          className="showcase-text flex flex-col justify-center items-start 
        gap-3"
        >
          <p className="w-full intro text-center md:text-left text-black text-2xl md:text-3xl lg:text-4xl font-semibold">
            Hello, I'm <span className="text-red-600 font-bold">Omar Khan</span>
            <span className="text-2xl md:text-4xl ml-1">👋</span>
          </p>

          <div
            className="post text-[rgb(246,210,2)] text-5xl font-bold 
          leading-[4rem]"
          >
            {text}
            <Cursor cursorColor="red" />
          </div>
          <div className="description w-full text-black text-lg md:text-xl font-[420] text-justify ">
            As a passionate front-end developer based in India, I specialize in
            creating stunning, user-friendly websites that not only look amazing
            but also function seamlessly. Let’s bring your vision to life and
            create something extraordinary together. ✨{" "}
          </div>

          <a
            href="/data/file/Resume.pdf"
            target="_blank"
            className="relative inline-flex items-center justify-start overflow-hidden mt-5 font-semibold transition-all duration-150 ease-in-out border rounded-xl group z-20 py-2 pl-3 pr-10 text-sm md:py-3 md:pl-4 md:pr-12 md:text-base hover:pl-8 hover:pr-4 md:hover:pl-10 md:hover:pr-6 lg:hover:pl-12 lg:hover:pr-8 bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
          >
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-white dark:bg-black z-10"></span>

            {/* Right Arrow Icon  */}
            <span className="absolute right-0 pr-3 pl-2 md:pr-4 md:pl-3 lg:pr-3 lg:pl-3 duration-200 ease-out group-hover:translate-x-12 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </span>

            {/* Left Arrow Icon (Hidden Until Hover)  */}
            <span className="absolute left-0 pr-3 pl-2 md:pr-4 md:pl-3 lg:pr-3 lg:pl-3 -translate-x-12 group-hover:translate-x-0 ease-out duration-200 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-text w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
            </span>

            {/* Text inside Button  */}
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out z-10">
              View Resume
            </span>
          </a>
        </div>

        {/* Image */}
        <div className="showcase-image bg-amber-100 rounded-xl w-full max-w-md md:max-w-xl mx-auto hover:scale-95 hover:shadow-sm transition duration-200 ">
          <img
            className="w-full h-auto object-contain rounded-xl"
            src={profile}
            alt="there is supposed to be a pic"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
