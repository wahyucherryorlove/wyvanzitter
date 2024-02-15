import { NavInfo } from "./NavInfo";
import { NavbarLinks } from "./NavLinks";

const NavbarDesktop = () => {
  return (
    <header className="flex flex-col bg-[#272829] lg:h-[130px] inset-x-0 top-0 fixed z-50">
      <NavInfo />
      <NavbarLinks />
    </header>
  );
};

export { NavbarDesktop };
