'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Categories from '../Categories';
import Genre from '../Genre/Genre';
import useCategoriesToggleSeries from '@/hooks/useCategoriesToggleSeries';
import useGenres from '@/hooks/useGenres';
import Error from '../Error';
import GenreLoading from '../GenreLoading';
import useMovies from '@/hooks/useMovies';
import Loading from '../Loading';
import MovieCard from '../Movies/MovieCard';
import CustomPagination from '../Pagination/CustomPagination';

const SeriesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [page, setPage] = useState(1);
  const { toggle, handleToggle, closeToggle } = useCategoriesToggleSeries();
  const { data, error, isLoading } = useGenres('tv');
  const {
    data: moviesData,
    error: moviesError,
    isLoading: moviesLoading,
  } = useMovies('tv', page, selectedGenre);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page, moviesData]);
  const totalPages = selectedGenre ? moviesData?.total_pages! : 500;

  const getSelectedGenre = (genre: string) => {
    setSelectedGenre(genre);
    closeToggle();
    setPage(1);
  };

  const resetGenre = () => {
    setSelectedGenre('');
    closeToggle();
  };

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
    moviesContent = <MovieCard movies={moviesData?.results!} type="tv" />;
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Categories
        toggle={toggle}
        handleToggle={handleToggle}
        type="TV Series"
      />

      {genreContent}
      {moviesContent}
      <CustomPagination page={page} setPage={setPage} totalPages={totalPages} />
    </motion.div>
  );
};

export default SeriesPage;
