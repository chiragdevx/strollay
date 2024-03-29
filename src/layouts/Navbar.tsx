import React from "react";
import NavbarPrimary from "@/components/navbar/NavbarPrimary";
import NavbarSecondary from "@/components/navbar/NavbarSecondary";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <NavbarPrimary />
      <NavbarSecondary />
    </>
  );
};

export default Navbar;
