import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <section className="h-auto p-10 md:p-0 mx-6 mt-40" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 items-center justify-center">
          {/* G1 */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 font-semibold text-center">
              <span>Let's</span> <span>Connect</span>
            </h1>
            <hr className="my-5 border-0 w-[50%] mx-auto h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            <p className="w-full text-center text-neutral-500 italic mb-10 text-lg md:text-xl">
              Have a question or an idea? Reach out—let's turn it into something
              amazing together!{" "}
            </p>
          </div>

          {/* G2 */}
          <form className="w-full bg-white p-4  border-2 border-neutral-200 rounded-xl shadow-md sm:p-6 md:p-8 ">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                className="w-[100%] border-2 px-6 py-2 text-md rounded outline-none"
                placeholder="Enter your name"
                required
              />
              <input
                type="email"
                className="w-full border-2 px-6 py-2 text-md rounded outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <textarea
              rows={8}
              className="w-full border-2 mt-6 px-6 py-2 text-md rounded outline-none"
              placeholder="Enter your message"
            ></textarea>
            <hr className="my-5 border-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neutral-300" />
            <button className="flex items-center justify-center cursor-pointer gap-2 w-full bg-black text-white rounded px-4 py-2 ">
              Submit <IoIosArrowForward color="white" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
