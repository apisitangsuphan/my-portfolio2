"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaFacebook, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineDocumentDownload } from "react-icons/hi";

import logo from "../../../public/assets/logo.png";

function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const handleClick = () => {
    setNavbar(!navbar);
  };
  return (
    <div className="z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08111e] text-gray-300 md:px-10">
      {/* Menu pc */}
      <div>
        <Link to="home" className="hover:cursor-pointer">
          {" "}
          <Image src={logo} alt="Logo" className="w-[50px] rounded-full" />
        </Link>
      </div>

      <div>
        <ul className="md:flex hidden space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-white font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-white font-semibold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-white font-semibold"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-white font-semibold"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-white font-semibold"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!navbar ? <FaBars /> : <FaTimes />}
      </div>
      {/* Menu mobile */}
      <ul
        className={
          !navbar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-1xl uppercase font-semibold">
          <Link to="home" smooth={true} duration={800}>
            Home
          </Link>
        </li>
        <li className="py-6 text-1xl uppercase font-semibold">
          <Link to="about" smooth={true} duration={800}>
            About
          </Link>
        </li>
        <li className="py-6 text-1xl uppercase font-semibold">
          <Link to="skills" smooth={true} duration={800}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-1xl uppercase font-semibold">
          <Link to="work" smooth={true} duration={800}>
            Work
          </Link>
        </li>
        <li className="py-6 text-1xl uppercase font-semibold">
          <Link to="contact" smooth={true} duration={800}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons ( Left side) */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0866FF] rounded-full rounded-l-none">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://web.facebook.com/apsit2/"
              target="_blank"
            >
              Facebook
              <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900 rounded-full rounded-l-none mt-5">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/apisitangsuphan"
              target="_blank"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[240px] h-[60px] flex justify-between ml-[-180px] hover:ml-[-10px] duration-300 bg-pink-600 rounded-full rounded-l-none mt-5">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:bankgim@gmail.com"
              target="_blank"
            >
              bankgim@gmail.com
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[200px] h-[60px] flex justify-between ml-[-140px] hover:ml-[-10px] duration-300 bg-cyan-700 rounded-full rounded-l-none mt-5">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="tel:+66835774500"
              target="_blank"
            >
              +668 3577 4500

              <BsTelephone size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
