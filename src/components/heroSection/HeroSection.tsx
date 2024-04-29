import Slider from "react-slick";
import Banner9 from "../../../public/images/Banner9.jpg";
import Banner10 from "../../../public/images/Banner10.jpeg";
import Banner11 from "../../../public/images/Banner11.jpeg";
import Banner12 from "../../../public/images/Banner12.jpeg";
import Image from "next/image";

// for slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LikeLogo from "../LikeLogo";
import CartButton from "../navbar/CartButton";
import ALink from "../features/CustomLink";

type Props = {};

const HeroSection = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640, // Tailwind's 'sm' breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // Additional settings for mobile views
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative px-2 sm:px-4  gap-2 ">
      <Slider
        {...settings}
        className="w-full flex cursor-pointer transition-all duration-300"
      >
        {/* <div className="px-2 relative group">
          <Image
            src={Banner9}
            alt="banner-9"
            layout="responsive"
            width={700}
            height={400}
          /> */}
        {/* Overlay buttons with transition */}
        {/* <div className="absolute inset-x-0 bottom-0 flex justify-center gap-4 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            {/* Position your LikeLogo and CartButton here */}
        {/* <div className="bg-white rounded-full p-2 cursor-pointer shadow-lg">
              <LikeLogo />
            </div>
            <div className="bg-white rounded-full p-2 cursor-pointer shadow-lg">
              <CartButton />
            </div>
          </div>
        </div>  */}
        <ALink href={"#"} className="px-2">
          <Image src={Banner10} alt="banner-9" />
        </ALink>
        <ALink href={"#"} className="px-2">
          <Image src={Banner11} alt="banner-9" />
        </ALink>
        <ALink href={"#"} className="px-2">
          <Image src={Banner12} alt="banner-9" />
        </ALink>
        <ALink href={"#"} className="px-2">
          <Image src={Banner10} alt="banner-9" priority={true} />
        </ALink>
        <ALink href={"#"} className="px-2">
          <Image src={Banner11} alt="banner-9" />
        </ALink>
      </Slider>
    </div>
  );
};

export default HeroSection;
