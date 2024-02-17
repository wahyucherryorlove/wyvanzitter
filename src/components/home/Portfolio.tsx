import Image from "next/image";

import { portfolioTemp } from "@components/temp/portfolio";

export function Portfolio() {
  return (
    <section className="lg:px-32 lg:py-[8rem] bg-[#393E46]">
      <h6 className="text-md text-center text-[#40A2D8] font-bold mb-2">
        Portfolio
      </h6>
      <h2 className="text-4xl text-center font-semibold text-neutral-200">
        Latest Project
      </h2>

      <figure className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:mt-14">
        {portfolioTemp.map(({ id, title, images }) => (
          <div className="relative w-full h-[200px]" key={id}>
            <Image
              src={images}
              alt={title}
              fill
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </figure>
    </section>
  );
}
