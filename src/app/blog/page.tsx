import type { Metadata } from "next";

import { Blogger } from "@components/blog/Blogger";
import { Jumbotron } from "@components/blog/Jumbotron";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Wahyudi Umar's portfolio website was created using nextjs 14 and tailwindcss",
  icons: "/images/logo-shape.png",
};

export default function Page() {
  return (
    <main className="mt-[5rem] lg:mt-[80px]">
      <Jumbotron />

      <Blogger />
    </main>
  );
}
