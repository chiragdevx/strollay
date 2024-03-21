import { safelyReadString } from "@/common/util/commonHelper";
import { useSelector } from "react-redux";

import React, { useMemo } from "react";

import { getVariantData } from "@/common/helpers/helper";

function VariantItem({
  group,
  selected,
  handleVariantSelect,
  option,
  index,
  selectedVariantGroup,
}) {
  const { variants = [] } = useSelector((state) => state.products.product);
  const plans = useSelector((state) => state.plans.plans);
  const frequency = useSelector((state) => state.products.frequency);

  const variant = useMemo(() => {
    if (!selectedVariantGroup) return null;

    const currentVariantGroup = selectedVariantGroup.map((g) => {
      if (g.groupId === group.id) {
        return { ...g, optionId: option.id };
      }
      return g;
    });
    return getVariantData({
      variantGroup: currentVariantGroup,
      variants,
      frequency,
      plans,
    });
  }, [selectedVariantGroup, frequency, variants, option]);

  const Discount = ({ discount }) => {
    switch (discount.type) {
      case "PERCENTAGE":
        return (
          <span className="border-gray-300 px-2.5 border-none font-lato font-bold  rounded-[26px] text-sm text-red-500 bg-red-100">
            save {discount.value}%
          </span>
        );
      case "FIXED":
        return (
          <span className="border-gray-300 px-2.5 border-none font-lato font-bold  rounded-[26px] text-sm text-red-500 bg-red-100">
            save ${discount.value}
          </span>
        );
    }
  };
  if (!variant) return <></>;
  return (
    <div>
      <label
        key={index}
        className={`flex ${
          selected ? "bg-background border-black" : "border-gray-300"
        } items-center mb-2 justify-between px-4 w-full  min-h-max flex py-4 border-2 rounded-3xl  `}
      >
        <div className="flex items-center gap-2 ">
          <input
            type="radio"
            name="payment-radio"
            class="text-primary"
            value={option.id}
            checked={selected}
            onChange={() => {
              handleVariantSelect();
            }}
            className="w-7 h-7 bg-gray-100 border-gray-300 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-opacity-60 focus:border-primary rounded-md"
          />

          <div className="flex justify-start text-start flex-col ">
            <p className="text-stone-800 text-sm font-bold font-Lato capitalize">
              {safelyReadString(option.name)}
            </p>
            {/* <p className="text-stone-800 text-xs font-normal tracking-wide  font-Lato capitalize">
              $1.50/day
            </p> */}
          </div>
        </div>
        <div className="flex items-center text-center flex-row gap-2 text-stone-800 text-sm font-medium font-Lato capitalize">
          {/* {!!variant.savedDiscount && (
             <Discount
             discount={{
               type: variant.discountType,
               value: variant.savedDiscount,
             }}
           />
          )} */}
          {!!variant.savedDiscount && (
            <span className="border-gray-300 px-2.5 border-none font-lato font-bold  rounded-[26px] text-sm text-red-500 bg-red-100">
              save {variant.savedDiscount}%
            </span>
          )}
          <div className="flex flex-col">
            <p className="text-stone-800 text-xs font-semibold font-Lato capitalize">
              ${variant.price}
            </p>
            {!!variant.savedDiscount && (
              <p className="text-stone-400 text-xs font-normal line-through font-Lato capitalize">
                ${variant.listingPrice}
              </p>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

export default VariantItem;
