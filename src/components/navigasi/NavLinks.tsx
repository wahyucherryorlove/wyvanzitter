import Link from "next/link";
import Image from "next/image";

import LogoImage from "@images/logo.png";

const NavbarLinks = () => {
  return (
    <nav className="flex justify-between items-center lg:px-20 h-full">
      <Image src={LogoImage} alt="" className="w-24 object-contain" />
      <ul className="flex lg:gap-x-8">
        <li>
          <Link href="#" className={`text-neutral-400 text-md`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className={`text-neutral-400 text-md`}>
            About
          </Link>
        </li>
        <li>
          <Link href="#" className={`text-neutral-400 text-md`}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="#" className={`text-neutral-400 text-md`}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="#" className={`text-neutral-400 text-md`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { NavbarLinks };
