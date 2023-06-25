import axios from 'axios';
import options from './options';
import { DetailResponse } from '@/types';

const fetcher = (url: string): Promise<DetailResponse> =>
  axios.get(url, options).then((res) => res.data);
export default fetcher;
