import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import { Product, Image } from "headless-toolkit";
import Banner9 from "../../../../public/images/greenSaree.jpeg";
import Banner10 from "../../../../public/images/greenSareeOne.jpeg";
import Banner11 from "../../../../public/images/greenSaree5.jpeg";
import Banner12 from "../../../../public/images/greenSaree4.jpeg";
import { getProductImages } from "@/common/util/helper";
// import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

// import MediaLightBox from "~/components/partials/product/light-box";

const Magnifier: any = dynamic(
  () =>
    import("@datobs/react-image-magnifiers").then((mod: any) => mod?.Magnifier),
  { ssr: false },
);
const array = [
  Banner11,
  Banner9,
  Banner10,
  Banner12,
  Banner10,
  Banner11,
  Banner12,
];
type Props = {
  product: any;
};
export default function MediaTwo(props: Props) {
  const { product } = props;
  const [index, setIndex] = useState(0);
  const [isOpen, setOpenState] = useState(false);
  const { images } = product;
  const { images: imagesArray } = getProductImages(images);

  useEffect(() => {
    setIndex(0);
  }, [window.location.pathname]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIndex(0);
    }
  }, [typeof window !== "undefined" && window.location.pathname]);

  const openLightBox = (e: any) => {
    e.preventDefault();
    setIndex(parseInt(e.currentTarget.getAttribute("index")));
    setOpenState(true);
  };

  return (
    <>
      <div className="product-gallery row cols-sm-2">
        {imagesArray?.slice(0, 6).map((image: any, index: any) => (
          <figure className="product-image mb-4" key={"image" + index}>
            <Magnifier
              imageSrc={image.path}
              imageAlt="magnifier"
              largeImageSrc={image.path}
              dragToMove={false}
              mouseActivation="hover"
              cursorStyleActive="crosshair"
              className="product-image large-image"
            />
            {/* <InnerImageZoom
              src={image.src}
              zoomSrc={image.src}
              zoomType="hover"
            /> */}

            {/* <Image src={image} width={400} height={400} /> */}

            {index === 0 ? (
              <div className="product-label-group">
                {product.stock === 0 ? (
                  <label className="product-label label-out">out</label>
                ) : (
                  ""
                )}

                {product.is_top ? (
                  <label className="product-label label-top">top</label>
                ) : (
                  ""
                )}

                {product.is_new ? (
                  <label className="product-label label-new">new</label>
                ) : (
                  ""
                )}

                {product.discount ? (
                  <label className="product-label label-sale">sale</label>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}

            <a
              href="#"
              className="product-image-full"
              onClick={openLightBox}
              data-index={index}
            >
              <i className="d-icon-zoom"></i>
            </a>
          </figure>
        ))}
      </div>

      {/* <MediaLightBox
        images={lgImages.slice(0, 4)}
        isOpen={isOpen}
        changeOpenState={changeOpenState}
        index={index}
        product={product}
      /> */}
    </>
  );
}
