import { get } from "@/common/lib/axios-oms-instance";

export const fetchOrderInfoByID = async (orderID) => {
  try {
    let path = `/order/${orderID}`;
    const response = await get(path);
    const { data } = response;
    return data;
  } catch (e) {
    console.log("e :>> ", e);
    return {};
  }
};
