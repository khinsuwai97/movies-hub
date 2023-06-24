import axios from 'axios';
import options from './options';
import { ResponseType } from '@/types';
import { GenreResponse } from '@/types';

const fetcher = (url: string): Promise<ResponseType> =>
  axios.get(url, options).then((res) => res.data);

export default fetcher;
