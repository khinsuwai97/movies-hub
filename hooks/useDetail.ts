import useSWR from 'swr';
import fetcher from '@/lib/detailFetcher';

const useDetail = (type: string, id: number) => {
  const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&language=en-US`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default useDetail;
