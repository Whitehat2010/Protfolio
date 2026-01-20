import React from "react";
import ServicesHero from "../components/ServicesHero";

const Services = () => {
  const ProjectData = [
    {
      img: "/src/assets/setups/PcSetup1.jpg",
      heading: "Netflix Project",
      para: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique facilis incidunt tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit obcaecati molestiae, earum repudianda.",
      code: "https://github.com/Whitehat2010/Netflix-Clone",
      demo: "https://whitehat2010.github.io/Netflix-Clone/",
    },
    {
      img: "/src/assets/setups/PcSetup2.jpg",
      heading: "Institution Project",
      para: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique facilis incidunt tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit obcaecati molestiae, earum repudianda.",
      code: "https://github.com/Whitehat2010/Study-Zone-Plus-Clone",
      demo: "https://whitehat2010.github.io/Study-Zone-Plus-Clone/",
    },
    {
      img: "/src/assets/setups/PcSetup3.jpg",
      heading: "Tagore Project",
      para: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique facilis incidunt tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit obcaecati molestiae, earum repudianda.",
      code: "https://github.com/Whitehat2010/Tagore-My-Opinion",
      demo: "https://whitehat2010.github.io/Tagore-My-Opinion/",
    },
  ];
  return (
    <div className="min-h-screen w-[90%] m-auto flex items-center justify-center">
      <ServicesHero data={ProjectData} />
    </div>
  );
};

export default Services;
