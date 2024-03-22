import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> extends AxiosResponse {
  data: T;
}

interface ApiParams {
  data?: any;
  params?: any;
}

interface ApiConfig {
  method: string;
  url: string;
  data?: any;
  params?: any;
  headers?: any;
}

const createApi = (type: string, resource: string) => {
  const url =
    type === "PIM"
      ? `${process.env.NEXT_PUBLIC_PIM_URL}/${resource}`
      : `${process.env.NEXT_PUBLIC_OMS_URL}/${resource}`;

  const list = async <T>(
    params: ApiParams,
    prefix: string = "",
  ): Promise<ApiResponse<T>> => {
    return buildQuery<T>("get", params, prefix);
  };

  const get = async <T>(
    id: string,
    params: ApiParams,
  ): Promise<ApiResponse<T>> => {
    return buildQuery<T>("get", params, id);
  };

  const post = async <T>(
    params: ApiParams,
    prefix: string,
  ): Promise<ApiResponse<T>> => {
    return buildQuery<T>("post", params, prefix);
  };

  const put = async <T>(
    id: string,
    params: ApiParams,
  ): Promise<ApiResponse<T>> => {
    return buildQuery<T>("put", params, id);
  };

  const del = async <T>(id: string): Promise<ApiResponse<T>> => {
    return buildQuery<T>("delete", {}, id);
  };

  const buildQuery = async <T>(
    method: string,
    params: ApiParams,
    prefix: string,
  ): Promise<ApiResponse<T>> => {
    const token = localStorage.token;
    const config: ApiConfig = {
      method,
      url: getFullUrl(prefix),
      data: params.data,
      params: params.params,
      headers: {
        "Content-Type": "application/json",
        user_access_token: token || undefined,
      },
    };
    return axios(config);
  };

  const getFullUrl = (prefix: string): string => {
    return `${url}${prefix ? `/${prefix}` : ""}`;
  };

  return {
    list,
    get,
    post,
    put,
    delete: del,
  };
};

export default createApi;
