import { Karla, Roboto_Mono, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { About } from "@components/home/About";
import { Jumbotron } from "@components/home/Jumbotron";

export const metadata: Metadata = {
  title: "Portfolio Wahyudi Umar",
  description:
    "Wahyudi Umar's portfolio website was created using nextjs 14 and tailwindcss",
};

const roboto_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
});

const karla = Karla({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="mt-[8rem] mb-40">
      <Jumbotron />

      <About />
    </main>
  );
}
