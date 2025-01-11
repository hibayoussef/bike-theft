import { QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: 2 * (60 * 1000), 
      cacheTime: 10 * (60 * 1000)
    },
  },
});

export default queryClient;
