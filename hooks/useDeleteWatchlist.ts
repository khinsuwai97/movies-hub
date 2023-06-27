import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useDeleteWatchlist = (id: string) => {
  // const url = !userId ? `api/posts` : `api/posts/${userId}`;
  const url = id ? `/api/delete/${id}` : null;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useDeleteWatchlist;
