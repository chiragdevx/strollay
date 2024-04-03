import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ALink from "@/components/features/CustomLink";

import CartMenu from "@/components/common/partials/CartMenu";
import MainMenu from "@/components/common/partials/MainMenu";
import SearchBox from "@/components/common/partials/SearchBox";
import LoginModal from "@/components/features/modals/LoginModal";

import { headerBorderRemoveList } from "@/utils/data/menu";
import strollayLogo from "../../../public/images/strollay.png";
import Image from "next/image";

export default function Header(props: any) {
  const router = useRouter();

  useEffect(() => {
    let header = document.querySelector("header");
    if (header) {
      if (
        headerBorderRemoveList.includes(router.pathname) &&
        header.classList.contains("header-border")
      )
        header.classList.remove("header-border");
      else if (!headerBorderRemoveList.includes(router.pathname))
        document.querySelector("header").classList.add("header-border");
    }
  }, [router.pathname]);

  const showMobileMenu = () => {
    document.querySelector("body").classList.add("mmenu-active");
  };

  function closeTopNotice(e: any) {
    e.preventDefault();
    setShowTopNotice(false);
  }

  const [showTopNotice, setShowTopNotice] = useState(true);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  return (
    <header className="header header-border">
      {showTopNotice ? (
        <div className="justify-content-center bg-red top-notice p-relative">
          <div className="alert-top-runner bg-red font-primary">
            Get 10% extra Off on Riode Birthday Sale - Use coupon Riodebirthday
            10% -&nbsp;
            <ALink
              href="/shop"
              className="btn btn-shop btn-link btn-primary text-normal btn-sm font-primary ml-1"
            >
              Shop now!
            </ALink>
          </div>
          <a
            className="btn btn-icon btn-notice-close y-50"
            href="#"
            onClick={closeTopNotice}
          >
            <i className="d-icon-close"></i>
          </a>
        </div>
      ) : (
        ""
      )}

      {/* <div className="header-top">
        <div className="container">
          {/* <div className="header-left">
            <p className="welcome-msg">
              Welcome to Riode store message or remove it!
            </p>
          </div> */}
      {/* <div className="header-right">
            <div className="dropdown">
              <ALink href="#">USD</ALink>
              <ul className="dropdown-box">
                <li>
                  <ALink href="#">USD</ALink>
                </li>
                <li>
                  <ALink href="#">EUR</ALink>
                </li>
              </ul>
            </div>

            <div className="dropdown ml-5">
              <ALink href="#">ENG</ALink>
              <ul className="dropdown-box">
                <li>
                  <ALink href="#">ENG</ALink>
                </li>
                <li>
                  <ALink href="#">FRH</ALink>
                </li>
              </ul>
            </div>

            <span className="divider"></span>
            <ALink href="/pages/contact-us" className="contact d-lg-show">
              <i className="d-icon-map"></i>Contact
            </ALink>
            <ALink href="#" className="help d-lg-show">
              <i className="d-icon-info"></i> Need Help
            </ALink>
            <LoginModal />
          </div>
        </div> */}
      {/* </div> */}

      <div className="header-middle sticky-header fix-top sticky-content">
        <div className="container">
          <div className="header-left">
            <ALink
              href="#"
              className="mobile-menu-toggle"
              onClick={showMobileMenu}
            >
              <i className="d-icon-bars2"></i>
            </ALink>

            <ALink href="/" className="logo">
              <Image src={strollayLogo} alt="logo" width="153" height="44" />
            </ALink>

            <SearchBox />
          </div>

          <div className="header-right">
            {/* <ALink href="tel:#" className="icon-box icon-box-side">
              <div className="icon-box-icon mr-0 mr-lg-2">
                <i className="d-icon-phone"></i>
              </div>
              <div className="icon-box-content d-lg-show">
                <h4 className="icon-box-title">Call Us Now:</h4>
                <p>0(800) 123-456</p>
              </div>
            </ALink> */}
            {/* <span className="divider"></span> */}
            <ALink href="/pages/wishlist" className="wishlist">
              <i className="d-icon-heart"></i>
            </ALink>
            <span className="divider"></span>

            <div className="pr-1">
              <CartMenu />
            </div>

            <span className="divider"></span>

            <LoginModal />
          </div>
        </div>
      </div>

      <div className="header-bottom d-lg-show">
        <div className="container">
          <div className="header-left">
            <MainMenu />
          </div>

          {/* <div className="header-right">
            <ALink href="#">
              <i className="d-icon-card"></i>Special Offers
            </ALink>
          </div> */}
        </div>
      </div>
    </header>
  );
}
