import createApi from "./api";

export default class collectionApi {
  static async getProductsByCollection(collectionId: string) {
    try {
      const api = createApi("PIM", "collection");

      const pathName = `/${collectionId}/products`;
      const response = await api.get({}, pathName);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching products by collection: ${error}`);
    }
  }

  static async getCollections() {
    try {
      console.log("Reached here");
      const api = createApi("PIM", "collections");
      const response = await api.get({});
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching products by collection: ${error}`);
    }
  }
}
