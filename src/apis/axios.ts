import axios from "axios";
import qs from "qs";

import { Dict, CommonAPI } from "@/types/apis";
import { BASE_URL } from "@/constants/api";

const generateQueryEndPoint = (endPoint: string, data: Dict) => {
  const queryString = qs.stringify(data, {
    addQueryPrefix: true,
  });

  return `${endPoint}${queryString}`;
};

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  // TODO: 인증 기능 구현 시에는 defaultHeader 추가
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export const getAPI: CommonAPI = ({ endPoint, data, axiosOption }) => {
  return axiosInstance.get(
    data ? generateQueryEndPoint(endPoint, data) : endPoint,
    axiosOption
  );
};

export const postAPI: CommonAPI = ({ endPoint, data, axiosOption }) => {
  return axiosInstance.post(endPoint, data, axiosOption);
};

export const putAPI: CommonAPI = ({ endPoint, data, axiosOption }) => {
  return axiosInstance.put(endPoint, data, axiosOption);
};

export const deleteAPI: CommonAPI = ({ endPoint, axiosOption }) => {
  return axiosInstance.delete(endPoint, axiosOption);
};

export const patchAPI: CommonAPI = ({ endPoint, data, axiosOption }) => {
  return axiosInstance.patch(endPoint, data, axiosOption);
};
