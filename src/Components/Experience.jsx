import React from "react";
import { PiSuitcaseBold } from "react-icons/pi";

const Experience = () => {
  return (
    <section className="mx-6 mt-20 p-5 sm:p-10 md:p-0 " id="experience">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 font-semibold text-center">
            <span>Work</span> <span>Experience</span>
          </h1>
          <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

          <p className="w-full text-center text-neutral-500 italic mb-10 text-lg md:text-xl">
            What I’ve Accomplished So Far{" "}
          </p>
        </div>

        <div className="card group cursor-pointer p-3 md:p-10 max-w-4xl mx-auto bg-[#9df1df] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-b-8 border-amber-200">
          <h3 className="job-title flex items-end gap-3 text-2xl md:text-4xl font-semibold mb-2 group-hover:tracking-widest transition-all duration-300">
            <PiSuitcaseBold />
            Frontend Developer
          </h3>
          <p className="job-location italic text-neutral-500">
            Trivialworks , India
          </p>

          <ul className="job-scope mt-3 list-disc pl-5 text-lg space-y-3">
            <li className="scope-item">
              Developing and maintaining web applications using React.js and
              other related technologies.
            </li>
            <li className="scope-item">
              Collaborating with cross-functional teams including designers,
              product managers, and other developers to create high-quality
              products.
            </li>
            <li className="scope-item">
              Contributed in the development of the sell your property
              module.Built the UI for it and integrated it with the firebase
              APIs.
            </li>
            <li className="scope-item">
              Implementing responsive design and ensuring cross-browser
              compatibility.
            </li>
            <li className="scope-item">
              Developed pixel-perfect responsive web applications achieving
              daily traffic of 1000-2000 users.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
