import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Hero() {
  return <div id='hero' className="w-[100%] h-screen banner">
    <div className="max-w-[1000px] mx-auto h-full px-8 flex flex-col justify-center text-gray-100">
      <p className="text-[#ececec]">Hi, My name is</p>
      <h1 className="text-4xl sm:text-6xl font-bold">
        Apisit  Angsuphan
      </h1>
      <h2 className="text-4xl">
        I'm a Front End Developer.
      </h2>
      <p className="text-[#ececec] pt-4 max-w-[700px]">
      Having worked in tutoring, online sales, compliance inspector, organizational coordination, and web development, 
      </p>
      <p className="text-[#ececec] py-3 max-w-[700px]">
      I discovered that Front-End Development is my true passion.
      </p>
      <div>
        <button className="bg-teal-600 text-white rounded-full border-2 px-6 py-3 my-2 flex justify-between items-center hover:bg-teal-500 hover:border-teal-600">View Work <span className="duration-300"><HiArrowNarrowRight className="ml-3"/></span> </button>
      </div>
    </div>
  </div>;
}

export default Hero;
