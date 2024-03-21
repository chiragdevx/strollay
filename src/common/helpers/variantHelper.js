export const getVariantUsingVariantOptions = (
  selectedVariantGroup,
  variants
) => {
  if (!selectedVariantGroup || !variants) return null;
  return variants.find((v) =>
    v?.options?.every((x) =>
      selectedVariantGroup.some(
        (g) => g.groupId === x.groupId && g.optionId === x.optionId
      )
    )
  );
};

export const getPercentageDiscount = (price, listingPrice) => {
  const discount = ((listingPrice - price) / listingPrice) * 100 || 0;
  return +discount.toFixed(0);
};

export const getPlanByProduct = (product, plans) => {
  let applicableProduct;
  const plan = plans.find((plan) => {
    if (plan.applicableProducts) {
      applicableProduct = plan.applicableProducts.find(
        (p) =>
          p.productId === product.productId &&
          (!p.variantId || p.variantId === product.variantId)
      );
      return applicableProduct;
    }
  });
  return { plan, applicableProduct };
};

export const calculateVariantDiscountByPlan = (_price, discount) => {
  const price = _price.toString();
  if (!discount) {
    return {
      price,
      discount: 0,
      savedDiscount: 0,
      discountType: "",
    };
  }

  console.log("discount :>> ", discount);
  const value = +discount.value;
  switch (discount.type) {
    case "FIXED":
      return {
        price: +(price - value).toFixed(2),
        discount: +value?.toFixed(2),
        savedDiscount: +((value / price) * 100).toFixed(0),
        discountType: "FIXED",
      };
    case "PERCENTAGE":
      return {
        price: +(price - (price * value) / 100).toFixed(2),
        discount: +((price * value) / 100).toFixed(0),
        savedDiscount: +value,
        discountType: "PERCENTAGE",
      };
  }
};
