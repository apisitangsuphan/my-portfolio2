import React from "react";
import Link from "next/link";
import Image from "next/image";
const Work = () => {
  const projects = [
    {
      title: "Madfam Guild",
      description:
        "My first freelance project, built using HTML, CSS, and Bootstrap.   (3 Years ago)",
      image: "/assets/works/work1madfam.png",
      link: "https://apisitangsuphan.github.io/Madfam0001/",
    },
    {
      title: "Gym",
      description:
        "A project showcasing Front End Development skills and API fetching.",
      image:
        "/assets/works/work2.webp",
      link: "https://singlepage-next-framer-motion-tailwin.netlify.app/",
    },
    {
      title: "Attractions",
      description:
        "A webpage displaying world attractions, built with MUI, Next.js, and API fetching.",
      image:
        "/assets/works/work3.avif",
      link: "https://fetch-api-mui-nextjs-ts.netlify.app/",
    },
    {
      title: "Pokemon Search",
      description:
        "A Pokémon search tool by name, developed using Axios and the PokeAPI.",
      image:
      "/assets/works/work4.jpg",
      link: "https://search-pokemon-by-axios.netlify.app/",
    },
    /* {
      title: "Project C",
      description: "This is a brief description of Project C.",
      image: "https://images.unsplash.com/photo-1482406611936-43ea538e39d4?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Project C",
      description: "This is a brief description of Project C.",
      image: "https://images.unsplash.com/photo-1482406611936-43ea538e39d4?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    }, */
  ];
  /* min-[629px]:h-screen
   */ return (
    <div
      id="work"
      className="w-full h-full work text-gray-300 items-center flex justify-center"
    >
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col  justify-center w-full h-full my-20">
        <div className="">
          <p className="sm:text-4xl font-bold inline border-b-4 border-teal-600">
            My Mini Projects
          </p>
          <p className="py-4 text-lg sm:text-xl">
            Please take a look at my recent projects. (Updated daily)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mt-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 mx-2 sm:mx-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 cover"
                
                width={800}
                height={800}
              />
              <div className="py-2 sm:py-4 px-8 sm:px-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-1">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-block mt-2 text-blue-400 hover:text-blue-300"
                  target="_blank"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
