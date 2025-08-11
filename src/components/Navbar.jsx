import { Link } from "react-scroll";
import { FaBars, FaTimes, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import Logo from "../assets/images/logoDC.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const links = [
    { to: "Home", link: "home" },
    { to: "About", link: "about" },
    { to: "Skills", link: "skills" },
    { to: "Work", link: "work" },
    { to: "Contact", link: "contact" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chaves-diego/",
      icon: <FaLinkedin size={30} />,
      bgColor: "#4267b2",
    },
    {
      label: "Curriculum",
      href: "https://drive.google.com/file/d/1qfcAZMTdLYSH-7sobEz7jEOqdmkLLnMB/view?usp=drive_link",
      icon: <BsFillPersonLinesFill size={30} />,
      bgColor: "#565f69",
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-center items-center px4 md:px-6 bg-[#0a192fe6] text-gray-300  ">
      <div className="flex items-center justify-start w-full max-w-[1000px]">
        <Link
          to="home"
          smooth={true}
          duration={500}
          href="home"
          className="cursor-pointer"
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "80px", height: "40px" }}
          />
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden text-sm md:flex">
        {links.map(({ to, link }) => (
          <li key={link} className="hover:text-[#1da1f2] cursor-pointer px-3">
            <Link to={link} smooth={true} duration={500}>
              {to.charAt(0).toUpperCase() + to.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      {/* curricolum */}
      <div className="hidden text-sm md:flex ">
        <a
          className="hover:text-[#1da1f2] cursor-pointer px-3"
          href="https://drive.google.com/file/d/1qfcAZMTdLYSH-7sobEz7jEOqdmkLLnMB/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curriculum
        </a>
      </div>

      {/* hamburge */}
      <div onClick={handleClick} className="z-10 mr-3 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full bg-[#0a192f] flex flex-col justify-center items-center h-screen md:h-full"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map(({ label, href, icon, bgColor }, index) => (
            <li
              key={index}
              className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300"
              style={{ backgroundColor: bgColor }}
            >
              <a
                className="flex justify-end w-full gap-4 text-gray-300"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
