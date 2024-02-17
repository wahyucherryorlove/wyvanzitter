import Link from "next/link";

import ProfileImages from "@images/thumbnail/home.svg";

export function Jumbotron() {
  return (
    <section className="px-4 lg:px-32 pt-[4rem] pb-[6rem] bg-neutral-700 grid lg:grid-cols-2 items-center">
      <div className="flex flex-col">
        <div className="flex gap-y-4 flex-col">
          <h5 className={`text-lg font-bold text-[#3887BE]`}>WELCOME 👋</h5>
          <h2
            className={`text-neutral-100 text-4xl lg:text-5xl font-semibold `}
          >
            I&apos;m Wahyudi Umar
          </h2>
          <span className={`text-lg font-normal text-neutral-300`}>
            I&apos;m into Frontend Developer
          </span>
        </div>
        <div className="flex gap-x-6">
          <Link
            href="#"
            rel="noreferrer"
            className="text-neutral-50 mt-8 inline-block bg-[#00A9FF] hover:bg-[#3876BF] duration-100 px-5 py-3 text-sm font-semibold rounded-md"
          >
            About me
          </Link>
        </div>
      </div>

      <div className="mt-20 lg:mt-0">
        <ProfileImages className="w-full h-full object-contain" />
      </div>
    </section>
  );
}
