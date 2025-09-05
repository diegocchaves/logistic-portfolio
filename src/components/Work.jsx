import React from "react";
import Barca from "../assets/images/barca.png";
import Ametller from "../assets/images/ametller.png";
import Vernon from "../assets/images/vernon.png";
import Temple from "../assets/images/temple.png";
import Interaction from "../assets/images/interaction.png";
import FreshCo from "../assets/images/freshco.svg";

const Work = () => {
  const companies = [
    {
      image: Barca,
      name: "Barça Licensing & Merchandising",
      link: "https://www.linkedin.com/company/fc-barcelona/",
    },
    {
      image: Ametller,
      name: "Ametller Origen",
      link: "https://www.linkedin.com/company/grup-ametller-origen/",
    },
    {
      image: Vernon,
      name: "Vernon Stores Ltd",
      link: "https://www.linkedin.com/company/vernon-catering/",
    },
    {
      image: Temple,
      name: "Temple Recruitment - MK Human Resources Limited",
      link: "https://www.linkedin.com/company/templerecruitment/",
    },
    {
      image: Interaction,
      name: "Interaction Logística e Comércio Ltda",
      link: "https://www.econodata.com.br/consulta-empresa/04218292000194-INTERACTION-LOGISTICA-E-COMERCIO-INTERNACIONAL-LTDA",
    },
    {
      image: FreshCo,
      name: "FreshCo",
      link: "https://www.freshco.com",
    },
  ];

  return (
    <div
      name="work"
      className="w-full bg-[#0a192f] text-gray-300 py-10 md:py-24"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#28bdec]">
            Work
          </p>
          <p className="py-4">
            // Take a look at some of the companies I have worked for
          </p>
        </div>
        {/* Container */}
        <div className="grid items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
          {/* Grid Item */}
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-[#081d3d] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-95 duration-300 relative"
            >
              <img
                src={company.image}
                alt={company.name}
                className={`p-4 transition-opacity duration-300 ${
                  company.name === "FreshCo" ? "w-[10rem]" : "w-80"
                } group-hover:opacity-0`}
              />
              {/* Hover Effects */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-xl font-bold tracking-wider text-center text-white">
                  {company.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={company.link} target="_blank" rel="noreferrer">
                    <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                      More Info
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

{
  /* Grid Item */
}
<div
  style={{
    backgroundImage: `url(${Interaction})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
>
  {/* Hover Effects */}
  <div className="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
    <span className="font-bold tracking-wider text-center text-black text-1xl">
      Interaction Logística e Comércio Ltda
    </span>
    <div className="pt-8 text-center">
      <a href="https://www.econodata.com.br/consulta-empresa/04218292000194-INTERACTION-LOGISTICA-E-COMERCIO-INTERNACIONAL-LTDA">
        <button className="px-4 py-3 m-2 font-bold text-center text-gray-700 bg-white rounded-lg text-md">
          Take a look!
        </button>
      </a>
    </div>
  </div>
</div>;
