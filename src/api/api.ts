import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> extends AxiosResponse {
  data: T;
}

interface ApiParams {
  data?: any;
  payload?: any;
}

interface ApiConfig {
  method: string;
  url: string;
  data?: any;
  payload?: any;
  headers?: any;
}

const createApi = (type: string, pathname: string) => {
  const url =
    type === "PIM"
      ? `${process.env.NEXT_PUBLIC_PIM_URL}/${pathname}`
      : `${process.env.NEXT_PUBLIC_OMS_URL}/${pathname}`;

  const list = async <T>(query?: string): Promise<ApiResponse<T>> => {
    return buildQuery<T>("get", {}, query);
  };

  const get = async <T>(
    payload: ApiParams,
    query: string = "",
  ): Promise<ApiResponse<T>> => {
    return buildQuery<T>("get", payload, query);
  };

  const post = async <T>(
    payload: ApiParams,
    query?: string,
  ): Promise<ApiResponse<T>> => {
    console.log("payload", payload);
    return buildQuery<T>("post", payload.payload, query);
  };

  const put = async <T>(
    payload: ApiParams,
    id?: string,
    query?: string,
  ): Promise<ApiResponse<T>> => {
    let _query = "";
    if (id) {
      _query = `${id}/${query}`;
    }
    return buildQuery<T>("put", payload.payload, _query);
  };

  const del = async <T>(id: string): Promise<ApiResponse<T>> => {
    return buildQuery<T>("delete", {}, id);
  };

  const buildQuery = async <T>(
    method: string,
    payload: ApiParams = {},
    query: string = "",
  ): Promise<ApiResponse<T>> => {
    // const token = localStorage?.token;
    const config: ApiConfig = {
      method,
      url: getFullUrl(query),
      data: payload,
      payload: payload,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer U2FsdGVkX18wGM92aNE++7zJEqrKDmw+DR3POotGOb/N2yMzirSEBPMhT5+gMNF7y13xbHL/hLfwTZT3wT1HB8Tj8Gtlnd4Ww4IeL4jr53u+dVRt9HpPOuf9/WEjxjNnk3ObvT3/k5gucBDclds2xdneMkQxH0Gm5dPCEDE+yNfMem/K99hg4iXGD6NUrDgvYIoOKfGjoj268dusf8xaq75unlM9k79bhynvI5/zTPy0JMRr5ANxRNoF//Z1LvKqQmCheRcrEs8EuAJaEf6cfTRzO/mHWSOUnEliX/D70Mxx2QTtkPxVpUv3yc5MORgO",
      },
    };
    console.log("config", config);
    return await axios(config);
  };

  const getFullUrl = (query: string): string => {
    return `${url}${query ? `${query}` : ""}`;
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
