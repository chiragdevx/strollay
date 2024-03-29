import React from "react";
import NavbarPrimary from "@/components/navbar/NavbarPrimary";
import NavbarSecondary from "@/components/navbar/NavbarSecondary";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="max-w-7xl lg:max-w-[1400px] mx-auto">
      <NavbarPrimary />
      <NavbarSecondary />
    </div>
  );
};

export default Navbar;
