import Link from "next/link";

export function Footer() {
  return (
    <footer className="lg:py-7 bg-[#272829]">
      <p className="text-center text-neutral-400 text-sm flex justify-center items-center gap-x-1.5">
        Copyright &copy;{new Date().getFullYear()}{" "}
        <Link
          href="https://www.instagram.com/wahyudix15/"
          className="text-[#73BBC9]"
          rel="noreferrer"
          target="_blank"
        >
          Wahyudi Umar
        </Link>{" "}
        <span className="w-1 h-1 rounded-full bg-neutral-400" /> All rights
        reserved
      </p>
    </footer>
  );
}
