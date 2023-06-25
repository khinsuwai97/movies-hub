import useSWR from 'swr';
import fetcher from '@/lib/moviesFetcher';

const useMovies = (type: string, page: number, genre: string) => {
  const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default useMovies;
