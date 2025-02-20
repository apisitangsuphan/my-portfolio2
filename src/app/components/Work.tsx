import React from "react";
import Link from "next/link";

function Work() {
  return (
    <div
      id="work"
      className="w-fullh-full min-[629px]:h-screen work text-gray-300"
    >
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8  mt-5 sm:mt-0">
          <div className="">
            <p className="text-4xl sm:text-5xl font-bold inline border-b-4 text-white border-teal-600">
            Work
          </p>
          </div>
          
          <p className="py-6 text-lg md:text-xl text-white">
            Please Check out some of my recent work
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            className="shadow-lg shadow-[#0d0e0f] group hover:scale-110 duration-600 container rounded-full justify-center items-center mx-auto content-div content-div:hover"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="font-bold text-white tracking-wider uppercase">
                Lorem ipsum
              </span>
            </div>
            <div className="pt-6 text-center ">
              <Link
                href="https://singlepage-next-framer-motion-tailwin.netlify.app/"
                target="_blank"
              >
                <button className="text-center text-black hover:scale-110 duration-500 opacity-70 rounded-full px-6 py-3 m-2">
                  Wireframe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
