import axios, {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

export const Api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
});
