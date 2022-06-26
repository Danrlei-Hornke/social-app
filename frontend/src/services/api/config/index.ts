import axios, { AxiosInstance } from "axios";
import { StorageService } from "services/storage";

export const CreateApiInstance = (baseUrl: string): AxiosInstance => {
   const api = axios.create({ baseURL: baseUrl });

   api.interceptors.request.use(async (config) => {
      if (!config.headers) return;
      config.headers["Content-Type"] = "application/json";
      const token = StorageService.get("x-access-token", "") as string;
      if (token !== "") config.headers["x-access-token"] = token;
      return config;
   });
   return api;
};
