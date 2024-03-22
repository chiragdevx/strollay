import createApi from "./api";

const api = createApi("api/product");
export default class ProductApi {
  static async getAll() {
    try {
      const response = await api.list({});
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching products: ${error}`);
    }
  }
}
