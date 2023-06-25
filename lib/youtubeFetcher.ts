import axios from 'axios';
import options from './options';
import { YoutubeVideoResponse } from '@/types';

const fetcher = (url: string): Promise<YoutubeVideoResponse> =>
  axios.get(url, options).then((res) => res.data);
export default fetcher;
