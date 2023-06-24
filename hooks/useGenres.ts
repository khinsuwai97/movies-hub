import useSWR from 'swr';
import fetcher from '@/lib/genreFetcher';

const useGenres = (type: string) => {
  const url = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&language=en`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default useGenres;
