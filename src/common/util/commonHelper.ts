import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum PlanType {
  PRODUCT_BASED = "PRODUCT_BASED",
  GROUP_BASED = "GROUP_BASED",
}

export enum CouponType {
  FIXED = "FIXED",
  PERCENTAGE = "PERCENTAGE",
  BUY_X_GET_Y = "BUY_X_GET_Y",
}

export function getSubscriptionDiscount(planDiscount, orderItems, plan) {
  let cartTotal = getTotalAmount(orderItems);
  if (plan && plan.type === PlanType.GROUP_BASED && plan.fixedPrice) {
    cartTotal = plan.fixedPrice;
  }

  const coupon = this.getDiscountToCouponFormat(planDiscount);

  const { discount } = getCouponDiscount({
    coupon,
    cartItems: orderItems,
    cartTotal,
    isCouponValid: true,
  });
  const amount = cartTotal - discount;
  return {
    amount,
    discount,
  };
}

export const getTotalAmount = (
  cartItems: Array<{
    price: number;
    quantity: number;
  }> = []
) => {
  if (!cartItems) return 0;
  return cartItems.reduce((total, item) => {
    return +(total + (item.price * (item.quantity || 1) || 0)).toFixed(2);
  }, 0);
};

export const getTotalPlanAmount = (
  cartItems: Array<{
    planPrice: number;
    quantity: number;
  }> = []
) => {
  if (!cartItems) return 0;
  return cartItems.reduce((total, item) => {
    return +(total + (item.planPrice * (item.quantity || 1) || 0)).toFixed(2);
  }, 0);
};

export const getCouponDiscount = ({
  coupon,
  cartItems,
  cartTotal,
  isCouponValid,
}) => {
  const res = { allowed: false, discount: 0, products: null };
  if (!coupon || !isCouponValid) {
    return res;
  }

  const {
    couponType,
    buyXQuantity = 0,
    getYQuantity = 0,
    getYPercentage = 0,
    getYAmount = 0,
    maxDiscount,
  } = coupon;

  switch (couponType) {
    case CouponType.FIXED:
      res.discount = Math.min(maxDiscount || Infinity, cartTotal, getYAmount);
      res.allowed = true;
      break;

    case CouponType.PERCENTAGE:
      const perDiscount = cartTotal * (getYPercentage / 100);

      res.discount = Math.min(maxDiscount || Infinity, cartTotal, perDiscount);
      res.allowed = true;
      break;

    case CouponType.BUY_X_GET_Y:
      const isValid = validateBxGy(coupon, cartItems);
      if (!isValid) {
        return res;
      }
      const discountedQuantity = getBxGyFreeQuantity(
        getYQuantity,
        buyXQuantity,
        cartItems
      );

      const { discount: bxgyDiscount, freeProducts } = getBxGyDiscount(
        cartItems,
        discountedQuantity
      );

      res.discount = bxgyDiscount;
      res.allowed = true;
      res.products = freeProducts;
      break;

    default:
      res.discount = 0;
      res.allowed = false;
      break;
  }

  return { ...res, discount: +res.discount.toFixed(2) };
};

const validateBxGy = (coupon, cartItems) => {
  const { buyXQuantity, getYQuantity } = coupon;
  const totalItems = getCartCount(cartItems);
  if (totalItems < buyXQuantity + getYQuantity) {
    return false;
  }
  return true;
};

export const getCartCount = (cartItems = []): number => {
  const total = cartItems?.reduce(
    (acc: number, item) => acc + (item?.quantity || 1),
    0
  );
  return total || 0;
};

const getBxGyFreeQuantity = (
  getYQuantity: number,
  buyXQuantity: number,
  cartItems
) => {
  //GET FREE PRODUCT: ex.b3g2 and cart is 10 then freeProduct = 4
  const totalItems = getCartCount(cartItems);
  return (
    Math.floor(
      (totalItems -
        (totalItems * buyXQuantity) / (buyXQuantity + getYQuantity)) /
        getYQuantity
    ) * getYQuantity
  );
};

const getBxGyDiscount = (cartItems, discountedQty: number) => {
  const products = [];
  //spread  all the products with quantity 1 and sort in accending order
  cartItems?.forEach((c) => {
    products.push(...Array(c.quantity || 1).fill({ ...c, quantity: 1 }));
    products.sort((a, b) => (b.price > a.price ? 1 : -1));
  });

  //slice it out discounted items
  const discountedItems = products.slice(-discountedQty);

  //merge the same products and sum its quantity
  const mergedProducts = Object.values(
    discountedItems.reduce((acc, curr) => {
      const key = `${curr.productId}-${curr.variantId}`;
      if (acc[key]) {
        acc[key].quantity += curr.quantity;
      } else {
        acc[key] = { ...curr };
      }
      return acc;
    }, {})
  );

  return {
    discount: discountedItems.reduce((a, b) => a + b.price, 0),
    freeProducts: mergedProducts,
  };
};

export const validateByPlan = (plan, orderItems) => {
  try {
    if (!plan) return;

    const { applicableProducts: planProducts } = plan;
    //Fetch product of plan

    if (
      plan.planMinimumQuantity &&
      plan.planMinimumQuantity > getTotalOrderQuantity(orderItems)
    ) {
      throw new Error(
        `Minimum ${plan.planMinimumQuantity} products is required.`
      );
    } else if (
      plan.planMaximumQuantity &&
      plan.planMaximumQuantity < getTotalOrderQuantity(orderItems)
    ) {
      throw new Error(
        `Maximum ${plan.planMaximumQuantity} products is allowed.`
      );
    }

    if (!planProducts || !planProducts.length) {
      return orderItems;
    }

    const data = orderItems.map((orderItem) => {
      const planItem = planProducts.find(
        (product) =>
          product.productId === orderItem.productId &&
          (!product.variantId || orderItem.variantId === product.variantId)
      );

      if (!planItem) {
        throw new Error(`${orderItem.title} is not applicable in plan`);
      }

      if (plan.type === PlanType.PRODUCT_BASED) {
        if (
          "planMinimumQuantity" in planItem &&
          planItem.planMinimumQuantity > orderItem.quantity
        ) {
          throw new Error(
            `Minimum ${planItem.planMinimumQuantity} Quantity required in product ${orderItem.productId}.`
          );
        } else if (
          "planMaximumQuantity" in planItem &&
          planItem.planMaximumQuantity < orderItem.quantity
        ) {
          throw new Error(
            `Maximum ${planItem.planMaximumQuantity} Quantity allowed in product ${orderItem.productId}.`
          );
        } else {
          if ("planPrice" in planItem)
            return {
              ...orderItem,
              price: planItem.planPrice,
            };
        }
        return orderItem;
      }
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const getTotalOrderQuantity = (
  cartItems: Array<{
    [key: string]: unknown;
    quantity: number;
  }> = []
) => {
  if (!cartItems) return 0;
  return cartItems.reduce((total, item) => {
    return total + item.quantity || 1;
  }, 0);
};

export const safelyReadString = (stringVal = "") => {
  if (stringVal) return stringVal;
  return "";
};
