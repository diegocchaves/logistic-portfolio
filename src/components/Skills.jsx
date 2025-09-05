import React from "react";
import PDAIcon from "../assets/images/pda.png";
import KPIIcon from "../assets/images/kpi.png";
import ExcelIcon from "../assets/images/office365.png";
import SageIcon from "../assets/images/sage.png";
import AlterdataIcon from "../assets/images/alterdata.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: "PDA",
      image: PDAIcon,
    },
    {
      id: 2,
      name: "KPI",
      image: KPIIcon,
    },
    {
      id: 3,
      name: "Office 365",
      image: ExcelIcon,
    },
    {
      id: 4,
      name: "Sage",
      image: SageIcon,
    },
    {
      id: 5,
      name: "Alterdata",
      image: AlterdataIcon,
    },
  ];
  return (
    <div name="skills" className=" bg-[#0a192f]  text-gray-300 py-10 md:py-24">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#28bdec]">
            Skills
          </p>
          <p className="py-4">// These are the tools I have worked with</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-3">
          {skills.map(({ id, name, image }) => (
            <div
              key={id}
              className="shadow-md shadow-[#040c16] bg-[#081d3d] flex flex-col justify-center items-center p-4 rounded-lg"
            >
              <img className="w-44" src={image} alt={name} />
              <p className="p-2">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
