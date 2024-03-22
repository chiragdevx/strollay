import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";

// Axios instance with base URL setup, use `axios.defaults.baseURL` property to update host address programmatically
const axiosPIMInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_PIM_BASE_URL}`,
  timeout: 10000,
});

// Add response interceptor
axiosPIMInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data) return response.data;
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Custom methods for common HTTP verbs
const request = (
  method: Method,
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  return axiosPIMInstance.request({
    method,
    url,
    ...config,
  });
};

const get = (
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  return request("get", url, config);
};

const post = (
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  return request("post", url, { data, ...config });
};

const put = (
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  return request("put", url, { data, ...config });
};

const _delete = (
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  return request("delete", url, config);
};

export { get, post, put, _delete };
export default axiosPIMInstance;
