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
          <span className="text-gray-900 dark:text-gray-50">Me</span>{" "}
        </h1>
        <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <p className="w-full text-center text-neutral-500 italic mb-10 text-lg md:text-xl">
          Passionate in Designing Clean Code and Seamless User Experiences
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="showcase-image bg-amber-100 dark:bg-blue-950 rounded-xl w-full max-w-md md:max-w-xl mx-auto hover:scale-95 hover:shadow-sm transition duration-200 ">
            <img
              className="object-contain "
              src={developer}
              alt="there is supposed to be a pic"
            />
          </div>

          <div className="about-text text-base md:text-lg text-justify text-neutral-600 dark:text-neutral-300">
            <p>
              {" "}
              Hello! I'm Omar Khan, a <strong>Frontend Developer</strong> and an
              aspiring Full-Stack (MERN) Developer. I specialize in modern web
              technologies like <strong>React.js</strong> and{" "}
              <strong>Next.js</strong> , building <strong>scalable</strong>{" "}
              components that transform designs into interactive, user-centric
              applications.
            </p>
            <br />
            <p>
              I like to code things for web, and enjoy bringing ideas to life in
              the browser. I'm always eager to <strong>collaborate</strong> with
              teams, <strong>learn</strong> new frontend technologies, and push
              the boundaries of what's possible.
            </p>
            <br />
            <p>
              Learning new things always excites me, and I'm constantly seeking{" "}
              <strong>new challenges</strong> to expand my knowledge and skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
