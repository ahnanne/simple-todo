import { QueryClient, QueryClientConfig } from "react-query";

const defaultOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      // onError: queryErrorHandler,
      retry: 3,
      refetchOnWindowFocus: false,
    },
    mutations: {
      // onError: mutateErrorHandler,
      retry: 3,
    },
  },
};

export const queryClient = new QueryClient({
  ...defaultOptions,
});
