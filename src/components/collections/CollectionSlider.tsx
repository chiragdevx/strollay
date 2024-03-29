import Slider from "react-slick";
import Image from "next/image";

// for slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

type Props = {};

const CollectionSlider = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoPlaySpeed: 2000,
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
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
        <div className="px-4">
          <Card />
        </div>
      </Slider>
    </div>
  );
};

export default CollectionSlider;
