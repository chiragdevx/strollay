import { get } from "@/common/lib/axios-pim-instance";

export const getVariantOptions = async () => {
  const path = "/variant-groups";
  try {
    const response = await get(path);

    const { data: finalProductData = [] } = response;
    return finalProductData;
  } catch (e) {
    console.log("Error in getVariantOptions API call", e);
    return [];
  }
};
