import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useTrendingMovies = (page: number) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&page=${page}`;
  const { data, isLoading, error } = useSWR(url, fetcher);
  return {
    data,
    isLoading,
    error,
  };
};

export default useTrendingMovies;
