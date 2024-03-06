import { useSelector } from "react-redux";
import { getTotalAmount, getTotalPlanAmount } from "../util/commonHelper";
import { useEffect, useState } from "react";

const getPlanPricedBox = (box, applicableProducts = []) => {
  return box.map((item) => {
    let p = {};
    if (Array.isArray(applicableProducts) && applicableProducts.length) {
      p = applicableProducts.find(
        (product) =>
          product.id === item.id &&
          (!product.variantId || item.variantId === product.variantId)
      );
    }
    return {
      ...item,
      planPrice: p?.planPrice || item?.price,
      planMinimumQuantity: p?.planMinimumQuantity,
      planMaximumQuantity: p?.planMaximumQuantity,
    };
  });
};

const getPlanDiscount = (discount, fixedPrice) => {
  if (!fixedPrice || !discount) return null;
  if (discount.type === "PERCENTAGE") {
    return +(fixedPrice * (parseInt(discount.value) / 100)).toFixed(2);
  } else if (discount.type === "FIXED") {
    return parseInt(discount.value);
  }
};

export default function useOrderDetails(type, cart) {
  const [data, setData] = useState({});
  const plan = useSelector((state) => state.plans.selectedPlan);
  const _frequency = useSelector((state) => state.box.frequency);
  const frequency = type || _frequency;
  const _box = useSelector((state) => state.box.data);
  const box = cart || _box;
  const applicablePlanProducts = useSelector(
    (state) => state.plans.applicablePlanProducts || []
  );

  const getData = () => {
    const {
      firstOrderDiscount,
      discount: planDiscount,
      planPrice: fixedPrice,
    } = plan || {};

    const isFirstOrderDiscount = !!firstOrderDiscount;

    const discount = isFirstOrderDiscount ? firstOrderDiscount : planDiscount;

    const res = {
      isFirstOrder: isFirstOrderDiscount,
      discountData: discount,
      totalAmount: 0,
      totalDiscount: 0,
      finalAmount: 0,
    };

    if (frequency === "one_time") {
      res.totalAmount = getTotalAmount(box);
      res.totalDiscount = 0;
    } else {
      if (plan.type === "PRODUCT_BASED") {
        const newBox = getPlanPricedBox(box, applicablePlanProducts);

        const total = getTotalPlanAmount(newBox);
        res.totalAmount = total;
        res.totalDiscount = getPlanDiscount(discount, total);
      }

      if (plan.type === "GROUP_BASED") {
        const total = fixedPrice ? fixedPrice : getTotalAmount(box);

        res.totalAmount = total;
        res.totalDiscount = getPlanDiscount(discount, total);
      }
    }
    const totalAmount = +Math.max(0, res.totalAmount).toFixed(2);
    const totalDiscount = +Math.max(0, res.totalDiscount).toFixed(2);
    return {
      ...res,
      totalAmount,
      totalDiscount,
      finalAmount: +Math.max(0, totalAmount - totalDiscount).toFixed(2),
    };
  };

  useEffect(() => {
    const res = getData();
    setData(res);
  }, [plan, box, frequency]);

  return data;
}
