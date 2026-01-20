import React from "react";

const DetailImage = (props) => {
  let design = props.design;
  return (
    <div
      className={`min-h-70 w-[80%] m-auto mb-10 md:w-50 p-2 bg-linear-to-t from-[#0c2d2b] from-0% to-[#ffffff00] to-50% rounded-md flex flex-col justify-center ${
        design
          ? "md:shadow-[0_0_25px_rgba(0,255,255,0.25),0_0_50px_rgba(0,255,255,0.15)]"
          : ""
      }`}
    >
      <div>
        <img src={props.img} alt="df" className="h-full w-full" />
      </div>
      <div className="text-center">
        <h5 className="text-2xl font-bold ">{props.heading}</h5>
      </div>
      <div className="text-center">
        <p className="text-[12px]">{props.para}</p>
      </div>
    </div>
  );
};

export default DetailImage;
