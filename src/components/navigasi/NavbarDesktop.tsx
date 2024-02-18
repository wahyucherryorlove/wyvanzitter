"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import LogoImage from "@images/logo.png";

const NavbarDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  function open() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed flex justify-between items-center lg:px-32 h-[80px] w-full bg-[#272829] top-0 z-50">
      <Image
        src={LogoImage}
        alt=""
        className="w-36 object-contain ml-5 lg:ml-0"
      />
      <ul
        className={`flex lg:gap-x-8 fixed top-[80px] lg:top-auto pt-20 lg:pt-0 flex-col h-[100vh] lg:h-auto lg:flex-row lg:relative bg-[#2C3333] w-full lg:w-auto items-center gap-y-5 lg:bg-transparent duration-500 lg:translate-x-0 lg:opacity-100 ${
          !isOpen ? "translate-x-[100%] opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        <li>
          <Link
            href="/"
            className={`text-md ${
              router === "/"
                ? "font-semibold text-neutral-100"
                : "text-neutral-400 font-normal"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`text-md ${
              router === "/about"
                ? "font-semibold text-neutral-100"
                : "text-neutral-400 font-normal"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`text-md ${
              router === "/portfolio"
                ? "font-semibold text-neutral-100"
                : "text-neutral-400 font-normal"
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="blog"
            className={`text-md ${
              router === "/blog"
                ? "font-semibold text-neutral-100"
                : "text-neutral-400 font-normal"
            }`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`text-md ${
              router === "/contact"
                ? "font-semibold text-neutral-100"
                : "text-neutral-400 font-normal"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>

      <button
        type="button"
        className="w-[25px] h-[20px] flex flex-col justify-between mr-5 lg:hidden"
        onClick={open}
      >
        <span className="w-full h-[3px] rounded-sm bg-neutral-500"></span>
        <span className="w-full h-[3px] rounded-sm bg-neutral-500"></span>
        <span className="w-full h-[3px] rounded-sm bg-neutral-500"></span>
      </button>
    </nav>
  );
};

export { NavbarDesktop };
