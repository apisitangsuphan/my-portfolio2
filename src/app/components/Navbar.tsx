"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from '../../../public/assets/logo.png'

function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const handleClick = () => {
    setNavbar(!navbar);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08111e] text-gray-300 md:px-10">
      {/* Menu pc */}
      <div>
        <Link href={"/"}>
          {" "}
          <Image src={logo} alt="Logo" className="w-[50px] rounded-full" />
        </Link>
      </div>

      
      <div>
        <ul className="md:flex hidden">
          <li>
            <Link href={"#home"}>Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Skills</Link>
          </li>
          <li>
            <Link href={"/"}>Work</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
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
          <Link href={"/"}>Home</Link>
        </li>
        <li className="py-6 text-1xl uppercase font-semibold">
          <Link href={"/"}>About</Link>
        </li>
        <li className="py-6 text-1xl uppercase font-semibold">
          <Link href={"/"}>Skills</Link>
        </li>
        <li className="py-6 text-1xl uppercase font-semibold">
          <Link href={"/"}>Work</Link>
        </li>
        <li className="py-6 text-1xl uppercase font-semibold">
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>
      {/* Social Icons ( Left side) */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10] duration-300 bg-[#0866FF] rounded-full rounded-l-none">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              href={"/"}
            >
              Facebook
              <FaFacebook size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10] duration-300 bg-slate-900 rounded-full rounded-l-none mt-5">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              href={"/"}
            >
              Github
              <FaGithub size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10] duration-300 bg-pink-600 rounded-full rounded-l-none mt-5">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              href={"/"}
            >
              Email
              <HiOutlineMail size={30} />
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
