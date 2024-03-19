import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import axios from "axios";
import { baseURL } from "./constant";

const unauthorizedCode = [401];

export const BaseService = axios.create({
  timeout: 60000,
  baseURL: baseURL,
});

BaseService.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;

    const originalRequest = error.config;

    if (
      response &&
      unauthorizedCode.includes(response.status) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
    }
  }
);

const ApiService = {
  fetchData<Response = unknown, Request = Record<string, unknown>>(
    param: AxiosRequestConfig<Request>
  ) {
    return new Promise<AxiosResponse<Response>>((resolve, reject) => {
      BaseService(param)
        .then((response: AxiosResponse<Response>) => {
          resolve(response);
        })
        .catch((errors: AxiosError) => {
          reject(errors);
        });
    });
  },
};

export default ApiService;
