import axios, {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

export const Api: AxiosInstance = axios.create({
  baseURL: "/api",
});
