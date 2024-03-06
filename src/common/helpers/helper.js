import {
  calculateVariantDiscountByPlan,
  getPercentageDiscount,
  getPlanByProduct,
  getVariantUsingVariantOptions,
} from "../../../helpers/variantHelper";

export const getVariantData = ({
  variantGroup,
  variants,
  frequency,
  plans,
}) => {
  let variant = getVariantUsingVariantOptions(variantGroup, variants);
  if (!variant) return null;

  if (frequency === "one_time") {
    const discount = getPercentageDiscount(variant.price, variant.listingPrice);
    variant = {
      ...variant,
      savedDiscount: discount,
      discountType: "PERCENTAGE",
      frequency,
    };
    return variant;
  } else {
    const { plan, applicableProduct } = getPlanByProduct(
      { productId: variant.productId, variantId: variant.id },
      plans
    );
    if (!plan) return null;

    variant = {
      ...variant,
      price: applicableProduct?.planPrice || variant.price,
      listingPrice: applicableProduct?.planPrice
        ? applicableProduct.planPrice
        : variant.listingPrice,
      plan,
    };

    if (
      applicableProduct?.isFirstOrderDiscount ||
      applicableProduct?.discount
    ) {
      const { price, discount, savedDiscount, discountType } =
        calculateVariantDiscountByPlan(
          variant.price,
          applicableProduct.firstOrderDiscount || applicableProduct.discount
        ) || {};
      variant = {
        ...variant,
        listingPrice: variant.price,
        price,
        savedDiscount,
        discount,
        discountType,
      };
    }
    return { ...variant };
  }
};
