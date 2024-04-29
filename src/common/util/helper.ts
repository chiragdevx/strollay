// import { Product, Variant, image } from "headless-toolkit";

interface ProductImages {
  defaultImage: any | null;
  images: any[];
}

export const getRecordKey = (product: any) => {
  if (!product) return "";
  const { variants, id, variantId } = product;
  let recordKey = "";
  if (product.frequency) {
    recordKey = `${product.frequency}`;
  }
  if (!variants?.length) return id;
  if (!variantId) {
    const variant = getRelatedVariant(product);
    if (variant && variant?.id) {
      recordKey = `${recordKey}-${id}-${variant.id}`;
    }

    recordKey = id;
  }
  recordKey = `${recordKey}-${id}-${variantId}`;
  return recordKey;
};

export const getRelatedVariant = (product: Partial<any>) => {
  if (product) {
    const { variants = [], variantId } = product;
    if (variantId) {
      return variants.find((v: Partial<any>) => v.id === variantId);
    }
    return getDefaultVariant(product);
  }
  return null;
};

export const getDefaultVariant = (product: any) => {
  if (!product) return null;
  const { variants } = product;
  if (variants.length) {
    const defaultVariant = variants.find((v: Partial<any>) => v.defaultVariant);
    if (defaultVariant) return defaultVariant;
    return variants[0];
  }
  return null;
};

export const calculateDiscount = (
  price: string,
  listingPrice: string,
): number => {
  const discount: number = +(
    ((+listingPrice - +price) / +listingPrice) *
    100
  ).toFixed(0);
  return discount;
};

export const getProductImages = (images: any[] = []): ProductImages => {
  if (!images || !images.length) {
    return {
      defaultImage: null,
      images: [],
    };
  }
  const sortedImages = [...images]?.sort((a, b) => a.priority - b.priority);
  const changedImagesArray = sortedImages.map((image) => {
    return {
      ...image,
      path: process.env.NEXT_PUBLIC_CLOUDFRONT_URL + image.path,
    };
  });
  return {
    defaultImage: changedImagesArray[0],
    images: changedImagesArray || [],
  };
};
