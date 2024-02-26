import Link from "next/link";
import type { Metadata } from "next";

import { LampStack } from "@components/portfolio/LampStack";

import { lampStack } from "@temps/project/lampStack";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Wahyudi Umar's portfolio website was created using nextjs 14 and tailwindcss",
  icons: "/images/logo-shape.png",
};

export default function Page({ params }: { params: { view: string } }) {
  return (
    <main className="mt-[5rem] lg:mt-[80px]">
      <section className="px-4 lg:px-32 h-[17rem] flex justify-center items-center bg-[url('/images/portfolio/jumbotron.jpg')] bg-cover bg-fixed bg-center">
        <h2 className="text-4xl font-bold text-neutral-50">PORTFOLIO</h2>
      </section>

      <section className="flex flex-col items-center px-4 lg:px-32 my-20">
        <ul className="grid grid-cols-2 lg:flex gap-x-6 mt-10">
          <li>
            <Link
              href="/portfolio/lamp-stack"
              className={`text-neutral-50 text-sm sm:text-md px-3 py-2 md:px-5 md:py-2 ${
                params.view === "lamp-stack"
                  ? "bg-[#59B4C3] rounded-md font-bold"
                  : "bg-transparent font-normal"
              }`}
              scroll={false}
            >
              LAMP Stack
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/basic-web"
              className={`text-neutral-50 text-sm sm:text-md px-3 py-2 md:px-5 md:py-2 ${
                params.view === "basic-web"
                  ? "bg-[#59B4C3] rounded-md font-bold"
                  : "bg-transparent font-normal"
              }`}
              scroll={false}
            >
              Basic Web
            </Link>
          </li>
        </ul>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10 mt-14">
            {params.view === "lamp-stack" &&
              lampStack.map(({ images, title, information }, index) => {
                return (
                  <LampStack
                    key={index}
                    index={index}
                    images={images}
                    title={title}
                    information={information}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
