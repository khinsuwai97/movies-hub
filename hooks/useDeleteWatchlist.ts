import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useDeleteWatchlist = () => {
  const url = `/api/watchlist`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useDeleteWatchlist;
