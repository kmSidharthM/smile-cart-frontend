import { QueryCache, QueryClient } from "react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 36_00_000,
    },
  },
});
export default queryClient;
