import { createAction } from "@reduxjs/toolkit";

export const collectionActions = {
  setSelectedCollectionId: createAction<{}>(
    "collection/setSelectedCollectionId",
  ),
  getCollections: createAction("collection/getCollections"),
  getProductsByCollection: createAction<{}>(
    "collection/getProductsByCollection",
  ),
};
