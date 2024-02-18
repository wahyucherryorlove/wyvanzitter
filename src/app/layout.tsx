import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";

import Head from "next/head";

import { NavbarDesktop } from "@components/navigasi/NavbarDesktop";
import { Footer } from "@components/navigasi/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#2C3333]`}>
        <NavbarDesktop />
        {children}

        <Footer />
      </body>
    </html>
  );
}
