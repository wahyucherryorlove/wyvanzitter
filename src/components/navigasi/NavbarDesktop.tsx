import { NavInfo } from "./NavInfo";
import { NavbarLinks } from "./NavLinks";

const NavbarDesktop = () => {
  return (
    <header className="flex flex-col bg-[#2C3333] lg:h-[130px] inset-x-0 top-0 fixed">
      <NavInfo />
      <NavbarLinks />
    </header>
  );
};

export { NavbarDesktop };
