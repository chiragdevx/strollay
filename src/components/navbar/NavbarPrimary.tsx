import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import AuthMenu from "./AuthMenu";
import SearchBox from "../common/partials/SearchBox";

type Props = {};

const NavbarPrimary = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-[9px] ">
        <div>
          <AuthMenu />
        </div>
        <div>
          {/* <SearchBar /> */} <SearchBox />
        </div>

        <div>
          <CartButton />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavbarPrimary;
