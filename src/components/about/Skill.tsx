"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { frontend } from "@components/temp/skill/frontend";

export function Skill({ params }: { params: { view: string } }) {
  return (
    <section className="flex flex-col items-center px-4 lg:px-32 py-[6rem] lg:py-[8rem] bg-[#393E46]">
      <h6 className="text-md text-center text-[#40A2D8] font-bold mb-2">
        Skill
      </h6>
      <h2 className="text-4xl text-center font-semibold text-neutral-200">
        Tech Stack
      </h2>

      <ul className="grid grid-cols-3 lg:flex gap-x-6 mt-10">
        <li>
          <Link
            href="/about/frontend"
            className={`text-neutral-50 text-sm sm:text-md px-3 py-2 md:px-5 md:py-2 ${
              params.view === "frontend"
                ? "bg-[#59B4C3] rounded-md font-bold"
                : "bg-transparent font-normal"
            }`}
            scroll={false}
          >
            Frontend
          </Link>
        </li>
        <li>
          <Link
            href="/about/backend"
            className={`text-neutral-50 text-sm sm:text-md px-3 py-2 md:px-5 md:py-2 ${
              params.view === "backend"
                ? "bg-[#59B4C3] rounded-md font-bold"
                : "bg-transparent font-normal"
            }`}
            scroll={false}
          >
            Backend
          </Link>
        </li>
        <li>
          <Link
            href="/about/database"
            className={`text-neutral-50 text-sm sm:text-md px-3 py-2 md:px-5 md:py-2 ${
              params.view === "database"
                ? "bg-[#59B4C3] rounded-md font-bold"
                : "bg-transparent font-normal"
            }`}
            scroll={false}
          >
            Database
          </Link>
        </li>
      </ul>

      <div className="mt-20 lg:w-3/6">
        <div className="flex items-center justify-center gap-x-10 gap-y-12 flex-wrap">
          {params.view === "frontend" &&
            frontend.map(({ images, alt }) => {
              return (
                <figure className="flex flex-col justify-center gap-y-8  items-center relative">
                  <div className="relative w-[50px] h-[50px] flex items-center justify-center">
                    <Image
                      src={images}
                      alt={alt}
                      className="w-full h-full object-contain z-10"
                      fill
                    />
                    <div
                      className={`absolute w-[90px] h-[90px] z-0 rounded-full ${
                        alt === "Nextjs"
                          ? "bg-neutral-50/80"
                          : "bg-[#45474B]/80"
                      }`}
                    />
                  </div>

                  <figcaption className="font-normal text-neutral-300">
                    Javascript
                  </figcaption>
                </figure>
              );
            })}
        </div>
      </div>
    </section>
  );
}