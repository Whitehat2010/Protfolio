import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="h-80 bg-[#000000] mt-5">
      <div className="p-7 flex justify-between ">
        <div>
          <Logo />
          <button
            className="p-1 mt-5 bg-[#11c3c6] rounded-xs"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            Back To Top{" "}
            <span>
              <i class="fa-solid fa-up-long"></i>
            </span>
          </button>
        </div>
        <div>
          <ul className="list-disc">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://github.com/Whitehat2010" target="_blank">
                <span className="text-2xl">
                  <i className="fa-brands fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.blogger.com/blog/posts/7816769090240648139?bpli=1&pli=1"
                target="_blank"
              >
                <span className="text-2xl">
                  <i class="fa-brands fa-blogger"></i>
                </span>
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <span className="font-bold text-2xl">© reserve by Whitehat14 </span>
      </div>
    </div>
  );
};

export default Footer;
