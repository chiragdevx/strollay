import Slider from "react-slick";
import Banner9 from "../../../public/images/Banner9.jpg";
import Banner10 from "../../../public/images/Banner10.jpeg";
import Banner11 from "../../../public/images/Banner11.jpeg";
import Banner12 from "../../../public/images/Banner12.jpeg";
import Image from "next/image";

// for slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//

type Props = {};

const HeroSection = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoPlaySpeed: 2000,
  };
  return (
    <div className="relative px-2 space-x-4 gap-2">
      <Slider {...settings} className="w-screen flex ">
        <div className="px-2">
          <Image src={Banner9} alt="banner-9" />
        </div>
        <div className="px-2">
          <Image src={Banner10} alt="banner-9" />
        </div>
        <div className="px-2">
          <Image src={Banner11} alt="banner-9" />
        </div>
        <div className="px-2">
          <Image src={Banner12} alt="banner-9" />
        </div>
        <div className="px-2">
          <Image src={Banner10} alt="banner-9" />
        </div>
        <div className="px-2">
          <Image src={Banner11} alt="banner-9" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSection;
