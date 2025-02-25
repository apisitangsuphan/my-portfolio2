import React from "react";
import Image from "next/image";
function Skills() {
  return (
    <div id="skills" className="w-full h-full min-[629px]:h-screen skill text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full items-center px-7">
        <div className="mt-20">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-teal-600">
            Skills
          </p>
          <p className="py-4 text-lg sm:text-xl">
          I can develop web applications based on assigned designs and seamlessly connect to the backend to retrieve and display necessary data through APIs. I specialize in React, Next.js, and TypeScript, ensuring scalable and maintainable code. Additionally, I optimize performance, follow best practices in frontend development, and effectively collaborate with teams to deliver high-quality products
          </p>
        </div>
        <div className="w-full text-center py-8 grid grid-cols-1 min-[280px]:grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/HTML.png"
              alt="HTML logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">HTML</p>
          </div>

          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/CSS.png"
              alt="CSS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">CSS</p>
          </div>

          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/JAVASCRIPT.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">Java Script</p>
          </div>

          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/TS.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">TYpe Script</p>
          </div>

          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/react.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">React</p>
          </div>

          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/nextjs.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20 bg-white rounded-full"
            />
            <p className="my-4">Next js</p>
          </div>

          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/tailwindcss.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20 "
            />
            <p className="mt-12 mb-4">Tailwind</p>
          </div>

          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/mui.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">MUI</p>
          </div>

          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/netlify.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">Netlify</p>
          </div>

          <div className="hover:scale-110 hover:font-extrabold duration-500 my-3 sm:my-6">
            <Image
              src="/assets/axios.png"
              alt="JS logo"
              width={200}
              height={200}
              className="mx-auto w-20"
            />
            <p className="my-4">Axios</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
