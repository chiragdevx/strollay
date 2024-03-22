import createApi from "./api";

const api = createApi("PIM", "product");
const listApi = createApi("OMS", "orders");
export default class ProductApi {
  static async getAll(prefix?: string) {
    try {
      const response = await listApi.list({}, prefix);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching products: ${error}`);
    }
  }
}
