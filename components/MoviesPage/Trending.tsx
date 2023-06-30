'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MovieCard from '@/components/Movies/MovieCard';
import Loading from '@/components/Loading';
import useTrendingMovies from '@/hooks/useTrendingMovies';
import Error from '@/components/Error';
import CustomPagination from '../Pagination/CustomPagination';

const Trending = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useTrendingMovies(page);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page, data]);

  let content;
  if (error) {
    content = <Error message={error.message} />;
  } else if (isLoading) {
    content = <Loading />;
  } else {
    content = <MovieCard movies={data?.results!} />;
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {content}
      <CustomPagination page={page} setPage={setPage} totalPages={10} />
    </motion.div>
  );
};

export default Trending;
