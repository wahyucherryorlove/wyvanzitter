"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import LogoImage from "@images/logo.png";

const NavbarLinks = () => {
  const router = usePathname();

  return (
    <nav className="flex justify-between items-center lg:px-32 h-full">
      <Image src={LogoImage} alt="" className="w-24 object-contain" />
      <ul className="flex lg:gap-x-8">
        <li>
          <Link
            href="/"
            className={`text-neutral-400 text-md ${
              router === "/"
                ? "font-semibold text-neutral-200"
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
                ? "font-semibold text-neutral-200"
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
                ? "font-semibold text-neutral-200"
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
                ? "font-semibold text-neutral-200"
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
                ? "font-semibold text-neutral-200"
                : "text-neutral-400 font-normal"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { NavbarLinks };
