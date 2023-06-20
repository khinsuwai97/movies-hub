import React from 'react';
import { movies } from '@/mockdata/photos/data';
import MovieList from './MovieList';

interface Props {}

const MovieCard = (props: Props) => {
  return (
    <div className="flex justify-around flex-wrap p-4 ">
      {movies.map((movie) => {
        return (
          <MovieList
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.image}
            genere={movie.genere}
            date={movie.date}
            rating={movie.rating}
          />
        );
      })}
    </div>
  );
};

export default MovieCard;
// lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2
// grid sm:grid-cols-3 grid-cols-2
