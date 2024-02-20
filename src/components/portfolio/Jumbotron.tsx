import Link from "next/link";

import ProfileImages from "@images/thumbnail/home.svg";

export function Jumbotron() {
  return (
    <section className="px-4 lg:px-32 h-[17rem] flex justify-center items-center bg-[url('/images/about/jumbotron.jpg')] bg-cover bg-fixed bg-center">
      <h2 className="text-4xl font-bold text-neutral-50">About me</h2>
    </section>
  );
}
