import path from "path";

export interface Image {
  priority: number;
  path: string;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  inventory: number;
  categories: Array<{ title: string }>;
  images: image[];
  listingPrice: number;
  price: number;
  sku: string;
  slug: string;
  variants: [];
}

interface image {
  id: string;
  path: string;
  priority: number;
}

interface ProductImages {
  defaultImage: image | null;
  images: image[];
}

export const getRelatedVariant = (product) => {
  if (product) {
    const { variants = [], variantId } = product;
    if (variantId) {
      return variants.find((v: any) => v.id === variantId);
    }
    return getDefaultVariant(product);
  }
  return null;
};

export const getDefaultVariant = (product: Product) => {
  if (!product) return null;
  const { variants } = product;
  if (variants.length) {
    const defaultVariant = variants.find((v) => v.defaultVariant);
    if (defaultVariant) return defaultVariant;
    return variants[0];
  }
  return null;
};

export const getProductImages = (images: image[] = []): ProductImages => {
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

export const getImage = (product) => {
  if (!product?.images || !product?.images.length) {
    return null;
  } else {
    const { images } = product;
  }
};
export const getRecordKey = (product) => {
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
  return recordKey
};
