import React, { useState } from 'react';
import MovieList from './MovieList';
import { MovieInterface } from '@/types';

interface MovieCardProps {
  movies: MovieInterface[];
}

const MovieCard = ({ movies }: MovieCardProps) => {
  return (
    <>
      <div className="flex justify-around flex-wrap p-4 ">
        {movies.map((movie) => {
          return (
            <MovieList
              key={movie.id}
              id={movie.id}
              title={movie.name || movie.title}
              image={movie.poster_path}
              mediaType={movie.media_type}
              releaseDate={movie.release_date || movie.first_air_date}
              vote={movie.vote_average}
            />
          );
        })}
      </div>
    </>
  );
};

export default MovieCard;
