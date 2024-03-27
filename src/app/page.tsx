import type { Metadata } from "next";

import { About } from "@components/home/About";
import { Blog } from "@components/home/Blog";
import { Jumbotron } from "@components/home/Jumbotron";
import { Portfolio } from "@components/Portfolio";

import { portfolioTemp } from "@components/temp/portfolio";

export const metadata: Metadata = {
  title: "Portfolio Wahyudi Umar",
  description:
    "Wahyudi Umar's portfolio website was created using nextjs 14 and tailwindcss",
  icons: "/images/logo-shape.png",
};

export default function Home() {
  return (
    <main className="mt-[5rem] lg:mt-[80px]">
      <Jumbotron />

      <About />

      <section className="px-4 lg:px-32 py-[6rem] bg-[#393E46]">
        <h6 className="text-md text-center text-[#40A2D8] font-bold mb-2">
          Portfolio
        </h6>
        <h2 className="text-4xl text-center font-semibold text-neutral-200">
          Latest Project
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-10 mt-10">
          {portfolioTemp.map((item) => (
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

      <Blog />
    </main>
  );
}
