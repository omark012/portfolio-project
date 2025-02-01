import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import typescript from "../images/typescript.svg";
import react from "../images/react.png";
import bootstrap from "../images/bootstrap.png";
import github from "../images/github.png";
import tailwind from "../images/tailwind.png";
import mongo from "../images/mongo.png";
import redux from "../images/redux.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML5",
      color: "#f97316",
    },
    {
      id: 2,
      src: css,
      title: "CSS3",
      color: "#3b82f6",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      color: "#eab308",
    },
    {
      id: 4,
      src: typescript,
      title: "TypeScript",
      color: "#2D79C7",
    },
    {
      id: 5,
      src: react,
      title: "React.js",
      color: "#61c5fb",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      color: "#a855f7",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      color: "#63B4D0",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      color: "#9333ea",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      color: "#6b7280",
    },
    {
      id: 10,
      src: mongo,
      title: "Mongo DB",
      color: "#69A34A",
    },
  ];

  return (
    <section
      id="skills"
      className="mx-6 p-5 sm:p-10 lg:p-0 mt-20 md:mt-40 scroll-mt-[6.625rem]"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 font-semibold text-center">
          <span className="text-neutral-700 dark:text-neutral-300">Tech</span>{" "}
          <span className="text-gray-900 dark:text-gray-50">Skills</span>
        </h1>

        <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <p className="w-full text-center text-neutral-500 italic mb-10 text-lg md:text-xl">
          Elevating Projects with Cutting-Edge Technical Skills{" "}
        </p>

        <div className="Skill-list flex flex-wrap items-center justify-center gap-10 lg:gap-12 text-lg">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className="card w-[100px] md:w-[130px] flex flex-col justify-center items-center rounded-lg cursor-pointer transition-all duration-200 hover:scale-110"
              style={{
                boxShadow: `0 4px 6px -1px ${tech.color}, 0 2px 4px -2px ${tech.color}`,
                color: `${tech.color}`,
              }}
            >
              <img className="w-[50%]" src={tech.src} alt={tech.title} />
              <p className="text-base md:text-lg">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
