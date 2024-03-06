import { get } from "@/common/lib/axios-pim-instance";

export const getAllBundles = async () => {
  const path = "/bundles";
  try {
    const response = await get(path);
    const { data } = response;
    const { data: allBundles = [] } = data;

    return allBundles;
  } catch (e) {
    console.log("Error in getAllBundles API call", e);
    return [];
  }
};
