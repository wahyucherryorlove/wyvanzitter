import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-7 bg-[#272829]">
      <p className="text-center text-neutral-400 text-sm">
        Copyright &copy;{new Date().getFullYear()}{" "}
        <Link
          href="https://www.instagram.com/wahyudix15/"
          className="text-[#73BBC9] mx-0.5"
          rel="noreferrer"
          target="_blank"
        >
          Wahyudi Umar
        </Link>{" "}
        {"."} All rights reserved
      </p>
    </footer>
  );
}
