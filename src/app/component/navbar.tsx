"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../favicon.ico";
import hamMenu from "../../../public/images/ham-menu.svg";
import hamMenuClose from "../../../public/images/ham-menu-close.svg";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full font-sourceSans bg-white fixed top-0 left-0 right-0 z-30 shadow-xl">
      <div className="justify-between px-4 md:py-2 mx-6 md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between pt-2 md:py-2 md:block">
            {/* LOGO */}
            <a
              className="flex font-medium items-center mb-4 md:mb-0"
              href={"/"}
            >
              <Image
                src={logo}
                alt="shahbaz-pic"
                width={70}
                height={70}
                className="w-[55px] rounded-full"
              />
              <span className="ml-3 text-lg font-bold tracking-widest hover:text-primary">
                SHAHBAZ
              </span>
            </a>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src={hamMenuClose}
                    width={30}
                    height={30}
                    alt="hame-menu-close"
                  />
                ) : (
                  <Image
                    src={hamMenu}
                    width={30}
                    height={30}
                    alt="ham-menu"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
              navbar ? " md:p-0 block" : "hidden"
            }`}
          >
            <ul className="w-[100%]  items-center  justify-center md:flex ">
              <li className="text-base font-bold tracking-widest py-6 px-8  text-right border-b-2 border-t-2 md:border-0   uppercase md:hover:text-primary md:hover:bg-transparent">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className=" text-base font-bold tracking-widest  py-6 px-8  text-right uppercase border-b-2  md:border-b-0   md:hover:text-primary md:hover:bg-transparent">
                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li className=" text-base font-bold tracking-widest uppercase py-6 px-8  text-right  border-b-2 md:border-b-0   md:hover:text-primary md:hover:bg-transparent">
                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>
              <li className=" text-base font-bold tracking-widest  py-6 px-8  text-right uppercase  md:border-b-0  md:hover:text-primary md:hover:bg-transparent">
                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
