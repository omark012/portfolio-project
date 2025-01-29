import React from "react";
import cloud from "../images/cloud.png";
import weather from "../images/weather.png";
import quizzical from "../images/quizzical.png";
import slide from "../images/slide.png";
import { PiArrowUpRightBold } from "react-icons/pi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      img: weather,
      title: "Weather App",
      description:
        "An API-based React weather application built with Vite and Tailwind CSS, providing real-time weather information and additional features.",
      link: "https://skyways.netlify.app/",
    },
    {
      id: 2,
      img: cloud,
      title: "Cloud Hosting Website UI",
      description:
        "A front-end interface for a cloud hosting platform using React.js and React Router for smooth navigation and animated interactions.",
      link: "https://omark012.github.io/cloudhosting-react-website/",
    },
    {
      id: 3,
      img: slide,
      title: "Slide - Presentation React Website",
      description:
        "A responsive presentation website developed using React.js, Vite, and Tailwind CSS, ensuring an engaging user experience across devices.",
      link: "https://react-presentations.netlify.app",
    },
    {
      id: 4,
      img: quizzical,
      title: "Quizzical - Quiz React App",
      description:
        "Developed a responsive quiz application using React.js , featuring interactive quizzes with dynamic content rendering and real-timefeedback to deliver an engaging user experience. ",
      link: "https://omark012.github.io/quiz-react-app/ ",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className=" p-10 md:p-0 mx-6 mt-40" id="portfolio">
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 font-semibold text-center">
            <span className="text-neutral-700 dark:text-neutral-300">Key</span>{" "}
            <span>Projects</span>
          </h1>
          <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          <p className="w-full text-center text-neutral-500 italic mb-10 text-lg md:text-xl">
            Showcasing Projects Built on Innovative Solutions and Intuitive
            Design{" "}
          </p>
        </div>
        {/* Portfolio container with embla carousel */}
        <div className="embla">
          <div
            className="embla__viewport border border-gray-500 rounded-lg max-w-6xl mx-auto mt-10 mb-5"
            ref={emblaRef}
          >
            <div className="embla__container">
              {/* item */}
              {portfolios.map((item) => (
                <div
                  key={item.id}
                  className="embla__slide portfolio-card p-2 grid md:grid-cols-2 gap-6 items-center justify-center"
                >
                  {/* Grid 1 */}
                  <div className="portfolio-img-wrap w-full  rounded-lg overflow-hidden">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className=""
                        src={item.img}
                        alt="there should be a pic"
                      />
                    </a>
                  </div>
                  {/* Grid 2 */}
                  <div className="portfolio-data">
                    <h3 className="portfolio-title text-2xl capitalize font-bold mb-2 ">
                      {item.title}
                    </h3>
                    <p className="portfolio-description text-justify mb-4">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-btn flex items-center justify-between text-black bg-transparent rounded-lg border-3 border-[#0dcfda] py-2 px-4 text-lg transition-all ease-in duration-300 hover:text-white hover:bg-[#0dcfda]"
                    >
                      <p>Live Demo</p>
                      <PiArrowUpRightBold />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next and prev btn */}
          <div className="flex items-start justify-start gap-2">
            <button
              className="embla__prev flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full shadow-lg 
              hover:bg-gray-700 focus:outline-none transition duration-200 ease-in-out  hover:scale-105 cursor-pointer"
              onClick={scrollPrev}
            >
              <FaChevronLeft />
            </button>
            <button
              className="embla__next flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow-lg 
              hover:bg-red-400 focus:outline-none transition duration-200 ease-in-out  hover:scale-105 cursor-pointer"
              onClick={scrollNext}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
