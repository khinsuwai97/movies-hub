import axios from 'axios';
import options from './options';
import { GenreResponse } from '@/types';

const fetcher = (url: string): Promise<GenreResponse> =>
  axios.get(url, options).then((res) => res.data);
export default fetcher;
