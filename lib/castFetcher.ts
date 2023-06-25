import axios from 'axios';
import options from './options';
import { CastsResponse } from '@/types';

const fetcher = (url: string): Promise<CastsResponse> =>
  axios.get(url, options).then((res) => res.data);

export default fetcher;
