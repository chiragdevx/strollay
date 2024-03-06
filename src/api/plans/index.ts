import { get } from "@/common/lib/axios-oms-instance";

export const getAllPlans = async () => {
  const path = "/plans?searchFields=status:ACTIVE";
  try {
    const response = await get(path);
    const { data } = response;
    const { data: allPlans = [] } = data;
    return allPlans;
  } catch (e) {
    console.log("Error in getAllplans API call", e);
    return [];
  }
};

export const getProductsByPlan = async (planId) => {
  const path = `/plan/${planId}/applicable-products`;
  try {
    const response = await get(path);
    const { data } = response;
    const { data: allPlans = [] } = data;
    if (allPlans && allPlans.length) {
      const filteredProducts =
        allPlans.filter((product) => product.status === "ACTIVE") || [];
      return filteredProducts;
    }
    return data;
  } catch (e) {
    console.log("Error in getAllplans API call", e);
    return [];
  }
};
