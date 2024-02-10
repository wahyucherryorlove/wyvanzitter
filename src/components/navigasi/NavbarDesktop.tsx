import { NavInfo } from "./NavInfo";
import { NavbarLinks } from "./NavLinks";

const NavbarDesktop = () => {
  return (
    <header className="flex flex-col bg-[#2C3333] lg:h-[130px]">
      <NavInfo />
      <NavbarLinks />
    </header>
  );
};

export { NavbarDesktop };
