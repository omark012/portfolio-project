import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
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
      title: "HTML",
      color: "#f97316",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      color: "#3b82f6",
    },
    {
      id: 3,
      src: javascript,
      title: "javaScript",
      color: "#eab308",
    },
    {
      id: 4,
      src: react,
      title: "React",
      color: "#2563eb",
    },
    {
      id: 5,
      src: bootstrap,
      title: "Bootstrap",
      color: "#a855f7",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      color: "#63B4D0",
    },
    {
      id: 7,
      src: redux,
      title: "Redux",
      color: "#9333ea",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      color: "#6b7280",
    },
    {
      id: 9,
      src: mongo,
      title: "Mongo DB",
      color: "#69A34A",
    },
  ];

  return (
    <section className="p-10 mx-6 md:p-0 mt-50" id="skills">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 font-semibold text-center">
          <span className="text-neutral-700 dark:text-neutral-300">Tech</span>{" "}
          <span>Skills</span>
        </h1>
        <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-red-500 via-yellow-500 via-green-500 via-blue-500 to-transparent" />
        <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-pink-200 via-purple-200 via-blue-200 via-teal-200 to-transparent" />
        <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-orange-400 via-red-500 to-transparent" />

        <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        <p className="w-full text-center text-neutral-500 italic mb-10 text-lg md:text-xl">
          Elevating Projects with Cutting-Edge Technical Skills{" "}
        </p>

        <div className="Skill-list flex flex-wrap items-center justify-center gap-10 text-lg">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className="w-[100px] md:w-[130px] flex flex-col justify-center items-center rounded-lg cursor-pointer transition-all duration-300 ease-in hover:scale-110"
              style={{
                boxShadow: `0 4px 6px -1px ${tech.color}, 0 2px 4px -2px ${tech.color}`,
                color: `${tech.color}`,
              }}
            >
              <img className="w-[50%]" src={tech.src} alt={tech.title} />
              <p>{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
