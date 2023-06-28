import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
const useGetWatchlist = () => {
  // const url = !userId ? `api/posts` : `api/posts/${userId}`;
  const url = `/api/watchlist/getlist`;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useGetWatchlist;
