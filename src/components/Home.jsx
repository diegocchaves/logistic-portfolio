import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Photo from "../assets/images/foto-gradient.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(10,25,47, -20.95), rgba(10,25,47, 20.05)), url(${Photo})`,
        backgroundBlendMode: "color-dodge",
        backgroundSize: "inherit",
        backgroundPosition: "inherit",
        backgroundRepeat: "no-repeat",
      }}
      name="home"
      className="w-full h-[50rem] bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto  pt-[70px] px-8 flex flex-col justify-center h-full">
        <p className="text-[#28bdec]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6fd]">
          Diego Carvalho
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Warehouse <br />
          Assistant.
        </h2>
        <p className="text-gray-300 py-4 max-w-[700px]">
          With solid experience as a warehouse assistant, I have played a key
          role in the efficient management of logistics operations. My focus is
          on the effective reception, classification, and distribution of
          products, ensuring a smooth and organized workflow. I am skilled in
          the safe handling of goods and in using inventory systems to maintain
          accurate records. Teamwork is fundamental to me, and I enjoy
          collaborating with colleagues to ensure a productive and orderly
          warehouse environment. My commitment is to contribute to the daily
          operational success of the warehouse by applying my skills and
          experience to efficiently complete assigned tasks and maintain high
          quality standards.
        </p>
        <div className="mt-3">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-1 flex items-center hover:bg-[#28bdec] hover:border-[#28bdec]">
              See work
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
