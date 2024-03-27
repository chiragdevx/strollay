import React from "react";
import NavbarPrimary from "./NavbarPrimary";
import NavbarSecondary from "./NavbarSecondary";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="">
      <NavbarPrimary />
      <NavbarSecondary />
    </div>
  );
};

export default Navbar;
