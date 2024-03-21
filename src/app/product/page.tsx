"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { getProductImages } from "@/common/util/helper";
import { productActions } from "@/store/actions/products";
import { PlanActions } from "@/store/actions/plans";
import { cartActions } from "@/store/actions/cart";
import { toggleCart } from "@/store/reducers/cart";
import { VariantOptionsActions } from "@/store/actions/variant-option";
import { getVariantData } from "@/common/helpers/helper";
import Loader from "@/components/common/loader";
import Ratings from "@/components/elements/ratings";
import VariantItem from "@/components/common/variant-item";
import ArrowIcon from "@/components/common/arrow-icon";
import { useAppSelector } from "@/store/hooks";
import { useSearchParams } from "next/navigation";

interface ArrowIconProps {
  bgColor: string;
  direction: "left" | "right" | "up" | "down";
}

interface VariantOption {
  id: string;
  name: string;
}

interface VariantGroup {
  id: string;
  variantOptions: VariantOption[];
}
interface ProductDetailProps {
  params: {
    productId: String;
  };
}

const ProductPage: React.FC<ProductDetailProps> = ({ params }) => {
  // const { productId } = params;
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const variantOptions = useAppSelector(
    (state) => state.variantOptions.variantOptions
  );
  const product = useAppSelector((state) => state.products.product);
  const loading = useAppSelector((state) => state.products.loading);
  const frequency = useAppSelector((state) => state.products.frequency);
  const plans = useAppSelector((state) => state.plans.plans);

  const {
    images = [],
    title,
    description,
    variants = [],
    bodyHtml,
    productMeta,
  } = product || {};

  const { defaultImage, images: formattedProductImages } =
    getProductImages(images);

  const [selectedVariantGroup, setVariantGroup] = useState(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(defaultImage?.path);

  useEffect(() => {
    setSelectedImage(defaultImage?.path);
  }, [defaultImage?.path]);

  const productId = searchParams.get("id");

  useEffect(() => {
    if (productId) dispatch(productActions.getProductByID({ productId }));
  }, [dispatch, productId]);

  useEffect(() => {
    if (!selectedVariantGroup && variantOptions.length) {
      const data = variantOptions.map((v) => {
        return {
          groupId: v.id,
          optionId: v.variantOptions[0].id,
        };
      });
      setVariantGroup(data);
    }
  }, [variantOptions, selectedVariantGroup]);

  useEffect(() => {
    dispatch(PlanActions.getPlans());
    dispatch(VariantOptionsActions.getVariantOptions());
  }, []);

  useEffect(() => {
    if (!frequency) {
      handleFrequencyChange("subscription");
    }
  }, [frequency]);

  const handleVariantSelect = (option) => {
    const data = selectedVariantGroup.map((g) => {
      if (g.groupId === option.groupId) {
        g.optionId = option.optionId;
        return g;
      }
      return g;
    });
    setVariantGroup(data);
  };

  const handleImageSelect = (e, path) => {
    e.preventDefault();
    setSelectedImage(path);
    const newIndex = formattedProductImages.findIndex(
      (img) => img.path === path
    );
    setSelectedImageIndex(newIndex);
  };

  const handleArrowClick = (e, direction) => {
    e.preventDefault();
    const lastIndex = formattedProductImages.length - 1;
    const newIndex =
      direction === "left"
        ? selectedImageIndex === 0
          ? lastIndex
          : selectedImageIndex - 1
        : selectedImageIndex === lastIndex
        ? 0
        : selectedImageIndex + 1;

    setSelectedImageIndex(newIndex);
    setSelectedImage(formattedProductImages[newIndex].path);
  };

  const addToCart = (_product, variant) => {
    dispatch(toggleCart());
    let product = _product;
    if (variant) {
      product = {
        ..._product,
        ...variant,
        id: _product.id,
        variantId: variant.id,
        title: _product.title,
        description: variant.title,
      };
    }

    dispatch(cartActions.addToCart({ ...product, frequency, quantity: 1 }));
  };

  const handleFrequencyChange = (event) => {
    dispatch(productActions.setFrequency(event));
  };

  const getSelectedVariant = (groupId, optionId) => {
    if (!selectedVariantGroup) return false;
    const selectedGroup = selectedVariantGroup.find(
      (g) => g.groupId === groupId
    );
    if (!selectedGroup) return false;
    return selectedGroup.optionId === optionId;
  };

  const selectedVariant = useMemo(() => {
    return getVariantData({
      variantGroup: selectedVariantGroup,
      variants,
      frequency,
      plans,
    });
  }, [selectedVariantGroup, variants, frequency, plans]);

  if (!product) return <>no product</>;
  return (
    <main className="main antialiased">
      <section className="py-6 md:py-8">
        <div className="max-w-[1200px] px-4 mx-auto">
          <div className="flex flex-wrap mb-12 md:mb-24  -mx-4">
            <div className="w-full px-4 md:pr-16 mb-2 md:w-3/5 flex-1 overflow-visible md:mb-0">
              <div className="flex md:hidden flex-col pb-2 gap-1">
                <div className="flex justify-start flex-col ">
                  <h2 className="text-gray-900 font-bold text-[28px] md:text-[32px]  leading-normal capitalize tracking-normal font-roboto-slab ">
                    {title}
                  </h2>
                </div>
                <div className=" ">
                  <h1 className="text-gray-800 text-base tracking-wide font-lato font-normal">
                    <span>246g / 8.67oz / 30 chews</span>
                  </h1>
                </div>
                <div>
                  {" "}
                  <h4 className="text-gray-900 text-base  tracking-wide font-lato font-bold">
                    Chewable supplement formulated for dogs over 65lbs
                  </h4>
                </div>
              </div>
              <div className="sticky top-40 ">
                {/* Image Gallery */}
                <div className="relative mb-1 w-full rounded-xl">
                  <a
                    className="absolute -left-[14px] transform lg:ml-2 top-1/2 translate-1/2"
                    href="#"
                    onClick={(e) => handleArrowClick(e, "left")}
                  >
                    <ArrowIcon bgColor={"#C2E2C2"} direction={"left"} />
                  </a>
                  <div className="h-[342px] md:h-[590px] max-h-[590px] w-full">
                    <Image
                      className="object-cover object-center w-full h-full  rounded-xl  "
                      src={selectedImage || "/images/sourceImage.png"}
                      height={330}
                      width={590}
                      alt=""
                    />
                  </div>

                  <a
                    className="absolute -right-[14px] transform lg:mr-2 top-1/2 translate-1/2"
                    href="#"
                    onClick={(e) => handleArrowClick(e, "right")}
                  >
                    <ArrowIcon className={"bg-primary"} direction={"right"} />
                  </a>
                </div>
                {/* Thumbnails */}
                <div className="flex w-full  overflow-x-scroll hide-scrollbar">
                  {formattedProductImages?.map(({ path }, index) => (
                    <div
                      className="flex-1 p-1 md:p-2 max-w-fit md:max-w-[160px] sm:w-1/4"
                      key={index}
                    >
                      <a
                        className={`block border-2 border-transparent ${
                          index === selectedImageIndex && "border-yellow"
                        }`}
                        href="#"
                        onClick={(e) => handleImageSelect(e, path)}
                      >
                        <Image
                          className="object-cover h-16 w-16 md:max-h-[280px] rounded-lg lg:h-32 lg:w-full"
                          src={path || "/images/sourceImage.png"}
                          alt=""
                          height={120}
                          width={128}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Product Details */}
            <div className="w-full px-4  flex space-y-4 flex-col md:w-2/5 ">
              <div className="gap-1">
                {/* <span className="text-yellow ">New</span> */}
                <div className="hidden md:flex flex-col gap-1">
                  <div className="flex justify-start flex-col ">
                    <h2 className="text-gray-900 font-bold text-[28px] pt-2 md:text-[28px] leading-[50.033px] capitalize tracking-normal font-roboto-slab ">
                      {title}
                    </h2>
                  </div>
                  <div className=" ">
                    <h1 className="text-gray-800 text-base tracking-wide font-lato font-normal">
                      {description}
                    </h1>
                  </div>
                  <div>
                    <div
                      className="text-gray-900 text-normal   tracking-wide font-lato font-bold"
                      dangerouslySetInnerHTML={{ __html: bodyHtml }}
                    ></div>
                    {productMeta?.description && (
                      <div className="pt-3">{productMeta?.description} </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 ">
                <div>
                  <Ratings rating={5} />
                </div>
                <div className="flex w-full flex-row justify-between">
                  <div className="flex relative flex-1 flex-row items-center justify-center gap-2">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 inline-flex items-center justify-center text-white relative z-10">
                      <Image
                        src={"/images/hiw-stepone.svg"}
                        width={60}
                        height={60}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-2 w-2/3">
                      <h2 className="font-extrabold font-lato  text-gray-900 mb-1 text-sm">
                        HELPS WITH:
                      </h2>
                      <p className="leading-relaxed font-lato">Inflammation</p>
                    </div>
                  </div>
                  <div className="flex relative flex-row flex-1 items-center justify-center gap-2">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 inline-flex items-center justify-center text-white relative z-10">
                      <Image
                        src={"/images/hiw-stepone.svg"}
                        width={60}
                        height={60}
                        alt=""
                      />
                    </div>
                    <div className="flex-grow pl-2 w-2/3">
                      <h2 className="font-extrabold font-lato  text-gray-900 mb-1 text-sm">
                        BEST FOR:
                      </h2>
                      <p className="leading-relaxed font-lato">Joint Health</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* the subscription section */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 p-2 rounded-[30px]  border-black border-[1px]">
                  <button
                    value={frequency}
                    onClick={() => {
                      handleFrequencyChange("subscription");
                    }}
                    className={`flex ${
                      frequency === "subscription"
                        ? "bg-emerald-400 text-white border-black font-bold"
                        : "bg-white border-[#81D2B4] text-black "
                    }   gap-4 flex-1  px-[10px] py-2 justify-center tracking-tight capitalize rounded-[26px] font-semibold border-2`}
                  >
                    subscribe & save
                  </button>
                  <button
                    value={frequency}
                    onClick={() => {
                      handleFrequencyChange("one_time");
                    }}
                    className={`flex ${
                      frequency === "one_time"
                        ? "bg-emerald-400 text-white border-black font-bold"
                        : "bg-white border-[#81D2B4] text-black "
                    }   gap-4 flex-1 px-[10px] py-2 justify-center tracking-tight capitalize rounded-[26px] font-semibold border-2`}
                  >
                    Single Purchase
                  </button>
                </div>
                {loading && (
                  <Loader className="text-gray-200 animate-spin align-center flex justify-center dark:text-gray-600 fill-black" />
                )}
                {!loading &&
                  selectedVariantGroup?.length > 0 &&
                  variantOptions.map((group, index) =>
                    index === 0 ? (
                      <>
                        <div className="flex flex-col gap-2">
                          <div className="text-stone-800 text-sm font-bold font-Lato capitalize leading-[23.04px]">
                            {group.name}:
                          </div>

                          <div className="flex flex-row gap-4">
                            {group?.variantOptions?.length &&
                              group?.variantOptions?.map((option, index) => (
                                <button
                                  value={option.name}
                                  onClick={(e) => {
                                    handleVariantSelect({
                                      groupId: group.id,
                                      optionId: option.id,
                                    });
                                  }}
                                  key={index}
                                  className={`flex ${
                                    getSelectedVariant(group.id, option.id)
                                      ? "bg-emerald-400 text-white text-sm font-bold border-2 border-black"
                                      : "bg-white text-stone-800 text-sm font-medium border-[1px] border-gray-500"
                                  } items-stretch  justify-center w-full  min-h-max flex py-2   rounded-[26px] `}
                                >
                                  <div className="flex items-center text-center  font-Lato capitalize">
                                    {option.name}
                                  </div>
                                </button>
                              ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      index === 1 && (
                        <>
                          <div className="flex flex-col gap-2">
                            <div className="text-stone-800 text-sm font-bold font-Lato capitalize leading-[23.04px]">
                              {group.name}:
                            </div>
                            {group.variantOptions?.map((option, index) => (
                              <VariantItem
                                index={index}
                                group={group}
                                selectedVariantGroup={selectedVariantGroup}
                                selected={getSelectedVariant(
                                  group.id,
                                  option.id
                                )}
                                option={option}
                                handleVariantSelect={() =>
                                  handleVariantSelect({
                                    groupId: group.id,
                                    optionId: option.id,
                                  })
                                }
                                key={index}
                              />
                            ))}
                          </div>
                        </>
                      )
                    )
                  )}
              </div>
              {/* select a plan */}

              {/* Continue Button */}
              <div className="mt-6">
                {!!selectedVariant?.price && (
                  <button
                    onClick={() => {
                      addToCart(product, selectedVariant);
                    }}
                    type="submit"
                    className={`w-full px-4 py-3
                       bg-red-500 
                    font-lato text-[24px] uppercase font-bold text-white  rounded-[35px]  lg:w-full`}
                  >
                    {`Add to Cart - $${selectedVariant?.price}`}
                  </button>
                )}

                <div className="w-full font-bold font-lato pt-4 flex flex-row justify-around text-xs ">
                  <span className="flex flex-row gap-1">
                    <Image
                      src={"/images/red_true.svg"}
                      alt="truck"
                      height={12}
                      width={12}
                    />
                    <p className=" font-bold font-roboto-slab">
                      Arrives in 3-5 Days
                    </p>
                  </span>

                  <span className="flex flex-row gap-1">
                    <Image
                      src={"/images/red_true.svg"}
                      alt="truck"
                      height={12}
                      width={12}
                    />
                    <p className=" font-bold font-roboto-slab">
                      90-day Money Back Guarantee
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
