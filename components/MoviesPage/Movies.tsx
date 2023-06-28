'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Categories from '../Categories';
import Genre from '../Genre/Genre';
import useCategoriesToggleMovies from '@/hooks/useCategoriesToggleMovies';
import useGenres from '@/hooks/useGenres';
import Error from '../Error';
import GenreLoading from '../GenreLoading';
import useMovies from '@/hooks/useMovies';
import CustomPagination from '../Pagination/CustomPagination';
import MovieCard from '../Movies/MovieCard';
import Loading from '../Loading';

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [page, setPage] = useState(1);
  const { toggle, handleToggle, closeToggle } = useCategoriesToggleMovies();
  const { data, error, isLoading } = useGenres('movie');

  const {
    data: moviesData,
    error: moviesError,
    isLoading: moviesLoading,
  } = useMovies('movie', page, selectedGenre);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page, moviesData]);

  const getSelectedGenre = (genre: string) => {
    setSelectedGenre(genre);
    closeToggle();
  };

  const resetGenre = () => {
    setSelectedGenre('');
    closeToggle();
  };
  // some of the data from api in pages don't work. user can see no data in some pages so I added some fixed number but in gnere I did not fix number but show some error to user
  const totalPages = selectedGenre ? moviesData?.total_pages! : 500;
  let genreContent;
  if (error) {
    genreContent = <Error message={error.messsage} />;
  } else if (isLoading) {
    genreContent = <GenreLoading />;
  } else {
    genreContent = (
      <Genre
        toggle={toggle}
        onClick={getSelectedGenre}
        genres={data?.genres!}
        selectedGenre={selectedGenre}
        reset={resetGenre}
      />
    );
  }

  let moviesContent;
  if (moviesError) {
    moviesContent = <Error message={moviesError.messsage} pageError={true} />;
  } else if (moviesLoading) {
    moviesContent = <Loading />;
  } else {
    moviesContent = <MovieCard movies={moviesData?.results!} type="movie" />;
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Categories toggle={toggle} handleToggle={handleToggle} type="Movies" />
      {genreContent}
      {moviesContent}
      <CustomPagination page={page} setPage={setPage} totalPages={totalPages} />
    </motion.div>
  );
};

export default MoviesPage;
