import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
const useGetWatchlist = (userId: string) => {
  const url = userId ? `/api/watchlist/${userId}` : null;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useGetWatchlist;
