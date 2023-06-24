import useSWR from 'swr';
import fetcher from '@/lib/moviesFetcher';

const useTrendingMovies = (page: number) => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&page=${page}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    data,
    error,
    isLoading,
  };
};

export default useTrendingMovies;
