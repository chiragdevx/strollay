import { createAction } from "@reduxjs/toolkit";

export const boxActions = {
  // Below 3 will communicate with `/categories` API.
  getBox: createAction("box/getBox"),
  addToBox: createAction<{}>("box/addToBox"),
  removeFromBox: createAction<{}>("box/removeFromBox"),
  setBox: createAction("box/setBox"),
  getBoxError: createAction("box/getBoxError"),
  emptyBox: createAction("box/emptyBox"),
  setFrequency: createAction("box/setFrequency"),
  deleteItem: createAction("box/deleteItem"),
};
