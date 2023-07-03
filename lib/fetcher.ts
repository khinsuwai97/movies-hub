import axios from 'axios';
interface MovieData {
  id: string;
  userId: string;
  title: string;
  image: string;
  releaseDate: string;
  vote: string;
  movieId: string;
  mediaType: string;
}

const fetcher = (url: string): Promise<MovieData[]> =>
  axios.get(url).then((res) => res.data);

export default fetcher;
