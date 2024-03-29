import SearchBar from "./SearchBar";
import CartButton from "./CartButton";
import AuthMenu from "./AuthMenu";

type Props = {};

const NavbarPrimary = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-[9px] ">
        <div>
          <AuthMenu />
        </div>
        <div>
          <SearchBar />
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
