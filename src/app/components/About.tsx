import React from "react";

function About() {
  return (
    <div id="about" className="about w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
             <div className="sm:text-right pb-8 pl-4">
                 <p className="text-4xl font-bold inline border-b-4 border-sky-300">
                     About
                 </p>
            </div>
            <div className=""></div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Apisit Angsuphan </p>
            </div>
            
            <div className="">
              <p>
                2Lorem ipsum dolor sit amet consectetur omnis quae laudantium
                quisquam. Aperiam ut eos voluptates tempora deleniti eius
                inventore laboriosam, quibusdam, consequuntur cupiditate amet
                expedita officiis cumque?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
