import Image from "next/image";
import Link from "next/link";

import GithubIcons from "@icons/github.svg";
import OpenLinkIcons from "@icons/open-link.svg";

import { portfolioTemp } from "@components/temp/portfolio";

export function Portfolio() {
  return (
    <section className="px-4 lg:px-32 py-[6rem] lg:py-[8rem] bg-[#393E46]">
      <h6 className="text-md text-center text-[#40A2D8] font-bold mb-2">
        Portfolio
      </h6>
      <h2 className="text-4xl text-center font-semibold text-neutral-200">
        Latest Project
      </h2>
      <figure className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-14 justify-items-center">
        {portfolioTemp.map(({ id, title, images }) => (
          <div className="relative w-full h-[200px]" key={id}>
            <Image
              src={images}
              alt={title}
              fill
              className="w-full h-full object-cover object-center"
            />

            <div className="flex items-center justify-center gap-x-4 absolute inset-0 opacity-0 hover:opacity-100 bg-[#092635]/50 z-10 duration-200">
              <Link
                href="#"
                className="w-9 h-9 bg-neutral-50 rounded-md flex items-center justify-center"
              >
                <OpenLinkIcons className="w-5 h-5 fill-neutral-900" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 bg-neutral-50 rounded-md flex items-center justify-center"
              >
                <GithubIcons className="w-5 h-5 fill-neutral-900" />
              </Link>
            </div>
          </div>
        ))}
      </figure>
    </section>
  );
}
