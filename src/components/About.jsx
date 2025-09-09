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
              I am a warehouse professional with over 15 years of experience in
              logistics, inventory, and warehouse operations. In 2023, I was
              promoted to <strong>Team Leader</strong>, a recognition of my
              strong performance, leadership skills, and ability to manage teams
              effectively in fast-paced environments.
            </p>
            <br />
            <p>
              My expertise includes implementing and managing inventory tracking
              systems, coordinating shipments, monitoring KPIs, and optimising
              workflows using tools such as Excel and PDAs. I focus on driving
              efficiency, accuracy, and safety at every stage of warehouse
              operations.
            </p>
            <br />
            <p>
              As a leader, I support and train junior staff, foster
              collaboration, and ensure compliance with company procedures and
              safety protocols. My proactive approach and adaptability allow me
              to continuously improve processes and deliver results that align
              with operational goals.
            </p>
            <br />
            <p className="text-1xl sm:text-1xl font-bold text-[#ccd6fd]">
              What opportunities could arise with a passionate and proactive
              warehouse specialist, with a solid 15-year experience and the
              ability to optimize any aspect of warehouse management?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
