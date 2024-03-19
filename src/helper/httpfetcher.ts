import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import axios from "axios";
import { baseURL } from "./constant";

export const BaseService = axios.create({
  timeout: 60000,
  baseURL: baseURL,
});

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
