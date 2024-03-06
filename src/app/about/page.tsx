import type { Metadata } from "next";

import { About } from "@components/about/About";
import { Jumbotron } from "@components/about/Jumbotron";
import { Skill } from "@components/about/Skill";

export const metadata: Metadata = {
  title: "About me",
  description:
    "Wahyudi Umar's portfolio website was created using nextjs 14 and tailwindcss",
  icons: "/images/logo-shape.png",
};

export default function Page() {
  return (
    <main className="mt-[5rem] lg:mt-[80px]">
      <Jumbotron />

      <About />

      <Skill />
    </main>
  );
}
