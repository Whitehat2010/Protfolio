import React from "react";

const Projects = (props) => {
  return (
    <div className="min-h-95 w-75 border p-2 rounded-xl pb-4">
      <div>
        <img src={props.img} alt="" className="w-full brightness-75 h-52.5" />
      </div>
      <div className="text-center">
        <h6 className="text-3xl font-medium mt-2 mb-3 ">{props.tittle}</h6>
      </div>
      <div className="text-center mb-7.5">
        <p className="text-[10px]">{props.para}</p>
      </div>
      <div className="text-center ">
        <a
          href={props.code}
          className="p-2 bg-[#11c3c6] rounded-md mr-2"
          target="_blank"
        >
          View Code
        </a>
        <a
          href={props.demo}
          className="p-2 bg-[#989a9e] rounded-md"
          target="_blank"
        >
          View Demo
        </a>
      </div>
    </div>
  );
};

export default Projects;
