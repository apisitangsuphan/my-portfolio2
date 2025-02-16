import React from "react";
import Image from "next/image";
function Skills() {
  return (
    <div id="skills" className="w-full h-screen skill text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full items-center">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600">
            Skills
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod fuga
            fugiat nobis. Quas quidem deleniti inventore consectetur,
            necessitatibus eligendi quo reiciendis culpa vel provident ducimus,
            iste unde est, quod libero.
          </p>
        </div>
        <div className="w-full text-center py-8 grid grid-cols-2 sm:grid-cols-4 ">
          <div className="hover:scale-110 duration-500">
            <Image
              src="/assets/HTML.png"
              alt="HTML logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">HTML</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <Image
              src="/assets/CSS.png"
              alt="CSS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">CSS</p>
          </div>

          <div className="hover:scale-110 duration-500">
            <Image
              src="/assets/JAVASCRIPT.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">JS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image
              src="/assets/JAVASCRIPT.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">JS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image
              src="/assets/JAVASCRIPT.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">JS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
