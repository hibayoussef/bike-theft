import { InternalAxiosRequestConfig } from "axios";
import { _AuthApi } from "../services/auth/auth.service";
import { _axios as Axios } from "./http-config";

export const HttpRequestInterceptor = () => {
  Axios.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => {
      const token = _AuthApi.getToken();
      if (request.headers) {
        request.headers.Authorization = token ? `Bearer ${token}` : "";
        request.headers.Accept = "application/json";
      }

      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
