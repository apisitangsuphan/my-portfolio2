import React from "react";
import Link from "next/link";
const WorkSection = () => {
  const projects = [
    {
      title: "Madfam Guild",
      description: "My first freelance project, built using HTML, CSS, and Bootstrap.",
      image: "/assets/works/work1madfam.png",
      link: "https://apisitangsuphan.github.io/Madfam0001/",
    },
    {
      title: "Gym",
      description: "A project showcasing Front End Development skills and API fetching.",
      image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/67b3109a203cef000844a0e5/screenshot_2025-02-17-10-35-12-0000.webp&fit=cover&h=500&q=40&w=800",
      link: "https://singlepage-next-framer-motion-tailwin.netlify.app/",
    },
    {
      title: "Attractions",
      description: "A webpage displaying world attractions, built with MUI, Next.js, and API fetching.",
      image: "https://images.unsplash.com/photo-1566371486490-560ded23b5e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://fetch-api-mui-nextjs-ts.netlify.app/",
    },
    {
      title: "Pokemon Search",
      description: "A Pokémon search tool by name, developed using Axios and the PokeAPI.",
      image: "https://th.bing.com/th/id/R.f032534ab7ce5fb787fa8b92d8297d9f?rik=%2b1m1L1BVrn4ieg&riu=http%3a%2f%2fngn-mag.com%2fwp-content%2fuploads%2f2015%2f11%2ffond-ecran-pokemon-135.jpg&ehk=TWIfbIX0rnfVkuBfUUMagmbhpAs%2bloLfkzT3gaP5Hc4%3d&risl=&pid=ImgRaw&r=0",
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
 */  return (
    <div id="work" className="w-full h-full work text-gray-300 items-center flex justify-center">
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full my-20">
      <div className="">
          <p className="sm:text-4xl font-bold inline border-b-4 border-teal-600">
            My Mini Projects
          </p>
          <p className="py-4 text-lg sm:text-xl">
          Have a look at some of my recent projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 mx-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <Link 
                  href={project.link}
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300"
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

export default WorkSection;
