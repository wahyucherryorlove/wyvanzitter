import Image from "next/image";
import Link from "next/link";

import GithubIcons from "@icons/github.svg";
import OpenLinkIcons from "@icons/open-link.svg";

import type { BasicWebInterface } from "@interfaces/portfolio";

export function BasicWeb({
  index = 0,
  title,
  information,
  images,
  github,
  showProject,
}: BasicWebInterface) {
  return (
    <figure className="w-full bg-[#293030] p-4 rounded-md" key={index}>
      <div className="relative h-[280px] rounded-sm">
        <Image
          src={images}
          alt={title}
          fill
          className="w-full h-full object-cover object-center rounded-sm"
        />
        <div className="flex items-center justify-center gap-x-4 absolute inset-0 opacity-0 hover:opacity-100 bg-[#092635]/50 z-10 duration-200">
          <Link
            href={showProject}
            className="w-9 h-9 bg-neutral-50 rounded-md flex items-center justify-center"
            rel="noreferrer"
            target="_blank"
          >
            <OpenLinkIcons className="w-5 h-5 fill-neutral-900" />
          </Link>
          <Link
            href={github}
            className="w-9 h-9 bg-neutral-50 rounded-md flex items-center justify-center"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcons className="w-5 h-5 fill-neutral-900" />
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <Link href="" className="text-neutral-200 text-xl font-bold">
          {title}
        </Link>
        <p className="text-neutral-400 mt-2 text-sm ">
          <span className="font-bold">Teach Stack : </span>
          {information}
        </p>
      </div>
    </figure>
  );
}
