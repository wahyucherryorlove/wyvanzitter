import Image from "next/image";
import Link from "next/link";

import ProfileImage from "@images/about/wahyu.jpg";

export const About = () => {
  const bio =
    "I am a Frontend developer based in Makassar, Indonesia. I am an alumnus of SMKS Mutiara Ilmu majoring in Software Engineering, and my journey in web development began when I was in class XI at vocational school level. I'm passionate about creating beautiful, functional, and user-friendly websites and apps, and I'm constantly pushing myself to learn and grow as a developer.";

  return (
    <section className="flex lg:grid xl:grid-cols-3 px-4 lg:px-32 lg:flex-row py-[6rem] items-center justify-center flex-col lg:items-start">
      <div className="w-[20rem] lg:w-[20rem] bg-neutral-50 rounded-xl lg:-rotate-[3deg] bg-transparent group hover:-translate-y-5 duration-300">
        <Image
          src={ProfileImage}
          alt="Jumaing Profile"
          className="w-full h-full object-contain rounded-xl border-2 border-blue-400 p-1 bg-transparent saturate-0 group-hover:saturate-100 duration-200"
          fill={false}
        />

        <span className="w-full flex justify-center mt-2 text-neutral-300">
          {"< I build stuff 🚀/>"}
        </span>
      </div>

      <div className="mt-10 col-span-2">
        <h2 className="text-3xl font-bold text-neutral-100">Wahyudi Umar</h2>
        <h6 className="my-4 lg:mt-4 lg:mb-8 ring-2 ring-[#00A9FF]/50 inline-block px-2 py-1 text-xs rounded-md text-[#00A9FF]">
          Front End Developer
        </h6>
        <p className="text-neutral-400">{bio.slice(0, 250)}...</p>

        <div className="flex gap-x-4">
          <Link
            href="#"
            rel="noreferrer"
            className="text-neutral-50 mt-8 inline-block bg-[#00A9FF] hover:bg-[#3876BF] duration-100 px-5 py-3 text-sm font-semibold rounded-md"
          >
            Resume
          </Link>
          <Link
            href="#"
            rel="noreferrer"
            className="text-neutral-50 mt-8 inline-block bg-[#272829] hover:bg-[#3876BF] duration-100 px-5 py-3 text-sm font-semibold rounded-md"
          >
            Github
          </Link>
        </div>
      </div>
    </section>
  );
};
