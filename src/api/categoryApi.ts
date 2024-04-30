import createApi from "./api";

export default class CategoryApi {
  static async getProductsByCategory(categoryId: string) {
    try {
      const api = createApi("PIM", "category");

      const pathName = `${categoryId}/products`;
      const response = await api.get({}, pathName);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching products by category: ${error}`);
    }
  }

  static async getCategories() {
    try {
      const api = createApi("PIM", "categories");
      const response = await api.get({});
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching products by category: ${error}`);
    }
  }
}
