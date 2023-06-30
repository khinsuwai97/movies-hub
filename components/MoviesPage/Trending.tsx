'use client';
import { useState, useEffect } from 'react';
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
  if (!data) {
    return;
  }
  let content;
  if (error) {
    content = <Error message={error.message} />;
  } else if (isLoading) {
    content = <Loading />;
  } else {
    content = <MovieCard movies={data?.results} />;
  }

  return (
    <>
      {content}
      <CustomPagination page={page} setPage={setPage} totalPages={10} />
    </>
  );
};

export default Trending;
