import { post } from "@/common/lib/axios-oms-instance";
import { toast } from "react-toastify";

export const submitOrderPaymentDetails = async (payload: object = {}) => {
  let path = "/order";
  try {
    const { type } = payload;
    if (type === "SUBSCRIPTION") path = `${path}/subscription`;
    else path = `${path}/one-time`;
    console.log("path in api", path);
    const response = await post(path, payload);
    console.log("response", response);
    const { data } = response;

    return data;
  } catch (e) {
    toast.error(e.message);
  }
};
