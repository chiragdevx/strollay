import { createAction } from "@reduxjs/toolkit";

export const VariantOptionsActions = {
  getVariantOptions: createAction("variantOptions/getVariantOptions"),
  setVariantOptions: createAction("variantOptions/setVariantOptions"),
};
