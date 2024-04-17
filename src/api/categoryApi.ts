import createApi from "./api";

const api = createApi("PIM", "category");

export default class CategoryApi {
  static async getProductsByCategory(categoryId: string) {
    try {
      const pathName = `${categoryId}/products`;
      const response = await api.get({}, pathName);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching products by category: ${error}`);
    }
  }
}
