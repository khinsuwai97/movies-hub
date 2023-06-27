import axios from 'axios';
import { MovieData } from '@/hooks/useWatchList';

const fetcher = (url: string): Promise<MovieData[]> =>
  axios.get(url).then((res) => res.data);

export default fetcher;
