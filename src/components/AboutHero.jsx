import React from "react";
import DetailImage from "./DetailImage";

const AboutHero = (props) => {

  const data = props.props;
  return (
    <>
      <div className="block lg:flex lg:justify-between m-auto w-[90%] items-center min-h-screen" id="About">
        <div className="w-[90%] m-auto">
          <div>
            <span className="text-[23px] text-[#16988c] font-medium">OUR SERVICES</span>
          </div>
          <div>
            <h3 className="text-5xl font-medium mb-5 mt-3">
              WHAT WE <span className="text-[#09c8b6]">DO</span>?
            </h3>
            <div className="h-[0.7vh] w-[4vw] bg-[#3b837d] rounded-2xl mt-1 mb-1"></div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eius aperiam atque sit animi adipisci, similique rem, labore esse
              omnis velit. Corrupti, laborum exercitationem itaque cumque ullam
              numquam inventore eius? Commodi, nam quia molestias iure tempora
              alias a quod, ad doloribus illo modi tempore aperiam? Porro et
              minus officia reiciendis. Placeat amet earum, maxime
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eius aperiam atque sit animi adipisci, similique rem, labore esse
              omnis velit. Corrupti, laborum exercitationem itaque cumque ullam
              numquam inventore eius? Commodi,
            </p>
            <div>
              <button className="pt-1 pb-1 pr-3 pl-3 bg-[#10c6be] mt-4 font-medium text-[16px] rounded-lg">VIEW ALL</button>
            </div>
          </div>
        </div>
        <div className=" block md:flex flex-wrap gap-3 md:gap-0 md:min-w-125 justify-center">
          {
            data.map((e, idx) => {
              
              return <DetailImage key={idx} img={e.img} para={e.para} design={e.design} heading={e.heading} />
             })
          }
        </div>
      </div>
    </>
  );
};

export default AboutHero;
