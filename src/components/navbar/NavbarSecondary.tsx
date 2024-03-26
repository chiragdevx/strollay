import React from "react";
import AuthMenu from "./AuthMenu";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import Logo from "./Logo";
import Categories from "../category/Categories";

type Props = {};

const NavbarSecondary = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex items-center py-[20px] px-[30px]">
        <div className="w-[30%]">
          <Logo />
        </div>
        <div>
          <Categories />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavbarSecondary;
