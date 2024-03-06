import { get } from "@/common/lib/axios-pim-instance";

export const getAllCategories = async () => {
  const path = "/categories";
  try {
    const response = await get(path);
    const { data } = response;
    const { data: finalCategoriesData = [] } = data;
    return finalCategoriesData;
  } catch (e) {
    console.log("Error in getAllCategories API call", e);
    return [];
  }
};
