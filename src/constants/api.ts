import { ImageQueryParams } from "@/types/apis";

export const BASE_URL = process.env.REACT_APP_API_URL;

export const API_PATH = {
  GET_IMAGE: (queryParams: ImageQueryParams) =>
    `/images/search?${queryParams || ""}`,
};
