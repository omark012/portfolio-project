import React from "react";
import developer from "../images/developer.gif";

const About = () => {
  return (
    <section className="p-10 mx-6 mt-20 md:p-0 md:mt-40" id="about">
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
          <div className="w-full bg-amber-200">
            <img src={developer} alt="Animated GIF of a frontend developer" />
          </div>
          <div className="about-text text-[19px] text-justify">
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
