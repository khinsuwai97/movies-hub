import MovieList from './MovieList';
import { MovieInterface } from '@/types';

interface MovieCardProps {
  movies: MovieInterface[];
  type?: string;
}

const MovieCard = ({ movies, type }: MovieCardProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-fit">
        {movies?.map((movie) => {
          return (
            <MovieList
              key={movie.id}
              id={movie.id}
              title={movie.name || movie.title}
              image={movie.poster_path}
              mediaType={movie.media_type}
              releaseDate={movie.release_date || movie.first_air_date}
              vote={movie.vote_average}
              type={type}
            />
          );
        })}
      </div>
    </div>
    // <div className="max-w-[1600px] mx-auto px-4">
    //   <div className="flex flex-wrap gap-4 justify-start">
    //     {movies?.map((movie) => {
    //       return (
    //         <MovieList
    //           key={movie.id}
    //           id={movie.id}
    //           title={movie.name || movie.title}
    //           image={movie.poster_path}
    //           mediaType={movie.media_type}
    //           releaseDate={movie.release_date || movie.first_air_date}
    //           vote={movie.vote_average}
    //           type={type}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default MovieCard;
