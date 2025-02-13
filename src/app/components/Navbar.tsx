'use client'
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes,FaFacebook, FaInstagram,FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo from "./../assets/logo.png";

function Navbar() {
    const [navbar, setNavbar] = useState<boolean>(false);
    const handleClick = ()=> {
        setNavbar(!navbar);
    }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08111e] text-gray-300">
      <div>
        <Link href={"/"}>
          {" "}
          <Image src={logo} alt="Logo" className="w-[50px] rounded-full" />
        </Link>
      </div>

      {/* Menu pc */}
      <div>
        <ul className="md:flex hidden ">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/"}>About</Link></li>
            <li><Link href={"/"}>Skills</Link></li>
            <li><Link href={"/"}>Work</Link></li>
            <li><Link href={"/"}>Contact</Link></li>
          
        </ul>
      </div>

      {/* Hamburger */}
        <div className="md:hidden z-10" onClick={handleClick}>
           {!navbar ? <FaBars/>:<FaTimes/> }
        </div>
      {/* Menu mobile */}
      <ul className={!navbar ?"hidden" : "absolute top-0 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center"}>
            <li className="py-6 text-1xl uppercase font-semibold"><Link href={"/"}>Home</Link></li>
            <li className="py-6 text-1xl uppercase font-semibold"><Link href={"/"}>About</Link></li>
            <li className="py-6 text-1xl uppercase font-semibold"><Link href={"/"}>Skills</Link></li>
            <li className="py-6 text-1xl uppercase font-semibold"><Link href={"/"}>Work</Link></li>
            <li className="py-6 text-1xl uppercase font-semibold"><Link href={"/"}>Contact</Link></li>
          
        </ul>
      {/* Social Icons ( Left side) */}
      <div className="flex fixed flex-col top-[35%] left-0 ">
        <ul>
            <li className="flex "><Link href={'/'}>Facebook<FaFacebook/></Link></li>
            <li><Link href={'/'}>Facebook<FaFacebook/></Link></li>
            <li><Link href={'/'}>Facebook<FaFacebook/></Link></li>
            <li><Link href={'/'}>Facebook<FaFacebook/></Link></li>
            
            {/* <li><Link href={'/'}>< /Link></li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
