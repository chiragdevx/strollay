import createApi from "./api";

const api = createApi("PIM", "product");
// const listApi = createApi("OMS", "orders");
export default class ProductApi {
  static async getAll(query?: string) {
    try {
      let response;
      if (query) {
        response = await api.list(query);
      } else {
        response = await api.list();
      }

      return response.data;
    } catch (error) {
      throw new Error(`Error fetching products: ${error}`);
    }
  }

  static async getById(id: string) {
    try {
      const response = await api.get({}, id);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching the product ${error}`);
    }
  }
}
