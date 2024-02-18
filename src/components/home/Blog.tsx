import Image from "next/image";
import Link from "next/link";

import { blogTemp } from "@components/temp/blog";

export function Blog() {
  return (
    <section className="px-4 lg:px-32 py-[6rem] lg:py-[8rem]">
      <h6 className="text-md text-center text-[#40A2D8] font-bold mb-2">
        Blog
      </h6>
      <h2 className="text-3xl lg:text-4xl text-center font-semibold text-neutral-200">
        Latest posts from our blog
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10 mt-14">
        {blogTemp.map(({ id, title, text, images, times }) => (
          <figure className="w-full" key={id}>
            <div className="relative w-full h-[280px] rounded-sm">
              <Image
                src={images}
                alt={title}
                fill
                className="w-full h-full object-cover object-center rounded-sm"
              />
            </div>

            <div className="mt-8">
              <Link href="" className="text-neutral-200 text-xl font-bold">
                {title}
              </Link>
              <p className="text-neutral-400 mt-2 text-sm ">
                {text.length > 170 ? text.slice(0, 170) + "..." : text}
              </p>
              <h6 className="mt-7 text-xs font-semibold text-neutral-400">
                {times.days}, {times.dates}
              </h6>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
