import { Karla, Roboto_Mono, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { About } from "@components/home/About";
import { Blog } from "@components/home/Blog";
import { Jumbotron } from "@components/home/Jumbotron";
import { Portfolio } from "@components/home/Portfolio";

export const metadata: Metadata = {
  title: "Portfolio Wahyudi Umar",
  description:
    "Wahyudi Umar's portfolio website was created using nextjs 14 and tailwindcss",
};

export default function Home() {
  return (
    <main className="mt-[8rem]">
      <Jumbotron />

      <About />

      <Portfolio />

      <Blog />
    </main>
  );
}
