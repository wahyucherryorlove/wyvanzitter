import Image from "next/image";
import Link from "next/link";

import type { LampStackInterface } from "@interfaces/portfolio";

export function LampStack({
  index = 0,
  title,
  information,
  images,
}: LampStackInterface) {
  return (
    <figure className="w-full" key={index}>
      <div className="relative h-[280px] rounded-sm">
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
          <span className="font-bold">Teach Stack : </span>
          {information}
        </p>
      </div>
    </figure>
  );
}
