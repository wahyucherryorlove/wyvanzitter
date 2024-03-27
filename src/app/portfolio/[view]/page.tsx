import Link from "next/link";
import type { Metadata } from "next";

import { Portfolio } from "@components/Portfolio";

import { portfolioTemp } from "@components/temp/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Wahyudi Umar's portfolio website was created using nextjs 14 and tailwindcss",
  icons: "/images/logo-shape.png",
};

export default function Page({ params }: { params: { view: string } }) {
  let testing = portfolioTemp.filter((tes) => tes.group === "lamp-stack");

  return (
    <main className="mt-[5rem] lg:mt-[80px]">
      <section className="px-4 lg:px-32 h-[17rem] flex justify-center items-center bg-neutral-700">
        <h2 className="text-4xl font-bold text-neutral-50">PORTFOLIO</h2>
      </section>

      <section className="flex flex-col items-center px-4 lg:px-32 my-20">
        <ul className="grid grid-cols-2 lg:flex gap-x-6 mt-10 px-2 rounded-md py-5 bg-neutral-700">
          <li>
            <Link
              href="/portfolio/wamp-stack"
              className={`text-neutral-50 text-sm px-6 py-3 ${
                params.view === "wamp-stack"
                  ? "bg-[#59B4C3] rounded-md font-bold"
                  : "bg-transparent font-normal"
              }`}
              scroll={false}
            >
              WAMP Stack
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio/basic-web"
              className={`text-neutral-50 text-sm px-6 py-3 ${
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10 mt-14">
          {params.view === "wamp-stack" &&
            portfolioTemp
              .filter((item) => item.group === "wamp-stack")
              .map((item) => (
                <Portfolio
                  key={item.id}
                  index={item.id}
                  images={item.images}
                  title={item.title}
                  information={item.teachStack}
                  github={item.medsos.github}
                  showProject={item.medsos.showProject}
                />
              ))}

          {params.view === "basic-web" &&
            portfolioTemp
              .filter((item) => item.group === "basic-web")
              .map((item) => (
                <Portfolio
                  key={item.id}
                  index={item.id}
                  images={item.images}
                  title={item.title}
                  information={item.teachStack}
                  github={item.medsos.github}
                  showProject={item.medsos.showProject}
                />
              ))}
        </div>
      </section>
    </main>
  );
}
