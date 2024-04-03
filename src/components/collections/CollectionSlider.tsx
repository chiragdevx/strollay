import Slider from "react-slick";
import Image from "next/image";
import Banner9 from "../../../public/images/Banner9.jpg";
import Banner10 from "../../../public/images/Banner10.jpeg";
import Banner11 from "../../../public/images/Banner11.jpeg";
import Banner12 from "../../../public/images/Banner12.jpeg";

// for slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

type Props = {};
const array = [
  Banner10,
  Banner11,
  Banner12,
  Banner9,
  Banner10,
  Banner11,
  Banner12,
];

const CollectionSlider = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000, // Consider lowering this for quicker transitions if needed
    autoplaySpeed: 2000, // Correct property name for autoplay speed
    cssEase: "ease-out", // This easing function can help make transitions appear smoother

    responsive: [
      {
        breakpoint: 1980,
        settings: {
          slidesToShow: 6,
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
    <div className="relative px-2 space-x-4 gap-2 max-w-7xl lg:max-w-[1400px] mx-auto">
      <Slider {...settings} className=" flex cursor-pointer ">
        {array.map((img: any, index: any) => {
          return (
            <div key={index} className="px-4">
              <Card img={img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CollectionSlider;
