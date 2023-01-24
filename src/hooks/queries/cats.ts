import { useQuery } from "react-query";
import { getAPI } from "@/apis/axios";

const fetchCats = () =>
  getAPI({
    endPoint: "/images/search",
  });

export const useFetchCats = () => {
  return useQuery("fetchCats", () => fetchCats());
};
