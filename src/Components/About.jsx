import React from "react";
import developer from "../images/developer.gif";

const About = () => {
  return (
    <section
      id="about"
      className="mx-6 p-5 sm:p-10 lg:p-0 mt-20 md:mt-40 scroll-mt-[6.625rem]"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 font-semibold text-center">
          {" "}
          <span className="text-neutral-700 dark:text-neutral-300">About </span>
          <span>Me</span>{" "}
        </h1>
        <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <p className="w-full text-center text-neutral-500 italic mb-10 text-lg md:text-xl">
          Passionate in Designing Clean Code and Seamless User Experiences
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="showcase-image bg-amber-100 rounded-xl w-full max-w-md md:max-w-xl mx-auto hover:scale-95 hover:shadow-sm transition duration-200 ">
            <img
              className="object-contain "
              src={developer}
              alt="there is supposed to be a pic"
            />
          </div>
          <div className="about-text text-base md:text-lg text-justify">
            <p>
              {" "}
              Hello! My name is Omar Khan, a frontend developer and an aspiring
              full-stack (MERN) developer.
            </p>
            <br />
            <p>
              I like to code things for web, and enjoy bringing ideas to life in
              the browser. I'm always open to adapt to work with team and work
              on new frontend skills and technology.
            </p>
            <br />
            <p>
              Learning new things always excite me, and I am constantly seeking
              new challenges to expand my knowledge and skills
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
