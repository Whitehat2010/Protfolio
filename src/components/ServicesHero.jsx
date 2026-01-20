import React from "react";
import Projects from "./Projects";

const ServicesHero = (props) => {
  let a = props.data;

  return (
    <div className="min-h-screen" id="Service">
      <div className="text-center m-4" >
        <h2 className="font-medium text-3xl text-[#44c2af]">OUR PROJECTS</h2>
      </div>
      <div className="flex justify-evenly flex-wrap gap-9">
        {a.map((e, idx) => {
          return (
            <Projects
              key={idx}
              tittle={e.heading}
              para={e.para}
              img={e.img}
              code={e.code}
              demo={e.demo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicesHero;
