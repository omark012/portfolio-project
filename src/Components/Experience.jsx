import React from "react";
import { PiSuitcaseBold } from "react-icons/pi";

const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-6 p-5 sm:p-10 lg:p-0 mt-20 scroll-mt-[6.625rem]"
    >
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 font-semibold text-center">
            <span className="text-neutral-700 dark:text-neutral-300">Work</span>{" "}
            <span className="text-gray-900 dark:text-gray-50">Experience</span>
          </h1>
          <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

          <p
            className="w-full text-center text-neutral-500 italic mb-10 
          text-lg md:text-xl"
          >
            What I’ve Accomplished So Far{" "}
          </p>
        </div>

        <div className="card group cursor-pointer p-3 md:p-10 max-w-4xl mx-auto  bg-amber-100 dark:bg-blue-950 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-b-8 border-amber-300  dark:border-blue-700">
          <h3 className="job-title flex items-end gap-3 text-2xl md:text-4xl font-semibold mb-2 sm:group-hover:tracking-widest transition-all duration-300 text-gray-900 dark:text-gray-50">
            <span
              className="rounded group-hover:p-1 group-hover:bg-amber-300 dark:group-hover:bg-blue-700  
            transition-all duration-300"
            >
              <PiSuitcaseBold />
            </span>
            Frontend Developer
          </h3>
          <p className="job-location italic text-neutral-500 dark:text-neutral-400">
            Trivialworks , India
          </p>

          <ul className="job-scope mt-3 list-disc pl-5 text-base sm:text-lg space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="scope-item">
              Developed responsive web applications with React.js, leveraging
              reusable components and custom hooks to improve maintainability
              and reduce code duplication.
            </li>
            <li className="scope-item">
              Collaborated with cross-functional teams including designers,
              product managers, and other developers to create high-quality
              products and reduce project timelines by 25%.
            </li>
            <li className="scope-item">
              Implemented robust form validation with React Hook Form to ensure
              data integrity
            </li>
            <li className="scope-item">
              Developed pixel-perfect, responsive user interfaces with
              mobile-first principles using TailwindCSS and Material-UI,
              achieving daily traffic of 1,000–2,000 users.
            </li>

            <li className="scope-item">
              Refactored and modernized legacy codebases by replacing old
              components with functional components, hooks, and optimized logic.
            </li>
            {/* <li className="scope-item">
        Contributed in the development of the sell your property
        module.Built the UI for it and integrated it with the firebase
        APIs.
      </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
