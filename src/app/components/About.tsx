import React from "react";

function About() {
  return (
    <div id="about" className="about w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right pb-8 pl-4 pt-10">
            <p className="text-4xl font-bold inline border-b-4 border-teal-600">
              About
            </p>
          </div>
        
          <div className=""></div>
        </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold pl-4">
              <p>Apisit Angsuphan</p>
            </div><div className="max-w-[1000px] w-full px-4">
            <p className="text-lg sm:text-left mb-10">
              I am Apisit Angsuphan, a versatile and dedicated professional with
              a background in both technology and education. I hold a Bachelor
              of Science in Physics from Chulalongkorn University, where I did
              my senior project on developing a Speech Consistency Test for
              children with Cerebral Palsy and Dysarthria using tools like
              Matlab and Python. With experience across various roles, including
              Front End Development (about 1 year, both full-time and
              freelance), Marketing Support, and Education,<br/> I bring a unique
              blend of technical expertise and communication skills, while
              continuing my passion for developing user-friendly web
              applications and teaching complex subjects like physics and
              mathematics.
            </p>
          </div>
          </div>
          
        </div>
      </div>
    
  );
}

export default About;
