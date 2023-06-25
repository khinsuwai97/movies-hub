import useSWR from 'swr';
import fetcher from '@/lib/moviesFetcher';

// fetch(
//   'https://api.themoviedb.org/3/search/movie?query=action&include_adult=false&language=en-US&page=1',
//   options
// );

const useSearch = (type: string, query: string, page: number) => {
  const url = query
    ? `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}`
    : null;

  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default useSearch;
