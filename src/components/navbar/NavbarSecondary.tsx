import React from "react";
import AuthMenu from "./AuthMenu";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import Logo from "./Logo";
import Categories from "../category/Categories";
import MainMenu from "../common/partials/MainMenu";
import ALink from "../features/CustomLink";

type Props = {};

const NavbarSecondary = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex items-center py-[20px] ">
        <div className="w-[30%]">
          <Logo />
        </div>
        <div>
          <div className="header-bottom d-lg-show">
            <div className="container">
              <div className="header-left">
                <MainMenu data={[]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSecondary;
