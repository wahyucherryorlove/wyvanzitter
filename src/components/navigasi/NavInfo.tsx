"use client";

import { useState } from "react";
import Link from "next/link";

import ArrowBottomIcons from "@icons/arrow-bottom.svg";
import EnvelopeIcons from "@icons/envelope.svg";
import GlobeIcons from "@icons/globe.svg";
import PhoneCallIcons from "@icons/phone-call.svg";

const NavInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openButton() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex justify-between h-14 border-b-2 border-neutral-600 lg:px-32 items-center">
      <ul>
        <li>
          <p className="text-neutral-500 font-semibold text-xs">
            Created by &copy; Wahyudi Umar
          </p>
        </li>
      </ul>
      <ul className="flex gap-x-3 items-center">
        <li>
          <Link
            href="https://wa.me/+6282194823066"
            className="flex gap-x-2 items-center"
            target="_blank"
            rel="noreferrer"
          >
            <PhoneCallIcons className="w-3.5 h-3.5 fill-neutral-500" />
            <span className="text-xs text-neutral-500 font-semibold">
              +62 821 9482 3066
            </span>
          </Link>
        </li>
        <span className="w-[1px] h-3 bg-neutral-500" />
        <li>
          <Link
            href="mailto:wahyucherryorlove@gmail.com"
            className="flex gap-x-2 items-center"
            rel="noreferrer"
          >
            <EnvelopeIcons className="w-3.5 h-3.5 fill-neutral-500" />
            <span className="text-xs text-neutral-500 font-semibold">
              wahyucherryorlove@gmail.com
            </span>
          </Link>
        </li>
        <span className="w-[1px] h-3 bg-neutral-500" />
        <li>
          <button className="flex gap-x-2 items-center" onClick={openButton}>
            <GlobeIcons
              className={`w-3.5 h-3.5 fill-neutral-500 duration-200 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            <span className="text-xs text-neutral-500 font-semibold">ID</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export { NavInfo };
