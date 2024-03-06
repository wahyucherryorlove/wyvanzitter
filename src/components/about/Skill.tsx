import Image from "next/image";

import { frontend } from "@components/temp/skill/frontend";

export function Skill() {
  return (
    <section className="flex flex-col items-center px-4 lg:px-32 py-[6rem] lg:py-[8rem] bg-[#393E46]">
      <h6 className="text-md text-center text-[#40A2D8] font-bold mb-2">
        Skill
      </h6>
      <h2 className="text-4xl text-center font-semibold text-neutral-200">
        Tech Stack
      </h2>

      <div className="mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-12 gap-y-12">
          {frontend.map(({ images, title }, index) => {
            return (
              <figure
                className="flex flex-col justify-center gap-y-8  items-center relative"
                key={index + 1}
              >
                <div className="relative w-[50px] h-[50px] flex items-center justify-center">
                  <Image
                    src={images}
                    alt={title}
                    className="w-full h-full object-contain z-10"
                    fill
                  />
                  <div
                    className={`absolute w-[90px] h-[90px] z-0 rounded-full ${
                      title === "Nextjs"
                        ? "bg-neutral-50/80"
                        : "bg-[#45474B]/80"
                    }`}
                  />
                </div>

                <figcaption className="font-normal text-neutral-300">
                  {title}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
