import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-[#0a192f] text-gray-300 py-10 md:py-24"
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 px-4 gap-8">
          <div className="pt-2 pb-8 sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-[#28bdec]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-2 px-4">
          <div className="mr-8 text-2xl font-bold sm:text-right">
            <p>Hello! I'm Diego, nice to meet you.</p>
          </div>
          <div>
            <p>
              I am a passionate warehouse specialist with over 15 years of
              experience, specializing in the management of various warehouse
              management programs, such as workflow in Excel, PDAs (personal
              digital assistants), KPIs (key performance indicators), and more.
            </p>
            <br />
            <p>
              I enjoy optimizing logistics operations and ensuring efficiency at
              every stage of the process. My experience includes implementing
              and managing inventory tracking systems, coordinating shipments,
              and handling data to improve decision-making in the warehouse.
            </p>
            <br />
            <p>
              In addition, I have skills in handling complex workflows, ensuring
              accuracy in inventory management and continuous process
              improvement. My ability to work with various technologies and my
              proactive approach make me a valuable member of any warehouse
              team.
            </p>
            <br />
            <p className="text-1xl sm:text-1xl font-bold text-[#ccd6fd]">
              What opportunities could arise with a passionate and proactive
              warehouse assistant, with a solid 10-year experience and the
              ability to optimize any aspect of warehouse management?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
