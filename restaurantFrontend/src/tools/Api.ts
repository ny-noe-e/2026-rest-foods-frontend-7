import axios, { type AxiosInstance } from "axios";

export const Api: AxiosInstance = axios.create({
  baseURL: "/api",
});
