import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";

import { productActions } from "@/store/actions/products";

const ProductsCarousel = () => {
  const sliderRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    dispatch(productActions.getProducts());
  };

  const products = useSelector((state) => state.products.products);

  const handleVideoEnd = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div>
      <Slider {...settings} ref={sliderRef}>
        {products.map((product, index) => (
          <Link
            href={`product/${product.id}`}
            key={index}
            className={`relative sm:px-[80px] h-[290px]`}
          >
            <div className="absolute inset-0 ">
              {product.video?.data ? (
                <video
                  className="w-full h-full  object-cover"
                  autoPlay
                  muted
                  playsInline
                  poster="/home.png"
                  onEnded={handleVideoEnd}
                >
                  <source src={product.video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src="/images/bgImg.jpg"
                  alt="watch image"
                  layout="fill"
                  objectFit="cover"
                />
              )}
              <div className="absolute inset-0"></div>
            </div>

            <div className=" absolute h-full w-1/2 top-0 left-0 "></div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsCarousel;
